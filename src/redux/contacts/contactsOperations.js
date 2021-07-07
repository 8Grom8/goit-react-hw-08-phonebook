import axios from "axios";

import {
  addNewContactFailure,
  addNewContactRequested,
  addNewContactSuccess,
  getAllContactsFailure,
  getAllContactsRequest,
  getAllContactsSuccess,
  removeContactFailure,
  removeContactRequest,
  removeContactSuccess,

} from "./contactsActions";

const addNewContact = (contact) => async (dispatch, _) => {

  dispatch(addNewContactRequested());
  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addNewContactSuccess(data));
  } catch (error) {
    dispatch(addNewContactFailure(error.message));
  }
};

const getAllContacts = () => async (dispatch) => {
  dispatch(getAllContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(getAllContactsSuccess(data));
  } catch (error) {
    dispatch(getAllContactsFailure(error.message));
  }
};

const removeContact = (id) => async (dispatch) => {
  dispatch(removeContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(removeContactSuccess(id));
  } catch (error) {
    dispatch(removeContactFailure(error.message));
  }
};


export { addNewContact, getAllContacts, removeContact };
