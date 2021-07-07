import { createAction } from "@reduxjs/toolkit";

const addNewContactRequested = createAction("contacts/addNewContactRequested");
const addNewContactSuccess = createAction("contacts/addNewContactSuccess");
const addNewContactFailure = createAction("contacts/addNewContactFailure");

const getAllContactsRequest = createAction("contacts/getAllContactsRequest");
const getAllContactsSuccess = createAction("contacts/getAllContactsSuccess");
const getAllContactsFailure = createAction("contacts/getAllContactsFailure");

const filterChange = createAction("contacts/filterChange");

const removeContactRequest = createAction("contacts/removeContactRequest");
const removeContactSuccess = createAction("contacts/removeContactSuccess");
const removeContactFailure = createAction("contacts/removeContactFailure");

export {
  addNewContactRequested,
  addNewContactSuccess,
  addNewContactFailure,
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsFailure,
  removeContactRequest,
  removeContactSuccess,
  removeContactFailure,
  filterChange,
};