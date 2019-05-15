/**
 * Объект для удобного доступа к функциям перевода.
 */
const yatr = {
    /**
     * Строка для Yandex Translate API
     */
    key: 'trnsl.1.1.20150402T131655Z.e753695703b45806.bda2fd6beb5bd56a62f0034352aaebbdba3f0952',
    /**
     * Собственно перевод.
     * @param text - текст для перевода
     * @returns {Promise<json>} - json {text, ...}, обернутый в promise
     */
    translate: async function (text) {
        let langFrom = await this.detectLanguageFor(text);
        log("for " + text + " detected " + langFrom);
        if (!isEncoded(text))
            text = encodeURI(text);

        let langTo = navigator.language.substr(0, 2);
        let lang = langFrom + '-' + langTo;
        // log("translate lang is " + lang);
        let url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
        url += 'key=' + this.key;
        url += '&lang=' + lang;

        let body = `text=${text}`;
        return fetch(url, {
                method: 'POST',
                body: body,
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })

            })
            .then(response =>
                response.json());

    },

    /**
     * Определяет язык текста. Асинхронная функция. (возвращает promise)
     * @param text - текст, язык которого нужно узнать
     * @returns {Promise<json>} - json {code, lang}, обернутый в promise
     */
    detectLanguageFor: async function (text) {
        if (!isEncoded(text))
            text = encodeURI(text);
        // log("after encodeURI, the text is " + text);
        let key = this.key;
        let detectApi = "https://translate.yandex.net/api/v1.5/tr.json/detect";
        detectApi += "?";
        let url = `${detectApi}?&key=${key}`;
        let body = `text=${text}`;

        // json в формате {code, lang}
        let langData = await fetch(url, {
                method: 'POST',
                body: body,
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })

            })
            .then((response) => {
                return response.json();
            });
        let lang = langData.lang;

        return lang;
    }
};