
import * as langs from './i18';
import {setProp, getProp} from './service';
import {locales} from './config';

export function getLang() {
  return getProp('locale');
}

export let TEXT = langs[getLang()];

export function setLang(locale) {
  if (langs[locale]) {
    setProp('locale', locale);
    TEXT = langs[locale];
  }
}
