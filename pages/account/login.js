import { FaUser } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/style.module.scss";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useContext(AuthContext);
  const { auth } = styles;

  useEffect(() => {
    {
      error && toast.error(error);
    }
  });
  function handleSubmit(e) {
    e.preventDefault();
    login({ email, password });
  }
  return (
    <Layout title="User Log In">
      <div className={auth}>
        <h1>
          <FaUser /> Log In
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input type="submit" value="LogIn" className="btn" />
        </form>
        <p>
          Don't have an account ? <Link href="/account/register">Register</Link>
        </p>
      </div>
    </Layout>
  );
}
