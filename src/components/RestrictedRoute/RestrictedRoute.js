import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { tokenSelector } from 'redux/auth/selectors';
import { isLoadingSelector } from 'redux/auth/selectors';
const RestrictedRoute = ({ component, redirectTo = '/' }) => {
 const auth = useSelector(tokenSelector);
 const login = useSelector(isLoadingSelector);
 return auth && login ? <Navigate to={redirectTo} replace /> : component;
};

export default RestrictedRoute;
