// @flow

export const getProfile = (): Promise<*> => {
  return fetch('/content/profile.json')
    .then((response) => response.json())
    .catch((error) => {
      console.log(error)
    })
}
