opera.isReady(function() {
  /**
   *
   * @type {{strings: {no: {localText: string, defaultText: string}, blanketPreferences: {localText: string, defaultText: string}, yes: {localText: string, defaultText: string}, titleGeneral: {localText: string, defaultText: string}, titleEnableSecureTranslation: {localText: string, defaultText: string}, blanketPreferencesOff: {localText: string, defaultText: string}, manualTranslationNote: {localText: string, defaultText: string}, translateAlwaysOption: {localText: string, defaultText: string}, clearPreferences: {localText: string, defaultText: string}, titleLanguageSettings: {localText: string, defaultText: string}, titleDefaultLang: {localText: string, defaultText: string}, titleEnableAutoTranslation: {localText: string, defaultText: string}, translateNeverOption: {localText: string, defaultText: string}, titleMain: {localText: string, defaultText: string}, titleEnableAutoPrompt: {localText: string, defaultText: string}}, language: string}}
   */
  var messages = window["messages"] = {
    'language': 'ru',
    'strings': {
      'titleMain': {
        defaultText: 'Переводчик',
        localText: 'Переводчик'
      },
      'titleDefaultLang': {
        defaultText: 'Язык по умолчанию',
        localText: 'Язык по умолчанию'
      },
      'titleGeneral': {
        defaultText: 'Общие настройки',
        localText: 'Общие настройки'
      },
      'titleEnableAutoPrompt': {
        defaultText: 'Показывать подсказку на страницах',
        localText: 'Показывать подсказку на страницах'
      },
      'titleEnableAutoTranslation': {
        defaultText: 'Автоматически переводить после вывода подсказки',
        localText: 'Автоматически переводить после вывода подсказки'
      },
      'manualTranslationNote': {
        defaultText: 'Если вы выберете "Нет", то появится кнопка для запуска перевода',
        localText: 'Если вы выберете "Нет", то появится кнопка для запуска перевода'
      },
      'titleEnableSecureTranslation': {
        defaultText: 'Перевод Защищенных страниц',
        localText: 'Перевод Защищенных страниц'
      },
      'titleLanguageSettings': {
        defaultText: 'Изменить настройки для каждого языка отдельно',
        localText: 'Изменить настройки для каждого языка отдельно'
      },
      'clearPreferences': {
        defaultText: 'Сбросить все настройки',
        localText: 'Сбросить все настройки'
      },
      'blanketPreferences': {
        defaultText: 'Переводить со всех языков',
        localText: 'Переводить со всех языков'
      },
      'blanketPreferencesOff': {
        defaultText: 'Никогда не переводить',
        localText: 'Никогда не переводить'
      },
      'translateAlwaysOption': {
        defaultText: 'Всегда переводить с этого языка',
        localText: 'Всегда переводить с этого языка'
      },
      'translateNeverOption': {
        defaultText: 'Никогда не переводить с этого языка',
        localText: 'Никогда не переводить с этого языка'
      },
      'yes': {
        defaultText: 'Да',
        localText: 'Да'
      },
      'no': {
        defaultText: 'Нет',
        localText: 'Нет'
      }
    }
  };
});
