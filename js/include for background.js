// // тут подключение include/common
//
//
// $(document).ready(function(){
//     $('#btn_submit').click(function(){
//         let text = $('#input').val();
//         //log(text);
//         var lang = detectLanguageFor(text);
//         var translatedText = yatr.translate(text, lang);
//         $('#result').text(text);
//
//     });
// });
//
//
// /**
//  * shortcut для console.log
//  * @param text
//  */
// let log = (text) => console.log(text);
//
//
// /**
//  * Проверяет, что строка пуста или состоит из пробельных символов (пробелы, табы и т.д.)
//  * @param {string} str
//  */
// function isEmptyOrSpaces(str) {
//     return str == null || str.trim() === '';
//
// }
//
// /**
//  * Ищет textNode внутри root node. Из анализа исключены теги из invalidTags.
//  * @param root корневая node, в которой искать textNodes.
//  * @returns Array textNode.
//  */
// function getTextNodesIn(root) {
//     const textNodes = [];
//
//     /**
//      * Возвращает массив всех дочерних (в inf поколении) textNode
//      * @param {*} node - node анализа.
//      */
//     function getNodes(node) {
//         if (node.nodeType === Node.TEXT_NODE) {
//             textNodes.push(node);
//         } else if (node.nodeType === Node.ELEMENT_NODE && !invalidTags.includes(node.tagName)) {
//             for (let child = node.firstChild; child; child = child.nextSibling) {
//                 getNodes(child);
//             }
//         }
//     }
//
//     getNodes(root);
//     return textNodes;
// }
//
// /**
//  * Определяет основной язык для текста
//  * @returns string langCode вашего inputText
//  * @param {string} inputText - текст, язык которого нужно определить.
//  */
// function detectLanguageFor(inputText) {
//     let langCode = "none";
//     chrome.i18n.detectLanguage(inputText, function (result) {
//         // langCode - переменная из внешней функции.
//         langCode = result.languages[0].language.toString();
//     });
//     return langCode;
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// /**
//  * Проверяет, что строка пуста или состоит из пробельных символов (пробелы, табы и т.д.)
//  * @param {string} str
//  */
// function isEmptyOrSpaces(str) {
//     return str == null || str.trim() === '';
//
// }
//
// /**
//  * Ищет textNode внутри root node. Из анализа исключены теги из invalidTags.
//  * @param root корневая node, в которой искать textNodes.
//  * @returns Array textNode.
//  */
// function getTextNodesIn(root) {
//     const textNodes = [];
//
//     /**
//      * Возвращает массив всех дочерних (в inf поколении) textNode
//      * @param {*} node - node анализа.
//      */
//     function getNodes(node) {
//         if (node.nodeType === Node.TEXT_NODE) {
//             textNodes.push(node);
//         } else if (node.nodeType === Node.ELEMENT_NODE && !invalidTags.includes(node.tagName)) {
//             for (let child = node.firstChild; child; child = child.nextSibling) {
//                 getNodes(child);
//             }
//         }
//     }
//
//     getNodes(root);
//     return textNodes;
// }
// /**
//  * Теги, которые исключаются из анализа в функции getTextNodesIn.
//  * Почему именно эти? Потому их textNodes не несут в себе инфы, которую стоит переводить (например, зачем переводить код script?)
//  */
// let invalidTags = [
//     'APPLET',
//     'AREA',
//     'BASE',
//     'BR',
//     'COL',
//     'B',
//     'HR',
//     'IMG',
//     'INPUT',
//     'IFRAME',
//     'ISINDEX',
//     'LINK',
//     'NOFRAMES',
//     'NOSCRIPT',
//     'META',
//     'OBJECT',
//     'PARAM',
//     'SCRIPT',
//     'STYLE',
//     'SELECT'
// ];