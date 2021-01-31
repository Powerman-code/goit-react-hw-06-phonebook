import types from './phoneBook-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = ({ name, value }) => ({
  type: types.CHANGE_FILTER,
  payload: {
    name,
    value,
  },
});

export default { addContact, deleteContact, changeFilter };
