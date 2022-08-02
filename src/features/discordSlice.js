import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const discordSlice = createSlice({
  name: "discord",
  initialState,
  reducers: {
    showDiscord: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showDiscord } = discordSlice.actions;

export default discordSlice.reducer;
