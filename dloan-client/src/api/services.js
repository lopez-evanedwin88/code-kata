const BASE_URL = 'http://localhost';
const PORT = '8000';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const applicationId = () => {
  return fetch(`${BASE_URL}:${PORT}/initiateApplication`, options);
};
