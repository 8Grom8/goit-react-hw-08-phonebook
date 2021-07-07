import { createSelector } from "@reduxjs/toolkit";

const selectAllContacts = (state) => state.contacts.items;
const selectFilter = (state) => state.contacts.filter;


const selectFilteredItems = createSelector(
  [selectAllContacts, selectFilter],  
  (items, filter) => {
    const formattedFilter = filter.toLowerCase().trim();
    return items.filter((item) =>
      item.name.toLowerCase().includes(formattedFilter)
    );
  }
);

export { selectFilter, selectAllContacts, selectFilteredItems };
