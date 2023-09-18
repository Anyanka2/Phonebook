import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  signUpThunk,
} from './userThunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false
};

const handleIfPending = state => {
  state.isLoading = true;
};

const handleIfReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(logoutThunk.fulfilled, () => {
//         return initialState;
//       })
//       .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
//         state.user = payload;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addMatcher(
//         isAnyOf(signUpThunk.fulfilled, loginThunk.fulfilled),
//         (state, { payload }) => {
//           state.user = payload;
//           state.isLoading = false;
//           state.error = null;
//         }
//       )
//       .addMatcher(
//         isAnyOf(
//           signUpThunk.pending,
//           loginThunk.pending,
//           logoutThunk.pending,
//           refreshUserThunk.pending
//         ),
//         handleIfPending
//       )
//       .addMatcher(
//         isAnyOf(
//           signUpThunk.rejected,
//           loginThunk.rejected,
//           logoutThunk.rejected,
//           refreshUserThunk.rejected
//         ),
//         handleIfReject
//       );
//   },
// });
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handleIfPending)
      .addCase(signUpThunk.rejected, handleIfReject)
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(loginThunk.pending, handleIfPending)
      .addCase(loginThunk.rejected, handleIfReject)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logoutThunk.pending, handleIfPending)
      .addCase(logoutThunk.rejected, handleIfReject)
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUserThunk.pending, handleIfPending)
      .addCase(refreshUserThunk.rejected, handleIfReject)
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});
export const authReducer = authSlice.reducer;
