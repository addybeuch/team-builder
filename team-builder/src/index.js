import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const teamList = [
  { name: 'Billy', email: 'billy@gmail.com', role: 'Astronaut' },
  { name: 'Bob', email: 'bob@yahoo.com', role: 'Barber' },
  { name: 'Joe', email: 'joe@outlook.com', role: 'Taxi Driver' }
]

const initialFormValues = { name: '', email: '', role: '' }

function SimpleForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [team, setTeam] = useState(teamList);


const change = (evt) => {
  const { name, value } = evt.target;
  setFormValues({ ...formValues, [name]: value });
}

const submit = (evt) => {
  evt.preventDefault();

  const newTeam = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role.trim()
  }

  setTeam(team.concat(newTeam));
  setFormValues(initialFormValues);
}

return (
  <div className='container'>
    <h1>Team Builder App</h1>
    {team.map((member, idx) => (
      <div key={idx}>
         Name: {member.name}  Email: {member.email}  Role: {member.role}
      </div>
    ))}
    <form onSubmit={submit}>
      <input
        type='text'
        value={formValues.name}
        name='name'
        onChange = {change}
        />
      <input
        type='email'
        value={formValues.email}
        name='email'
        onChange = {change}
        />
      <input
        type='text'
        value={formValues.role}
        name='role'
        onChange = {change}
        />
        <input type='submit' value='submit' />
    </form>
  </div>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
