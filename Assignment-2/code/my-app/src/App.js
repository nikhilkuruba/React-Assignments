import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      {/* Start your React code here */}
      <div className='logo'>
        <img className='image' src={employee.profileImg} width='100' height='100' alt='profile image' />
      </div>
      <div className='details'>
        <div className='name'>
          <h1>{employee.name}</h1>
        </div>
        <div className='location'>
          <label>Location</label>
          <h3>{employee.location}</h3>

        </div>
        <div className='blood-group'>
          <label>Blood group</label>
          <h3>{employee.bloodGroup}</h3>
        </div>
        <div className='age'>
          <label>Age</label>
          <h3>{employee.age}</h3>
        </div>
      </div>
    </div>
  )
}



export default App;
