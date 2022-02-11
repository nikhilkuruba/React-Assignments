import React from 'react';
import logo from './logo.svg';
import './App.css';

const employeeInfo = {
  name: 'Alan Ford',
  employeeId: 415263,
  appointmentOn: new Date().toLocaleString(),
  email: 'alan@gmail.com',
  phone: 9922556633,
  status: "In progress",
  door: 'Mark',
  time: new Date().toLocaleTimeString(),
  title: 'Title',
  avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
}
var leftArrow = "<"
var rightArrow = ">"
function App() {
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <header>
        <div><a href='#'>{leftArrow}</a></div>
        <div className='details'><div className='name'>{employeeInfo.name}</div><div>{employeeInfo.employeeId}</div></div>
        <div><button className='btn' type='submit'>Print</button></div>
      </header>
      <div className='content'>
        <div className='customer-info'>
          <p><strong>Appointment On: </strong>{employeeInfo.appointmentOn}</p>
          <p><strong>Email: </strong>{employeeInfo.email}</p>
          <p><strong>phone: </strong>{employeeInfo.phone}</p>
        </div>
        <div className='order-info'>
          <div className='info'><div><strong>Status</strong></div><div>•  {employeeInfo.status}</div></div>
          <div className='info'><div><strong>Door</strong></div><div>{employeeInfo.door}</div></div>
          <div className='info'><div><strong>Time</strong></div><div>{employeeInfo.time}</div></div>
        </div>
        <div className='product-list'>
          <input type="checkbox"></input>
          <img src={employeeInfo.avatar} alt='employee-image' height='100px' width='100px' />
          <div className='title'><strong>{employeeInfo.title}</strong><div><p className='text'>{employeeInfo.description}</p></div></div>
          <a href='#'>{rightArrow}</a>
        </div>
      </div>
    </div>
  );
}

export default App;
