import React from "react";
import { Link } from "react-router-dom";
import FormBreadCrumb from '/src/components/FormBreadCrumb'

export default function Thankyou() {
  return (
    <div>
        <FormBreadCrumb/>
    <div className="h-auto flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Thank You</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Check" className="w-24 h-24 mb-4" />
      <p className="text-lg text-center mb-4">
        Your form has been submitted successfully. We will get in touch with you shortly.
      </p>
      <Link to="/" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
        Home
      </Link>
    </div>
    </div>
  );
}
