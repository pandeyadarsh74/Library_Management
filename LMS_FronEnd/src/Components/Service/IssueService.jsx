import axios from 'axios';

const API_URL = "http://localhost:8080/api/return";


class IssueService{

returnBook(bookId){
    return axios.post(API_URL + "/" + bookId)
}

}

export default  new IssueService;