import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to={"/"}>
          Test
        </Link>
      </span>
      {user ? (
        <ul className="nav-links">
          <li className="list-item">
            {/* <Link to="/">Home</Link> */}
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="profile avatar"
              className="avatar"
            />
          </li>
          <li className="list-item">
            {/* <Link to="/login">Login</Link> */}
            Perfil
          </li>
          <li className="list-item">
            {/* <Link to="/logut">logut</Link> */}
            Lougout
          </li>
        </ul>
      ) : (
        <ul className="nav-links">
          <li className="list-item">
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
