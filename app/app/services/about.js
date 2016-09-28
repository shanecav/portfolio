// @flow

export const getAbout = (): Promise<*> => {
  return fetch('/content/about.json')
    .then((response) => response.json())
}
