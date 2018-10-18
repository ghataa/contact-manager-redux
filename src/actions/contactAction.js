import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";
import axios from "axios";

export const getContacts = () => async dispatch => {
  const response = await axios.get("http://jsonplaceholder.typicode.com/users");

  dispatch({
    type: GET_CONTACTS,
    payload: response.data
  });
};

export const deleteContact = id => async dispatch => {
  await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);

  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};

export const addContact = contact => async dispatch => {
  const response = await axios.post(
    "http://jsonplaceholder.typicode.com/users/",
    contact
  );

  dispatch({
    type: ADD_CONTACT,
    payload: response.data
  });
};
