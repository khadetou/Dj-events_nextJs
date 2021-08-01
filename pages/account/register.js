import { FaUser } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/style.module.scss";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, error } = useContext(AuthContext);
  const { auth } = styles;

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password do not match!");
      return;
    }
    register({ username, email, password });
  }
  return (
    <Layout title="User Registration">
      <div className={auth}>
        <h1>
          <FaUser /> Register
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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

          <div>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <input type="submit" value="Register" className="btn" />
        </form>
        <p>
          Already have an account ? <Link href="/account/login">Log In</Link>
        </p>
      </div>
    </Layout>
  );
}
