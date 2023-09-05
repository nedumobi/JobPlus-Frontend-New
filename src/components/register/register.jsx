import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/form.scss";
import { Link } from "react-router-dom";
import Alert from "../alert/Alert";

const BASE_URL = import.meta.env.VITE_STRAPI_API_URL;
// create a function to post user to backend

export default function register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});

  const registerUser = async (user) => {
    if (password !== confirmPassword) {
      setError({ message: "Password do not match" });
      return;
    }
    try {
      const res = await axios.post(BASE_URL + "/auth/local/register", user);
      setError({});
      // clear form
      setFirstName("");
      setLastName("");
      setPassword("");
      setEmail("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstname,
      lastname,
      username: email,
      email,
      password,
      confirmPassword,
    };
    registerUser(user);
  };

  return (
    <>
      {error.message && <Alert type="error" error={error} />}
      <form className="form form--page" onSubmit={handleSubmit}>
        <div className="form__group form__group--page">
          <label className="form__label">First name</label>
          <input
            className="form__field"
            type="text"
            placeholder="First name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form__group form__group--page">
          <label className="form__label">Last name</label>
          <input
            className="form__field"
            type="text"
            placeholder="Last name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form__group form__group--page">
          <label className="form__label">Email</label>
          <input
            className="form__field"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form__group form__group--page">
          <label className="form__label">Choose password</label>
          <input
            className="form__field"
            type="password"
            autoComplete="off"
            placeholder="Choose password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form__group form__group--page">
          <label className="form__label">Confirm Password</label>
          <input
            className="form__field"
            type="password"
            autoComplete="off"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="form__group form__group--page">
          <input className="form__btn" type="submit" value="Register" />
        </div>

        <footer>
          Already have an account? <Link to="/login">Login</Link>
        </footer>
      </form>
    </>
  );
}
