import axios from 'axios';

axios.defaults.baseURL = 'https://6527ef7d931d71583df19ca4.mockapi.io/api/v1/';

export const getAllContacts = async () => {
  const response = await axios.get('contacts');
  console.log(response.data);
  return response.data;
};

export const addContact = async contact => {
  const response = await axios.post('contacts', contact);
  console.log(response.data);
  return response.data;
};

export const deleteContact = async contactId => {
  const response = await axios.delete(`contacts/${contactId}`);
  console.log(response.data);
  return response.data;
};
