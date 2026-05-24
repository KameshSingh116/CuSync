import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import { logoutUser } from "../../services/authService";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { signUpUser } from "../../services/authService";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "student",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const {
      fullName,
      email,
      password,
      role,
      department,
    } = formData;

    const { data, error } = await signUpUser(
      fullName,
      email,
      password,
      role,
      department
    );

    if (error) {
      alert(error.message);
      return;
    }

    alert("Signup Successful");

console.log(data);

// FORCE LOGOUT
await logoutUser();

// REDIRECT TO LOGIN
navigate("/login");
  };

  return (
    <AuthLayout>

      <h1 className="text-3xl font-bold mb-6 text-center">
        Create CuSync Account
      </h1>

      <form
        className="space-y-4"
        onSubmit={handleSignup}
      >

        <Input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          name="fullName"
        />

        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />

        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600"
        >
          <option value="student">
            Student
          </option>

          <option value="faculty">
            Faculty
          </option>
        </select>

        <Input
          type="text"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          name="department"
        />

        <Button
          text="Create Account"
          type="submit"
        />
        <p className="text-center text-sm text-slate-400">

  Already have an account?{" "}

  <Link
    to="/login"
    className="text-blue-400 hover:underline"
  >
    Login
  </Link>

</p>

      </form>

    </AuthLayout>
  );
}

export default Signup;