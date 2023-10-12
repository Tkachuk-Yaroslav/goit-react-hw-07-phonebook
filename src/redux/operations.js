import { getAllContacts } from 'api/mock-api';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contacts/contactsSlice';
export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await getAllContacts();
    dispatch(fetchingSuccess(response));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
