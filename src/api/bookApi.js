import axios from "axios";

const baseURL = "http://localhost:3005/books";

const getAllBooks = () => axios.get(baseURL);

const getBooksById = (bookId) =>{
    if(bookId !=='0'){

        return axios.get(`${baseURL}/${bookId}`)
    }else{
        return null
    }

} ;

const addNewBook = (book) => axios.post(baseURL, book);
const editBook = (book, bookId) => axios.put(`${baseURL}/${bookId}`, book);
const deleteBook = (bookId) => axios.delete(`${baseURL}/${bookId}`);

export { getAllBooks, getBooksById, addNewBook, editBook, deleteBook };
