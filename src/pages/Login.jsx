import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Zap } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = form.email.trim().toLowerCase();

    if (!email || !form.password) {
      return setError("Enter your email and password.");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === form.password
    );

    if (!user) {
      return setError("Incorrect email or password.");
    }

    // eslint-disable-next-line no-unused-vars
    const { password, ...safeUser } = user;
    localStorage.setItem("currentUser", JSON.stringify(safeUser));

    navigate("/");
  };

  const inputWrap =
    "flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1c1c1c] px-4 py-4 focus-within:border-lime-400";
  const inputClass =
    "w-full bg-transparent text-white placeholder-gray-500 outline-none";

  return (
    <main className="flex  flex-col items-center bg-[#0b0b0b] px-4 py-10 font-[DM_Sans,sans-serif] text-white">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400">
          <Zap className="h-6 w-6 fill-black text-black" />
        </div>
        <span className="font-[Syne,sans-serif] text-2xl font-bold">
          Sky<span className="text-lime-400">Mart</span>
        </span>
      </div>

      {/* Card */}
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#111111] p-8 sm:p-10">
        <h1 className="font-[Syne,sans-serif] text-3xl font-bold">
          Welcome back
        </h1>
        <p className="mt-2 text-gray-500">Sign in to continue shopping</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className={inputWrap}>
            <Mail className="h-5 w-5 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className={inputWrap}>
            <Lock className="h-5 w-5 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className={inputClass}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="text-gray-500 hover:text-white"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-lime-400 py-4 font-[Syne,sans-serif] font-semibold text-black transition hover:bg-lime-300"
          >
            Sign In
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          New to SkyMart?{" "}
          <Link
            to="/register"
            className="font-bold text-lime-400 hover:underline"
          >
            Create account
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;