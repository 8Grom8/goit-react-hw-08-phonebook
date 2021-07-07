import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addNewContactFailure,
  addNewContactRequested,
  addNewContactSuccess,
  filterChange,
  getAllContactsFailure,
  getAllContactsRequest,
  getAllContactsSuccess,
  removeContactFailure,
  removeContactRequest,
  removeContactSuccess,

} from "./contactsActions";

const loading = createReducer(false, {
  [getAllContactsRequest]: () => true,
  [getAllContactsSuccess]: () => false,
  [getAllContactsFailure]: () => false,
  [addNewContactRequested]: () => true,
  [addNewContactSuccess]: () => false,
  [addNewContactFailure]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactFailure]: () => false,
});

const handleError = (_, action) => action.payload;
const clearError = () => null;

const error = createReducer(null, {
  [getAllContactsRequest]: clearError,
  [getAllContactsFailure]: handleError,
  [addNewContactRequested]: clearError,
  [addNewContactFailure]: handleError,
  [removeContactRequest]: clearError,
  [removeContactFailure]: handleError,
});

const items = createReducer([], {
  [getAllContactsSuccess]: (_, action) => action.payload,
  [addNewContactSuccess]: (state, action) => [action.payload, ...state],
  [removeContactSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
  
});

const filter = createReducer("", {
  [filterChange]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default contactsReducer;
