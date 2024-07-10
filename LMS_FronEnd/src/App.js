import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'


import AddBookForm from './Components/BookDetails/AddBook';
import IssueBookForm from './Components/BookDetails/IssueBook';
import ReturnBookForm from './Components/BookDetails/ReturnBookForm';
import AddUser from './Components/User/AddUser';
import BookInfo from './Components/BookDetails/BookInfo';
import UserInfo from './Components/User/UserInfo';
import UserSelection from './Components/BookDetails/UserSelection';
import BookSelection from './Components/BookDetails/BookSelection';
import Sidebar from './Components/FrontPage/Sidebar';
import BookIssuedInfo from './Components/BookDetails/BookIssuedInfo';
import EditBook from './Components/BookDetails/EditBook';
import Home from './Components/FrontPage/Home';





const App = () => {
  return (
    
    <BrowserRouter>
    <Sidebar/>
     <Routes>
     <Route path = "/home" element={<Home/>} >   </Route>
      <Route path = "/addbook" element={<AddBookForm/>} >   </Route>
     
      <Route path = "/issuebook" element={<IssueBookForm/>} >   </Route>
      <Route path = "/returnbook" element={<ReturnBookForm/>} >   </Route>
    

      <Route path = "/adduser" element={<AddUser/>} >   </Route>
      <Route path = "/bookinfo" element={<BookInfo/>} >   </Route>
      <Route path = "/userinfo" element={<UserInfo/>} >   </Route>
      <Route path = "/userselect" element={<UserSelection/>} >   </Route>
      <Route path = "/bookselect" element={<BookSelection/>} >   </Route>
      <Route path = "/bkinfo" element={<BookIssuedInfo/>} >   </Route>
    
      <Route path = "/editbook/:bookId" element={<EditBook/>} >   </Route>
     
      <Route path = "/sidebar" element={<Sidebar/>} >   </Route>
      {/* <Route path = "*" element={<Home/>} >   </Route> */}
          <Route path = "*" element={<Navigate to="/home"/>} >   </Route>
      
     </Routes>
    
  </BrowserRouter>
  
  );
};

export default App;
