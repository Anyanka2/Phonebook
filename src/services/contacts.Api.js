import axios from 'axios';

export const contactAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

// export const getContacts = async () => {
//   const { data } = await contactAPI.get(`${BASEURL}/contacts`);
//   return data;
// };

// export const addContacts = async contact => {
//   const { data } = await contactAPI.post(`${BASEURL}/contacts`, contact);
//   return data;
// };

// export const deleteContacts = async id => {
//   const { data } = await contactAPI.delete(`${BASEURL}/contacts/${id}`);
//   return data;
// };
