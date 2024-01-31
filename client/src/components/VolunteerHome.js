import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useChatContext } from './ChatContext'
import MyVolunteerNavbar from './home_styling/MyVolunteerNavbar';
import Footer from './home_styling/Footer';

const VolunteerHome = () => {
  const navigate = useNavigate();
  const { chatUser, clearChatUser } = useChatContext()

  const handleLogout = () => {
    // Remove the JWT token (or other authentication token) from local storage
    localStorage.removeItem('jwt_token'); // Adjust the key if different
    clearChatUser()
    // Navigate the user to the home page or login page
    navigate('/');
  };

  console.log(chatUser)

  return (
    <>
      <MyVolunteerNavbar />
    <div className="user-home">
      <h1>Welcome, {chatUser.userName}</h1>
      <div>
        <h2>Profile Details:</h2>
        <p><strong>Bio:</strong> {chatUser.userBio}</p>
        <p><strong>Location:</strong> {chatUser.userLocation}</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
    <Footer />
    </>
  )
}

export default VolunteerHome