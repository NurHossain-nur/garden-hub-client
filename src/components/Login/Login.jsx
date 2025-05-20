import React, { useContext, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
//   const { signIn, signInWithGoogle } = useContext(AuthContext);
const { signIn, setUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

//   const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        toast.success("Login successful!");
        // navigate(from, { replace: true });
        setTimeout(() => {
            navigate(`${location.state ? location.state : "/"}`);
            // navigate(location.state || "/");
          }, 1500);
      })
      .catch((error) => {
        Swal.fire("Login Failed", error.message, "error");
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Login successful!");
        // navigate(from, { replace: true });
        setTimeout(() => {
          navigate(`${location.state ? location.state : "/"}`);
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
        <h2 className="text-4xl font-heading mb-6 text-primary text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-secondary btn-outline w-full mb-3"
        >
          Login with Google
        </button>

        <p className="text-center text-muted">
          New to site?{" "}
          <Link to="/register" className="text-primary underline font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
