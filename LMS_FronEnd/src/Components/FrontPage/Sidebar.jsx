import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  AddBookIcon,
  AddUserIcon,
  BookInfoIcon,
  UserInfoIcon,
  IssueBookIcon,
  ReturnBookIcon,
  LogoutIcon,
} from '../Icon/Icon.jsx'; 
import './Sidebar.css';  // Import icons




const Sidebar = () => {

  const [show, setShow] = useState(false);
  return (


    

    
      <main className={show ? 'space-toggle' : null}>
      

    <div className="sidebar">
    <div className='lms'> <h3>Library Management System</h3></div>
      <ul>
        <li>
          <Link to="/navbar">
            <HomeIcon /> Home
          </Link>
        </li>
        <li>
          <Link to="/addbook">
            <AddBookIcon /> Add Book
          </Link>
        </li>
        <li>
          <Link to="/adduser">
            <AddUserIcon /> Add User
          </Link>
        </li>
        <li>
          <Link to="/bookinfo">
            <BookInfoIcon /> Book Information
          </Link>
        </li>
        <li>
          <Link to="/userinfo">
            <UserInfoIcon /> User Information
          </Link>
        </li>
        <li>
          <Link to="/bkInfo">
            <BookInfoIcon /> Book Issue Info
          </Link>
        </li>
        <li>
          <Link to="/issuebook">
            <IssueBookIcon /> Issue Book
          </Link>
        </li>
        <li>
          <Link to="/returnbook">
            <ReturnBookIcon /> Return Book
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <LogoutIcon /> Log Out
          </Link>
        </li>
      </ul>
    </div>
    </main>
  );
};

export default Sidebar;
