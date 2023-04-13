import { defaultInterpolationFormat, I18NextModule } from "angular-i18next";

export const i18nextOptions = {
    whitelist: ['en', 'in'],
    fallbackLng: 'en',
    debug: true,
    returnEmptyString: false,
    ns: [
      'translation',
      //'validation',
      //'error',
  
    ],
    interpolation: {
      format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
    },
    //backend plugin options
    backend: {
      loadPath: 'src/locales/{{lng}}.{{ns}}.json'
    },
    // lang detection plugin options
    detection: {
      // order and from where user language should be detected
      order: ['cookie'],
  
      // keys or params to lookup language from
      lookupCookie: 'lang',
  
      // cache user language on
      caches: ['cookie'],
    }
  };