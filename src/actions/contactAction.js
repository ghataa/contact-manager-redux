import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "./types";
import axios from "axios";

export const getContacts = () => async dispatch => {
  const response = await axios.get("http://jsonplaceholder.typicode.com/users");

  dispatch({
    type: GET_CONTACTS,
    payload: response.data
  });
};

export const getContact = id => async dispatch => {
  const response = await axios.get(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );

  dispatch({
    type: GET_CONTACT,
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

export const updateContact = contact => async dispatch => {
  const response = await axios.put(
    `http://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );

  dispatch({
    type: UPDATE_CONTACT,
    payload: response.data
  });
};
