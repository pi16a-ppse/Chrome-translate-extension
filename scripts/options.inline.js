/*
Подготовка переведенных элементов (и сам перевод)
 */
opera.isReady(
    /**
     * Функция-обертка для перевода
     */
    function() {
  // Элементы для перевода (text nodes)
  var translatableElements = document.querySelectorAll("._translate");
  for (var i = 0, l = translatableElements.length; i < l; i++) {
    if (translatableElements[i].tagName === 'INPUT') {
      translatableElements[i].value = i18nlib.translate(translatableElements[i].id);
    } else {
      translatableElements[i].textContent = i18nlib.translate(translatableElements[i].id);
    }
  }
});
