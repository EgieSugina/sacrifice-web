import { configureStore } from '@reduxjs/toolkit'
import discordReducer from './features/discordSlice'

export const store = configureStore({
  reducer: {
    discord: discordReducer,
  },
})