export function saveToStorage(type, data) {
  if (!type) {
    throw new Error('type is undefined');
  }
  const strData = JSON.stringify(data);
  window.localStorage.setItem(type, strData);
}

export function getFromStorage(type) {
  const strData = window.localStorage.getItem(type);
  return JSON.parse(strData);
}