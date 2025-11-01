import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormBreadcrumb from "./FormBreadCrumb";

export default function ConsultationForm() {
  const navigate = useNavigate();
  const mailtoLinkRef = React.useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "",
    studyType: "",
    InterestedSubject: "",
    inPak: "No",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ 
      ...prevData, 
      [name]: value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare email content
    const emailSubject = `Consultation Request from ${formData.firstName} ${formData.lastName}`;
    const emailBody = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Mobile: ${formData.mobile}
Country: ${formData.country}
Study Type: ${formData.studyType}
Subject Interested: ${formData.InterestedSubject}
In Pakistan: ${formData.inPak}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@deedsconsultancy.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Set the link and trigger click
    if (mailtoLinkRef.current) {
      mailtoLinkRef.current.href = mailtoLink;
      mailtoLinkRef.current.click();
    }
  };

  return (
    <div>
      <FormBreadcrumb/>
      <div className="max-w-4xl h-auto mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-4">
          Book your FREE consultation today!
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            name="firstName" 
            placeholder="First Name" 
            className="border p-2" 
            value={formData.firstName} 
            required 
            onChange={handleChange} 
          />
          <input 
            name="lastName" 
            placeholder="Last Name" 
            className="border p-2"  
            value={formData.lastName}  
            required 
            onChange={handleChange} 
          />
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            className="border p-2"
            value={formData.email} 
            required 
            onChange={handleChange} 
          />
          <input 
            name="mobile" 
            placeholder="Mobile" 
            className="border p-2" 
            value={formData.mobile} 
            required 
            onChange={handleChange} 
          />

          <select name="country" className="border p-2" value={formData.country} required onChange={handleChange}>
            <option value="">Select Country *</option>
            <option value="Italy">Italy</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Turkey">Turkey</option>
            <option value="UAE">UAE</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Other">Other</option>
          </select>

          <select name="studyType" className="border p-2" value={formData.studyType} required onChange={handleChange}>
            <option value="">Type of Study *</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>

         <input 
            name="InterestedSubject" 
            placeholder="Interested Subject" 
            className="border p-2" 
            value={formData.InterestedSubject} 
            required 
            onChange={handleChange} 
          />

          <div className="flex items-center gap-4 col-span-2">
            <p>Are you in Pakistan?</p>
            <label>
              <input 
                type="radio" 
                name="inPak" 
                value="Yes" 
                onChange={handleChange} 
                checked={formData.inPak === "Yes"} 
              /> Yes
            </label>
            <label>
              <input 
                type="radio" 
                name="inPak" 
                value="No" 
                onChange={handleChange} 
                checked={formData.inPak === "No"} 
              /> No
            </label>
          </div>

          <div className="col-span-2">
            <Link to="/thank-you" ref={mailtoLinkRef}>
            <button 
              type="submit" 
              className="w-full bg-themeClr font-sans text-white py-2 rounded hover:bg-themeClr2"
            >
              Send Email
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

