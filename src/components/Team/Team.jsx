import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import { CircleCheck, Instagram } from 'lucide-react';
import ceo1 from '../../assets/team/maheenmughalceo.png'
import cofounder from '../../assets/team/faisalrasheedcofounder.png'
import founder from '../../assets/team/imranrasheedfounder.png'

const teamMembers = [
  {
    id: 1,
    name: "Imran Rasheed",
    role: "Founder",
    image: founder,
    route: "/aboutfounder",
  },
  {
    id: 2,
    name: "Maheen Mughal",
    role: "CEO",
    image: ceo1,
    route: "/aboutceo",
  },
  {
    id: 3,
    name: "Faisal Rasheed",
    role: "CO - Founder",
    image: cofounder,
    route: "/aboutcofounder",
  },
];

export default function TeamSection() {
  return (
    <div className="min-h-screen bg-themeClr2 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-themeClr text-sm font-semibold tracking-wider uppercase mb-4">
            PROFESSIONAL PEOPLE TEAM
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Meet Our Expert <br /> <span className="text-themeClr">Visa Consultants.</span>
          </h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              to={member.route}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/5] bg-themeClr overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

             
              {/* Info Card */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6 text-center">
                <h3 className="text-xl font-bold text-themeClr2 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {member.role}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}