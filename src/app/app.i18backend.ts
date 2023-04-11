import { APP_INITIALIZER, LOCALE_ID } from "@angular/core";
import { ITranslationService, I18NEXT_SERVICE, defaultInterpolationFormat } from 'angular-i18next'
import { I18NextModule, I18NextLoadResult } from 'angular-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const i18nextOptions = {
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
      loadPath: '/locales/{{lng}}.{{ns}}.json'
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

  export function appInit(i18next: ITranslationService) {
    return () => {
      let promise: Promise<I18NextLoadResult> = i18next
        .use(HttpApi)
        .use<any>(LanguageDetector)
        .init(i18nextOptions);
      return promise;
    };
  }

export function localeIdFactory(i18next: ITranslationService)  {
    return i18next.language;
}

export const I18N_PROVIDERS = [
{
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
},
{
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
}];