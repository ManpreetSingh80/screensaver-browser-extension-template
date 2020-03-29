import {displayControls, slideshowControls, defaultLocale} from './config';
const map = {active: true, locale: defaultLocale};
[...displayControls, ...slideshowControls].forEach((c) => map[c.name] = c.defaultValue);

export function setProp(name, value) {
  window.localStorage.setItem(name, value);
  console.log('set value in browser', name, value)
}

export function getProp(name) {
  const local = window.localStorage.getItem(name);
  let value = map[name];
  if(local !== null && local !== undefined) {
    if(local === 'true') {
      value = true;
    } else if (local === 'false') {
      value = false;
    } else if (!isNaN(local)) {
      value = parseInt(local)
    } else {
      value = local;
    }
  }
  console.log('get value in browser', name, value);
  return value;
}