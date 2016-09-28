// @flow

export const getProjects = (): Promise<*> => {
  return fetch('/content/projects.json')
    .then((response) => response.json())
}
