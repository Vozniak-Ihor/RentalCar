import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingSelector } from '../../../redux/auth/selectors';
import { registrationThunk } from 'redux/auth/operations';
import css from './SignUp.module.css';
const SignUp = () => {
 const isLoading = useSelector(isLoadingSelector);
 const dispatch = useDispatch();

 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleChange = e => {
  switch (e.target.name) {
   case 'name':
    setName(e.target.value);
    break;
   case 'email':
    setEmail(e.target.value);
    break;
   case 'password':
    setPassword(e.target.value);
    break;
   default:
    return;
  }
 };

 const handleSubmit = e => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const password = e.target.elements.password.value;
  const email = e.target.elements.email.value;
  if (!name || !password || !email) {
   alert('Please fill in all fields of the form');
   return;
  }
  dispatch(registrationThunk({ name, email, password }));
  setName('');
  setEmail('');
  setPassword('');
 };
 return (
  <>
   <form onSubmit={handleSubmit}>
    <label htmlFor="chk" aria-hidden="true" className={css.SignUpLabel}>
     Sign up
    </label>
    <input
     type="text"
     name="name"
     placeholder="User name"
     required
     value={name}
     onChange={handleChange}
     className={css.SignUpInput}
     pattern="[A-Za-z]+"
     title="Please enter a valid user name using only letters."
    />
    <input
     type="email"
     name="email"
     placeholder="Email"
     required
     value={email}
     onChange={handleChange}
     className={css.SignUpInput}
     pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
     title="Please enter a valid email address."
    />
    <input
     type="password"
     name="password"
     placeholder="Password"
     required
     value={password}
     onChange={handleChange}
     className={css.SignUpInput}
     pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
     title="Password must be at least 8 characters long and contain at least one letter and one number."
    />
    <button className={`${css.SignUpBtn}`}>
     {isLoading ? <span className={css.spinner}></span> : 'Sign up'}
    </button>
   </form>
  </>
 );
};

export default SignUp;
