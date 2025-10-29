import { useContext, type FC } from 'react';
import './Header.css';
import { UserContext } from '../user';
import { Link } from 'react-router-dom';

export const Header: FC = () => {

  const {user, logout} = useContext(UserContext);

    function handleLogout() {
        logout();
    }

  return (
    <header className='Header row'>
      <div className='Logo col-2'><img src='./src/assets/logo.png' alt='Logo' /></div>
      <div className='Navigation col-10 '>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
        <div>{user ? <button onClick={handleLogout}>Logout</button> : <Link to="/login" className="btn btn-primary">Login</Link>}</div>
        <span className='ms-3'> {user ? `Welcome, ${user.name}` : 'Guest'}</span>
      </div>
    </header>
  );
}

