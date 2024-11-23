import React, { useState } from "react";
import image from "../assets/banner2.png";
import icon from "../assets/Icon.png";
import "../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function SignUp() {

    let navigate = useNavigate();

    const [student, setStudent] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",
        emergencyContact: "",
        role: "student"
    });

    const onInputChange = (e) => {
        setStudent({...student, [e.target.name] : e.target.value});
    };

    const onSubmit = async (e) => {
        alert("You are about to submit");
        e.preventDefault();
        await axios.post(`http://localhost:8080/register`, student);
        navigate("/")
    }
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [emergencyContact, setEmergencyContact] = useState("");
//   const [role, setRole] = useState("student"); // Default role

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Full Name:", fullName);
//     console.log("Email:", email);
//     console.log("Username:", username);
//     console.log("Password:", password);
//     console.log("Emergency Contact:", emergencyContact);
//     console.log("Role:", role); // Log the selected role
//     alert("Registration submitted successfully!");


  return (
    <div className="signin-container">
      <div className="container">
        <div className="signin-form">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={student.fullName}
              onChange={(e) => onInputChange(e)}
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email"
              value={student.email}
              onChange={(e) => onInputChange(e)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Username"
              value={student.username}
              onChange={(e) => onInputChange(e)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={student.password}
              onChange={(e) => onInputChange(e)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Emergency Contact"
              value={student.emergencyContact}
              onChange={(e) => onInputChange(e)}
              className="input-field"
            />
            <select
              value={student.role}
              onChange={(e) => onInputChange(e)}
              className="input-field"
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
            <span>
              Already have an account? <Link to="/signin">Log in</Link>
            </span>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="details">
          <div className="logo">
            <img src={icon} alt="logo" />
            <h1>
              The <span>Akademiya</span>
            </h1>
          </div>
          <img src={image} alt="banner" />
        </div>
      </div>
    </div>
  );
}
