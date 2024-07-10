import axios from 'axios';

const API_URL = "http://localhost:8080/api/books";


class BookService{
deleteBook(bookId){
return axios.delete(API_URL + "/" + bookId)
}

findById(bookId){
    return axios.get(API_URL + "/" + bookId)
}
 
editBook(book){
    return axios.put(API_URL + "/" + book.bookId)
}



}

export default  new BookService;