export const getUserService = () =>
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then(({ results }) => results[0])
    .catch(() => {
      throw new Error();
    });
