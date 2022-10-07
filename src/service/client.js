import axios from 'axios';

export const get = async apiUrl => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const post = async (apiUrl, data) => {
  const response = await axios.post(apiUrl, data);
  return response.data;
};

export const put = async (apiUrl, data) => {
  const response = await axios.put(apiUrl, data);
  return response.data;
};

export const remove = async apiUrl => {
  const response = await axios.delete(apiUrl);
  return response.data;
};

export default { get, post, put, remove };
