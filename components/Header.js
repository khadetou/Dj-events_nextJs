import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import Styles from "@/styles/style.module.scss";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import Search from "./Search";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { header, logo } = Styles;
  return (
    <header className={header}>
      <div className={logo}>
        <Link href="/">
          <a>Dj Events</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link href="/events/add">
                  <a>Add event</a>
                </Link>
              </li>
              <li>
                <Link href="/events/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  className="btn-secondary btn-icon"
                  onClick={() => logout()}
                >
                  <FaSingOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt /> Log In
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
