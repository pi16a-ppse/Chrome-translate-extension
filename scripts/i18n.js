opera.isReady(
    /*
     * Загружаем данные для страницы настроек.
     */
    function() {
  var i18nlib = window["i18nlib"] = {
    translate: function(id) {
      return messages && messages.strings[id] ? messages.strings[id].localText : "";
    }
  };
});
