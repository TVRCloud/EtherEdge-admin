// userRedux.ts (or .js)
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  accessToken: string;
  type: string;
  state: string;
}

export interface UserState {
  userInfo: User[];
}

const userSlice = createSlice({
  name: "alpha96",
  initialState: {
    userInfo: [],
  } as UserState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.userInfo.push(action.payload);
    },
    logoutUser: (state) => {
      state.userInfo = [];
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
