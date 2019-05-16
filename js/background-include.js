"use strict";

/**
 * Типа глобальная переменная; В нее заносится значение, когда пользователь выделяет текст; Из нее берется значение, когда пользователь нажимает ""
 * @type {string}
 */
let selectionText = "";

/**
 * Переводит текст и выводит результат.
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
    /*
     * Код блока перевода. Это тот pop-up, который показывается при нажатии на кнопку перевода
     */
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



    {
        let isCtrl = false;
        /**
         * При нажатии на Ctrl+Enter, показываем перевод; При нажатии на Esc, прячем его.
         * @param e - объект события мыши
         */
        $(document).keyup(function (e) {
            /**
             * Обрабатываем "отжатие" Ctrl
             */
            if (e.which == 17) {
                isCtrl = false;
            }
        }).keydown(function (e) {
            /**
             * Обрабатываем нажатие ESC
             */
            if (e.which == 27) {
                hideOldElements();
            }

            /**
             * Обрабатываем нажатие Ctrl
             */
            if (e.which == 17) {
                isCtrl = true;
            }

            /**
             * Обрабатываем нажатие Ctrl+Enter
             */
            if (e.which == 13 && isCtrl == true) {
                /**
                 * Показываем кнопку перевода
                 * */
                $("#translateButton").show();
                handleSelection();
            }
        });
    }

    /**
     * Обрабатываем событие "Отжатия" мыши, т.е. запускаем обработку выделения мышью
     */
    $(document).mouseup(() => {
        $("#translateButton").show();
        handleSelection();
    });


});

/**
 * Запускается по клику на tempButton. Переводит и показывает перевод слова.
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
 * Прячет устаревшие временные элементы на странице (типа блока перевода)
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
    if (isEmptyOrSpaces(text)) {
        return text;
    }

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
    /**
     * ставим блок-кнопку перевода в месте, где закончилось выделение
     */
    $div.css({
        left: x,
        top: y + ($span.height())
    });

    $div.show();
    $span.remove();

    return text;
}