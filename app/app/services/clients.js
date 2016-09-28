// @flow

export const getClients = (): Promise<*> => {
  return fetch('/content/clients.json')
    .then((response) => response.json())
}
