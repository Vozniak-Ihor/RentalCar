import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';
import { isLoadingSelector } from '../../../redux/auth/selectors';

import css from './Login.module.css';
const Login = () => {
 const isLoading = useSelector(isLoadingSelector);

 const dispatch = useDispatch();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleChange = e => {
  switch (e.target.name) {
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
  const password = e.target.elements.password.value;
  const email = e.target.elements.email.value;
  dispatch(loginThunk({ email, password }));
  setEmail('');
  setPassword('');
 };
 return (
  <>
   <form onSubmit={handleSubmit}>
    <label htmlFor="chk" aria-hidden="true" className={css.LoginLabel}>
     Login
    </label>
    <input
     type="email"
     name="email"
     placeholder="Email"
     required
     value={email}
     onChange={handleChange}
     className={css.LoginInput}
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
     className={css.LoginInput}
     pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
     title="Password must be at least 8 characters long and contain at least one letter and one number."
    />
    <button className={`${css.LoginBtn}`}>
     {isLoading ? <span className={css.spinner}></span> : 'Login'}
    </button>
   </form>
  </>
 );
};

export default Login;
