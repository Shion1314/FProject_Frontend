export const getInfo = (queryParams) => {
    const url = `http://localhost:3001/university?${new URLSearchParams(queryParams)}`;
  
    return fetch(url).then((response) => response.json());
  };