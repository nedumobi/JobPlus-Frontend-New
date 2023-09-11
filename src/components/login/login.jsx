// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "../styles/form.scss";
// import Alert from "../alert/Alert";

// const BASE_URL = import.meta.env.VITE_STRAPI_API_URL;

// export default function login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState({});

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const user = {
//       identifier: email,
//       password: password,
//     };
//     console.log("User ", user);
//     try {
//       // Request API.
//       const respond = await axios.post(BASE_URL + "/auth/local", user);
//       // clear form
//       setEmail("");
//       setPassword("");
//       setError({});
//       console.log(respond);
//     } catch (err) {
//       setError(err.response.data.error);
//     }
//   };

//   return (
//     <>
//       {error.message && <Alert type="error" error={error} />}
//       <form classNameName="form form--page" onSubmit={handleSubmit}>
//         <div classNameName="form__group form__group--page">
//           <label classNameName="form__label">Email</label>
//           <input
//             classNameName="form__field"
//             type="text"
//             placeholder={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div classNameName="form__group form__group--page">
//           <label classNameName="form__label">Password</label>
//           <input
//             classNameName="form__field"
//             type="password"
//             placeholder={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div classNameName="form__group form__group--page">
//           <input classNameName="form__btn" type="submit" value="Login" />
//         </div>

//         <footer>
//           Dont have an account? <Link to="/register">Register</Link>
//         </footer>
//       </form>
//     </>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.scss";
import axios from "axios";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      identifier: email,
      password,
    };
    try {
      await axios.post("http://localhost:1337/api/auth/local", user);
      // clear form
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
    console.log(user);
  };

  return (
    <form className="form form--page" onSubmit={handleSubmit}>
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
        <label className="form__label">Password</label>
        <input
          className="form__field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <input className="form__btn" type="submit" value="Login" />
      </div>

      <footer>
        Dont have an account? <Link to="/register">Register</Link>
      </footer>
    </form>
  );
}
