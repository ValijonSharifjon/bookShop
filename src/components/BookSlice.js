import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async function (search, { rejectWithValue }) {
      try {
        const response = await fetch(`${URL}?q=${search}&key=AIzaSyBgkYbWXlCSSxyQX4VW-V9hUY9TMOj93ew&maxResults=40`)
        const data = await response.json();
        return data
      } catch (error) {
          return rejectWithValue(error.message)
      }
  }
)

const initialState = {
  totalCount: 0,
  loading: false,
  items: []
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    deleteBook: (state, { payload }) => {
      state.items = state.items.filter(item=>item.id!==payload)
      state.totalCount--
    }
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.loading = true
      state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.loading = false
      state.items = action.payload.items;
      state.totalCount = action.payload.totalItems
    },
    [fetchBooks.rejected]: (state) => {
        
    },
  }
})

export const { deleteBook } = bookSlice.actions;
export default bookSlice.reducer;