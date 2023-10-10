import css from './LoginSingUp.module.css';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
const LoginSingUp = () => {
 return (
  <>
   <div className={css.SignUpConteiner}>
    <div className={css.SignUp}>
     <SignUp />
    </div>
    <div className={css.LoginForm}>
     <Login />
    </div>
   </div>
  </>
 );
};

export default LoginSingUp;
