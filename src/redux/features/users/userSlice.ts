import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
    accessToken: string;
    refreshToken: string;
  } | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});
export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
