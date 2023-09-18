import { backendAPI } from './baseUrl';

export const getContacts = async () => {
  const { data } = await backendAPI.get('/contacts');
  return data;
};
export const addContacts = async contact => {
  const { data } = await backendAPI.post('/contacts', contact);
  return data;
};
export const deleteContacts = async id => {
  const { data } = await backendAPI.delete(`/contacts/${id}`);
  return data;
};
export const updateContacts = async id => {
  const { data } = await backendAPI.patch(`/contacts/${id}`);
  return data;
};

