const tokens = JSON.parse(localStorage.getItem('tokens'));
const refreshToken = tokens?.refresh?.token
const accessToken = tokens?.access?.token
const accessTokenTime = tokens?.access?.expires;
const refreshTokenTime = tokens?.refresh?.expires;
const currentTime = new Date().toISOString()


const authHeader = () => {
  const tokens = JSON.parse(localStorage.getItem('tokens'));
  if (tokens) {
    return { Authorization: `Bearer ${tokens.access.token}` };
  }
  return {};
};

const handleRefreshToken = async () => {
  if(refreshToken) {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/refresh-tokens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refreshToken
      }),
  });

  const data = await response.json();
  console.log(data, data.tokens)
  if (data.tokens) {
    localStorage.setItem('tokens', JSON.stringify(data.tokens));
  }
}
}

if(accessToken) {
  if(accessTokenTime < currentTime) {
    console.log(true)
    handleRefreshToken()
  }
}

if(refreshTokenTime < currentTime) {
  localStorage.removeItem('tokens')
}


const post = async (url, data) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, config);
    const datas = await response.json();
    return datas;
  } catch (err) {
    return err;
  }
};

const get = async (url) => {
    const config = {
      method: 'GET',
      headers: authHeader(),
    };

    try {
      const response = await fetch(url, config);
      const datas = await response.json();
      return datas;
    } catch (err) {
      return err;
    }
  };

  const deleteE = async (url) => {
    const config = {
      method: 'DELETE',
      headers: authHeader(),
    };

    try {
      const response = await fetch(url, config);
      const datas = await response.json();
      return datas;
    } catch (err) {
      return err;
    }
  };

  const patch = async (url, data) => {
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, config);
      const datas = await response.json();
      return datas;
    } catch (err) {
      return err;
    }
  };

  const fetchApi = {
    post,
    get,
    deleteE,
    patch,
  };

  export default fetchApi;
