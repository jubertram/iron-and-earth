import {Link} from 'react-router-dom';

export default function Navbar() {
  return(
    <nav className='navbar'>
      <h2 className='nav-title'>Julien's Blog</h2>
      <div className='nav-link'>
        <Link to='/'>Home</Link>
        <Link to='/post'>Posts</Link>
      </div>
    </nav>
  );
}
