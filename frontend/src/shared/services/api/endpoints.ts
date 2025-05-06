const endpoints = {
  register: {
    user: () => `/register`,
  },
  login: {
    user: () => `/login`,
  },
  groq: {
    ask: () => `/message`,
  },
};

export default endpoints;
