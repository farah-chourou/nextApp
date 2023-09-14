"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setMessage("Login successful!");
        localStorage.setItem("token", data.token);
  
        try {
          const userResponse = await fetch("/api/user/me", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.token}`,
            },
          });
          const userData = await userResponse.json();
  
          // console.log("User data:", userData);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
  
        await router.push("/");  
        window.location.href='/';
      } else {
        setMessage(data.message || "Login failed.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="flex gap-6 mx-auto my-10 w-full max-w-6xl">
        <div className=" w-1/2 flex  justify-end items-center rounded-r-md">
          <img
            className="object-cover w-full h-full rounded-l-md"
            src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11435/b3c65ed2-1c85-4f8f-9bd0-b3503d592ffe.jpg"
            alt="Cosmetics"
          />
        </div>
        <div className="flex flex-col gap-12 w-full max-w-lg p-10 bg-white rounded shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="text-black text-4xl font-medium leading-loose tracking-wider">
              Log in to Aphrodite
            </div>
            <div className="text-black text-base font-normal leading-normal">
              Enter your details below
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-10">
              {[
                { label: "Email or Phone Number", name: "email", type: "text" },
                { label: "Password", name: "password", type: "password" },
              ].map((field, idx) => (
                <div className="flex flex-col gap-2" key={idx}>
                  <label
                    className="opacity-40 text-black text-base font-normal leading-normal"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    className="w-full border-b border-black opacity-50 py-2"
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-5 mt-8">
              <button
                type="submit"
                className="w-full px-32 py-4 bg-red-500 rounded text-white text-base font-medium"
              >
                Log In
              </button>
              <a
                href="#forget-password"
                className="text-red-500 text-base font-normal leading-normal"
              >
                Forget Password?
              </a>
            </div>
            {message && <p className="mt-4 text-red-600">{message}</p>}
          </form>
        </div>
      </div>
    </main>
  );
}
