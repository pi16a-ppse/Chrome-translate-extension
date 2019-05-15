/**
 * Проверяет, что строка уже закодирована (URL-valid)
 * @param str - строка для проверки
 * @returns {boolean}
 */
function isEncoded(str) {
    return decodeURI(str) !== str;
}

/**
 * shortcut для console.log
 * @param text
 * @returns {void}
 */
let log = (text) => {
    if (typeof text === "object") {
        let obj = text;
        console.log('properties:');
        let str = "";
        for (let k in obj) {
            str += k + ": " + obj[k] + "\r\n";
        }
        console.log(str);

    } else {
        console.log(text);
    }
};

/**
 * Проверяет, что строка пуста или состоит из пробельных символов (пробелы, табы и т.д.)
 * @param {string} str
 * @returns {void}
 */
function isEmptyOrSpaces(str) {
    return str == null || str.trim() === '';

}