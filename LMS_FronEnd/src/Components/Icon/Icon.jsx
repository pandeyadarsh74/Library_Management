import React from 'react';
import { FaHome, FaBookOpen, FaUserPlus, FaInfoCircle, FaUser, FaThList, FaUndoAlt, FaSignOutAlt } from 'react-icons/fa'; // Font Awesome icons

const HomeIcon = () => <FaHome size={20} />;
const AddBookIcon = () => <FaBookOpen size={20} />;
const AddUserIcon = () => <FaUserPlus size={20} />;
const BookInfoIcon = () => <FaInfoCircle size={20} />;
const UserInfoIcon = () => <FaUser size={20} />;
const IssueBookIcon = () => <FaThList size={20} />;
const ReturnBookIcon = () => <FaUndoAlt size={20} />;
const LogoutIcon = () => <FaSignOutAlt size={20} />;

export {
  HomeIcon,
  AddBookIcon,
  AddUserIcon,
  BookInfoIcon,
  UserInfoIcon,
  IssueBookIcon,
  ReturnBookIcon,
  LogoutIcon,
};
