import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBooks, getBooksById, addNewBook, editBook, deleteBook } from '../api/bookApi';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllBooks();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchBookById = createAsyncThunk(
  'books/fetchBookById',
  async (bookId, { rejectWithValue }) => {
    try {
      const response = await getBooksById(bookId);
      return response ? response.data : null;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewBookThunk = createAsyncThunk(
  'books/addNewBook',
  async (book, { rejectWithValue }) => {
    try {
      const response = await addNewBook(book);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editBookThunk = createAsyncThunk(
  'books/editBook',
  async ({ book, bookId }, { rejectWithValue }) => {
    try {
      const response = await editBook(book, bookId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBookThunk = createAsyncThunk(
  'books/deleteBook',
  async (bookId, { rejectWithValue }) => {
    try {
      await deleteBook(bookId);
      return bookId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    loading: false,
    error: null,
    book: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBookById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.loading = false;
        state.book = action.payload;
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addNewBookThunk.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(addNewBookThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(editBookThunk.fulfilled, (state, action) => {
        const index = state.books.findIndex(book => book.id === action.payload.id);
        state.books[index] = action.payload;
      })
      .addCase(editBookThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteBookThunk.fulfilled, (state, action) => {
        state.books = state.books.filter(book => book.id !== action.payload);
      })
      .addCase(deleteBookThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
