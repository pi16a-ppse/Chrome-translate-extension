"use strict";

/**
 * Типа глобальная переменная; В нее заносится значение, когда пользователь выделяет текст; Из нее берется значение, когда пользователь нажимает ""
 * @type {string}
 */
let selectionText = "";

/**
 * Делает перевод и сопутствующие действия
 * @async
 * @returns {void}
 */
let doTranslateActions = async () => {
    $('#translateButton').hide();

    let textToTranslate = selectionText;
    $('#bodyOfTranslateDiv>#input').text(selectionText);

    if (!isEmptyOrSpaces(textToTranslate)) {

        let translatedText = await yatr.translate(textToTranslate);
        let langFrom = translatedText.lang.substr(0, 2);
        let langTo = translatedText.lang.substr(3, 2);

        $('#translateLang').text(`Переведено с ${langFrom} на ${langTo}`);
        translatedText = translatedText.text;
        $('#mainTranslate').text(translatedText);
        $('#bodyOfTranslateDiv').show();

    }
};

/**
 * Инициализация
 * @returns {void}
 */
$(document).ready(function () {
    // создаю div-активатор перевода
    let $div = $("<div id=\"myTempDiv\" style='background: transparent; width: 200px; display: flex; flex-direction: column; position:absolute; z-index: 9999;'>").appendTo($("body"));

    let translateButton = $("<button class=\"btn\" id=\"translateButton\">Перевести</button>").appendTo($div);
    let bodyOfDiv = $("<div id=\"bodyOfTranslateDiv\" style='background: white'>\n" +
            "      <b><div id=\"mainTranslate\" style=\"padding: 2px;\"></div></b>\n" +
            "    <div id=\"afterTranslate\">\n" +
            "      <div id=\"translateLang\" style=\"padding: 2px;\"></div>\n" +

            "    \n" +
            "    </div>\n" +
            "  </div>")
        .appendTo($div);
    bodyOfDiv.hide();
    $div.hide();
    translateButton.click(doTranslateActions);


    $('#input').focus(() => {
        $('#afterTranslate').hide()
    });

    $('#btn_submit').click(translateAndShow);


    // при нажатии на Ctrl + Enter
    let isCtrl = false;
    $(document).keyup(function (e) {
        if (e.which == 17) isCtrl = false;
    }).keydown(function (e) {
        if (e.which == 27)
            hideOldElements();

        if (e.which == 17) isCtrl = true;
        if (e.which == 13 && isCtrl == true) {
            // получаем и показываем выделенный текст
            $("#translateButton").show();
            handleSelection();
        }
    });

    // $(document).mousedown(() => {
    //     // hideOldElements();
    // });

    $(document).mouseup(() => {
        $("#translateButton").show();
        handleSelection();
    });


});

/**
 * По идее, запускается по клику на tempButton. Переводит и показывает перевод слова.
 * @returns {void}
 */
async function translateAndShow() {
    $("#translateButton").hide();
    let textToTranslate = $('#input').val();

    if (!isEmptyOrSpaces(textToTranslate)) {

        let translatedText = await yatr.translate(textToTranslate);
        let langFrom = translatedText.lang.substr(0, 2);
        let langTo = translatedText.lang.substr(3, 2);

        $('#translateLang').text(`Переведено с ${langFrom} на ${langTo}`);
        translatedText = translatedText.text;
        $('#mainTranslate').text(translatedText);

        $('#afterTranslate').show();
    }
}


/**
 * Удаляет устаревшие временные элементы на странице (типа блока перевода)
 * @returns {void}
 */
function hideOldElements() {
    let $div = $("#myTempDiv");
    $div.hide();
    let bodyOfDiv = $("#bodyOfTranslateDiv");
    bodyOfDiv.hide();

}

/**
 * Обработчик события выделения. Получает выделение, показывает возле этого места кнопку перевода.
 * @returns {string} - выделенный текст
 */
function handleSelection() {

    let text = "";

    let selection = window.getSelection();
    log(selection);
    text = selection.toString();
    selectionText = text;
    if (isEmptyOrSpaces(text))
        return text;

    /**
     * Создаем range, чтобы получить координаты выделения.
     */
    const range = selection.getRangeAt(0);
    const $span = $("<span/>");

    let newRange = document.createRange();
    newRange.setStart(selection.focusNode, range.endOffset);
    newRange.insertNode($span[0]); // using 'range' here instead of newRange unselects or causes flicker on chrome/webkit

    const x = $span.offset().left;
    let y = $span.offset().top;
    let $div = $("#myTempDiv");
    // $div.text(x + " " + y);
    $div.css({
        left: x,
        top: y + ($span.height())
    });

    $div.show();
    $span.remove();

    return text;
}