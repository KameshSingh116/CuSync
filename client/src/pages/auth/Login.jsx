import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { loginUser } from "../../services/authService";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    const { data, error } = await loginUser(
      email,
      password
    );

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login Successful");

    console.log(data);

    navigate("/dashboard");
  };

  return (
    <AuthLayout>

      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome Back
      </h1>

      <form
        className="space-y-4"
        onSubmit={handleLogin}
      >

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

        <Button
          text="Login"
          type="submit"
        />

      </form>

    </AuthLayout>
  );
}

export default Login;