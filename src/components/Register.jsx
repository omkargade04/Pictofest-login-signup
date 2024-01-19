import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [collegeName, setCollegeName] = useState('');

    const [collegeType, setCollegeType] = useState('');
    const name = "non-pict";

    const handleSelectChange = (e) => {
        const college = e.target.value;
        setCollegeType(college);
      };

      const toaster = () => {

      }


  return (
    <>
      <div className="min-h-screen bg-img bg-orange-200 flex justify-center items-center">
        <div className="bg-yellow-100 p-10 rounded-lg shadow-xl w-72 sm:w-96 sm:h-auto">
            
            {/* <img src="./retro.png" height={150} width={150} className=" absolute z-10 top-20 object-cover"/>  */}
          <h1 className="flex justify-center items-center  font-semibold text-2xl mb-5">
          Sign Up
          </h1>
          <input
            className="w-full h-10 sm:h-12 p-3 mb-4 rounded outline-none placeholder-slate-500"
            type="email"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="w-full h-10 sm:h-12 p-3 mb-4 rounded outline-none placeholder-slate-500"
            type="password"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="w-full h-10 sm:h-12 p-3 mb-4 rounded outline-none placeholder-slate-500"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full h-10 sm:h-12 p-3 mb-4 rounded outline-none placeholder-slate-500"
            type="email"
            placeholder="Phone No."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="w-full h-10 sm:h-12 p-3 mb-4 rounded outline-none placeholder-slate-500"
            type="email"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            className="w-full h-10 sm:h-12 p-3 mb-4 rounded outline-none placeholder-slate-500"
            onChange={handleSelectChange}
            >
                <option value="">College</option>
                <option value="pict">PICT</option>
                <option value="non-pict" >Non-PICT</option>
          </select>
          {(collegeType === name) && 
          <input
            className="w-full h-10 sm:h-12 p-3 mb-4 rounded outline-none placeholder-slate-500"
            type="email"
            placeholder="College Name"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          />
          }
          <button
            onClick={toaster}
            className="w-full h-10 sm:h-12  p-2 mb-3 bg-yellow-300 rounded hover:bg-yellow-200"
          >
            <p className="font-medium">
              Sign Up
            </p>
          </button>
            
        </div>

        
      </div>
    </>
  )
}

export default Register