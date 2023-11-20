import { useState } from "react";
import Button from "@mui/joy/Button"
import "./Register.css"
import {  NavLink } from "react-router-dom";
import Typography from '@mui/joy/Typography';

export const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")


  const handleFormSubmission = (e) => {
    e.preventDefault();
    
  } 

  return (
    <>
    <div className="glass-container">
      <div className="w3-col register-wrapper" style={{minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="header-logo">
              <span>
                <img
                  className="logo-image"
                  src="/images/Home/logo.png"
                  alt=""
                />
              </span>
              <h2 style={{color: "black"}} className="header-name">CreativeME</h2>
            </div>
          <h2 className="mt-8 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Get Started
          </h2>
          <h4 className="mt-1 text-center text-base font-semibold leading-9 tracking-tight text-gray-900">by creating a free account.</h4>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleFormSubmission} className="space-y-6" action="#" method="POST">
          <div>
              <label htmlFor="fullName" className="block text-sm font-semibold leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ben Robbins"
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="fullName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Valid Email
              </label>
              <div className="mt-2">
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ben@robbins.com"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                  Strong Password
                </label>
              </div>
              <div className="mt-2">
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="123htsdkj%hSGDJH"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="forgotPassword" className="block text-sm font-semibold leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="123htsdkj%hSGDJH"
                  id="forgotPassword"
                  name="forgotPassword"
                  type="password"
                  autoComplete="forgot-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-fuchsia-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-700"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-black">
            Already a member?{' '}
            <a href="login" className="font-semibold leading-6 text-fuchsia-900 hover:text-fuchsia-700">
              Log In
            </a>
          </p>
          
        </div>
        {/* <p className=" mt-4 text-center text-sm text-black">© Daisy Dawn Cooperations {new Date().getFullYear()}</p> */}
        </div>
        <p className="w3-col w3-hide-small w3-hide-medium mt-2 text-center text-sm text-black">© Daisy Dawn Cooperations {new Date().getFullYear()}</p>
        <Button
            style={{
              position: "absolute",
              right: "70px",
              top: "20px",
              zIndex: "10",
            }}
            className="header-login-button "
            variant="text"
          >
          <a href="login">Login</a>
          </Button>
      </div>
    </>
  )
}
