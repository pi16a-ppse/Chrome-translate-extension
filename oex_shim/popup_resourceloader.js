/**
 *
 * @param key - строка для поиска результата
 * @returns {string} требуемый параметр
 */
function getParam( key ) {
    // Получаем ключ в нужном формате
   key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
   var regexS = "[\?&]" + key + "=([^&#]*)";
   var regex = new RegExp(regexS);
   var results = regex.exec(window.location.search);
   // Возвращаем требуемый параметр
   return results == null ? "" :
 window.decodeURIComponent(results[1].replace(/\+/g, " "));
 }

 var s = getParam('href'), w = getParam('w'), h = getParam('h');
 if(s !== "") { document.querySelector('iframe').src = window.atob(s); }
 if(w !== "") { document.body.style.minWidth = w.replace(/\D/g,'') + "px"; }
 if(h !== "") { document.body.style.minHeight = h.replace(/\D/g,'') + "px"; }
