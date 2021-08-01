import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import Styles from "@/styles/style.module.scss";
import Link from "next/link";
import Search from "./Search";
const Header = () => {
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
          <li>
            <Link href="/events/add">
              <a>Add event</a>
            </Link>
          </li>
          <li>
            <Link href="/account/login">
              <a className="btn-secondary btn-icon">
                <FaSignInAlt /> Log In
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
