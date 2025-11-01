
import React from 'react';
import BreadcrumbDestination from './BreadcrumbDestination';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const countries = [
  {
    id: 1,
    name: "United Kingdom",
    flag: "🇬🇧",
    route: "/uk",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    description: "Explore world-class education and rich cultural heritage in the UK's prestigious universities and vibrant cities."
  },
  {
    id: 2,
    name: "Australia",
    flag: "🇦🇺",
    route: "/australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop",
    description: "Experience exceptional quality of life and world-renowned education in Australia's diverse and welcoming environment."
  },
  {
    id: 3,
    name: "Canada",
    flag: "🇨🇦",
    route: "/canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop",
    description: "Discover outstanding educational opportunities and multicultural communities in one of the world's most livable countries."
  },
  {
    id: 4,
    name: "USA",
    flag: "🇺🇸",
    route: "/usa",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
    description: "Access cutting-edge research facilities and top-ranked universities in the land of innovation and opportunity."
  },
  {
    id: 5,
    name: "Germany",
    flag: "🇩🇪",
    route: "/germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
    description: "Benefit from high-quality education with low tuition fees and excellent career prospects in Europe's economic powerhouse."
  },
  {
    id: 6,
    name: "Ireland",
    flag: "🇮🇪",
    route: "/ireland",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&h=600&fit=crop",
    description: "Study in English-speaking Europe with access to leading tech companies and a warm, friendly culture."
  },
  {
    id: 7,
    name: "France",
    flag: "🇫🇷",
    route: "/france",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop",
    description: "Enjoy affordable quality education in a multicultural hub with diverse study programs and vibrant student life."
  },
  {
    id: 8,
    name: "UAE",
    flag: "🇦🇪",
    route: "/uae",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    description: "Experience world-class education in a modern, cosmopolitan environment with excellent career opportunities."
  },
 {
  id: 9,
  name: "Poland",
  flag: "🇵🇱",
  route: "/poland",
  image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop",
  description: "Affordable European education with rich history and vibrant student life in the heart of Europe."
},
{
  id: 10,
  name: "Turkey",
  flag: "🇹🇷",
  route: "/turkey",
  image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
  description: "Bridge between East and West offering world-class education in historic Istanbul and beyond."
},
{
  id: 11,
  name: "Malaysia",
  flag: "🇲🇾",
  route: "/malaysia",
  image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop",
  description: "Multicultural hub with affordable quality education and English-taught programs in Southeast Asia."
},
{
  id: 12,
  name: "Italy",
  flag: "🇮🇹",
  route: "/italy",
  image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop",
  description: "Study in the birthplace of Renaissance with world-renowned universities and rich cultural heritage."
},

];

export default function CountrySelection() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" bg-white shadow-lg overflow-hidden">
        {/* Header Banner Section */}
        <BreadcrumbDestination />


        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10" data-aos="fade-up"  >
          {countries.map((country) => (

            <Link
              key={country.id}
              to={country.route} // Add navigation link
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >

              {/* Country Image */}
              <div className="relative h-64  overflow-hidden ">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Flag Badge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg border-4 border-white">
                {country.flag}
              </div>

              {/* Content */}
              <div className="p-6 pt-12 text-center">
                <h3 className="text-2xl font-bold text-themeClr2 mb-3">
                  {country.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {country.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-themeClr rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <ChevronUp className="w-5 h-5 text-white transform rotate-45" />

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}