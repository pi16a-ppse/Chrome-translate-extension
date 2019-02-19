opera.isReady(function() {
  /**
   *
   * @type {{strings: {no: {localText: string, defaultText: string}, blanketPreferences: {localText: string, defaultText: string}, yes: {localText: string, defaultText: string}, titleGeneral: {localText: string, defaultText: string}, titleEnableSecureTranslation: {localText: string, defaultText: string}, blanketPreferencesOff: {localText: string, defaultText: string}, manualTranslationNote: {localText: string, defaultText: string}, translateAlwaysOption: {localText: string, defaultText: string}, clearPreferences: {localText: string, defaultText: string}, titleLanguageSettings: {localText: string, defaultText: string}, titleDefaultLang: {localText: string, defaultText: string}, titleEnableAutoTranslation: {localText: string, defaultText: string}, translateNeverOption: {localText: string, defaultText: string}, titleMain: {localText: string, defaultText: string}, titleEnableAutoPrompt: {localText: string, defaultText: string}}, language: string}}
   */
  var messages = window["messages"] = {
    'language': 'en',
    'strings': {
      'titleMain': {
        defaultText: 'Translate',
        localText: 'Translate'
      },
      'titleDefaultLang': {
        defaultText: 'Default Language',
        localText: 'Default Language'
      },
      'titleGeneral': {
        defaultText: 'General Settings',
        localText: 'General Settings'
      },
      'titleEnableAutoPrompt': {
        defaultText: 'Automatically prompt on translatable web pages',
        localText: 'Automatically prompt on translatable web pages'
      },
      'titleEnableAutoTranslation': {
        defaultText: 'Automatically translate web pages after prompting',
        localText: 'Automatically translate web pages after prompting'
      },
      'manualTranslationNote': {
        defaultText: 'Selecting "No" adds a clickable manual button to your browser for translatable web pages',
        localText: 'Selecting "No" adds a clickable manual button to your browser for translatable web pages'
      },
      'titleEnableSecureTranslation': {
        defaultText: 'Enable translation on secure web pages',
        localText: 'Enable translation on secure web pages'
      },
      'titleLanguageSettings': {
        defaultText: 'Change your settings per language',
        localText: 'Change your settings per language'
      },
      'clearPreferences': {
        defaultText: 'Reset all translation preferences',
        localText: 'Reset all translation preferences'
      },
      'blanketPreferences': {
        defaultText: 'Translate from all languages',
        localText: 'Translate from all languages'
      },
      'blanketPreferencesOff': {
        defaultText: 'Never translate from any languages',
        localText: 'Never translate from any languages'
      },
      'translateAlwaysOption': {
        defaultText: 'Always translate from this language',
        localText: 'Always translate from this language'
      },
      'translateNeverOption': {
        defaultText: 'Never translate from this language',
        localText: 'Never translate from this language'
      },
      'yes': {
        defaultText: 'Yes',
        localText: 'Yes'
      },
      'no': {
        defaultText: 'No',
        localText: 'No'
      }
    }
  };
});
