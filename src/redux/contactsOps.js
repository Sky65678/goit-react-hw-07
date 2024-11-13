import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

// Асинхронні операції (thunks)
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        "https://670533fb031fd46a830f0e45.mockapi.io/contacts"
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactsId, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://670533fb031fd46a830f0e45.mockapi.io/contacts/${contactsId}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post(
        "https://670533fb031fd46a830f0e45.mockapi.io/contacts",
        contact
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
