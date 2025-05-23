import React, { useContext, useState } from "react";
// import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser, googleSignIn } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  //   const [name, setName] = useState("");
  //   const [photoURL, setPhotoURL] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const validatePassword = (password) => {
  //   if (!/[A-Z]/.test(password)) {
  //     Swal.fire("⚠ Password must include at least one uppercase letter.");
  //     return false;
  //   }
  //   if (!/[a-z]/.test(password)) {
  //     Swal.fire("⚠ Password must include at least one lowercase letter.");
  //     return false;
  //   }
  //   if (password.length < 6) {
  //     Swal.fire("⚠ Password must be at least 6 characters long.");
  //     return false;
  //   }
  //   return true;
  // };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!regex.test(password)) {
      Swal.fire(
        "⚠ Weak Password",
        "Password must be at least 8 characters, and include 1 uppercase, 1 lowercase, and 1 special character.",
        "warning"
      );
      return false;
    }

    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(password);
    // if (!validatePassword(password)) {
    //   Swal.fire(
    //     "Weak Password",
    //     "Password must be at least 8 characters, include 1 uppercase letter, 1 lowercase letter, and 1 special character.",
    //     "warning"
    //   );
    //   return;
    // }

    if (validatePassword(form.password)) {
      const name = e.target.name.value;
      const email = e.target.email.value;
      const photoURL = e.target.photoURL.value;
      const password = e.target.password.value;

      createUser(email, password)
        .then((result) => {
          const user = result.user;

          updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
              setUser({ ...user, displayName: name, photoURL: photoURL });
              toast.success("Registration successful!");
              // navigate("/");
              setTimeout(() => {
                navigate(from, { replace: true });
                // navigate(`${location.state ? location.state : "/"}`);
                // navigate(location.state || "/");
              }, 1500);
            })
            .catch((err) => {
              Swal.fire("Profile Update Failed", err.message, "error");
            });
        })
        .catch((error) => {
          Swal.fire("Registration Failed", error.message, "error");
        });
    }
  };

  const handleGoogleRegister = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Registration/Login successful!");
        // navigate("/");
        setTimeout(() => {
          navigate(from, { replace: true });
          // navigate(`${location.state ? location.state : "/"}`);
          // navigate(location.state || "/");
        }, 1500);
      })
      .catch((error) => {
        Swal.fire("Google Login Failed", error.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-4 font-sans">
      <div className="w-full max-w-md p-6 bg-neutral rounded-lg shadow-lg">
        <h2 className="text-4xl font-heading mb-6 text-primary text-center">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={form.photoURL}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
            value={form.email}
            onChange={handleChange}
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-2 text-secondary"
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>

          <button className="btn btn-primary w-full" type="submit">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleRegister}
          className="btn btn-secondary btn-outline w-full mb-3"
        >
          Register/Login with Google
        </button>

        <p className="text-center text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-primary underline font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
