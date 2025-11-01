import React, { useState, useEffect } from 'react';
import course from '../../assets/courses/course.jpg'
import { Link } from 'react-router-dom';
// Dummy data for courses
const allCourses = [
  {
    id: 1,
    name: 'Academic English (1 Term) (Into Manchester)',
    institution: 'INTO',
    location: 'Various, UK',
    studyLevel: 'English Language',
    duration: '1 Term',
    imageUrl: course,
  },
  {
    id: 2,
    name: 'Academic English (1 Term) (Newcastle University)',
    institution: 'INTO',
    location: 'Various, UK',
    studyLevel: 'English Language',
    duration: '1 Term',
    imageUrl: course,
  },
  {
    id: 3,
    name: 'Academic English (1 Term) (Queen\'s University Belfast)',
    institution: 'INTO',
    location: 'Various, UK',
    studyLevel: 'English Language',
    duration: '1 Term',
    imageUrl: course,
  },
  {
    id: 4,
    name: 'Foundation Year in Business',
    institution: 'University of London',
    location: 'London, UK',
    studyLevel: 'Foundation',
    duration: '1 Year',
    imageUrl: course,
  },
  {
    id: 5,
    name: 'Pre-Master\'s in Engineering',
    institution: 'University of Manchester',
    location: 'Manchester, UK',
    studyLevel: 'Pre-Master\'s',
    duration: '6 Months',
    imageUrl: course, 
  },
  {
    id: 6,
    name: 'BSc Computer Science',
    institution: 'University of Edinburgh',
    location: 'Edinburgh, UK',
    studyLevel: 'Undergraduate',
    duration: '3 Years',
    imageUrl: course,
  },
  {
    id: 7,
    name: 'MSc Data Science',
    institution: 'Imperial College London',
    location: 'London, UK',
    studyLevel: 'Master\'s',
    duration: '1 Year',
    imageUrl: course,
  },
  {
    id: 8,
    name: 'PhD in Artificial Intelligence',
    institution: 'University of Cambridge',
    location: 'Cambridge, UK',
    studyLevel: 'Research',
    duration: '3 Years',
    imageUrl: course,
  },
  {
    id: 9,
    name: 'A-Level Sciences',
    institution: 'Bellerbys College',
    location: 'Brighton, UK',
    studyLevel: 'A-Level',
    duration: '2 Years',
    imageUrl: course,
  },
  {
    id: 10,
    name: 'Academic English (2 Terms) (Into London)',
    institution: 'INTO',
    location: 'London, UK',
    studyLevel: 'English Language',
    duration: '2 Terms',
    imageUrl: course,
  },
];

// Define study levels
const studyLevels = [
  'English Language',
  'Foundation',
  'Pre-Master\'s',
  'Undergraduate',
  'Master\'s',
  'Research',
  'A-Level',
];

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudyLevels, setSelectedStudyLevels] = useState([]);
  const [selectedInstitutions, setSelectedInstitutions] = useState([]); // For future expansion
  const [selectedIntakes, setSelectedIntakes] = useState([]); // For future expansion
  const [selectedLocations, setSelectedLocations] = useState([]); // For future expansion
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Effect to filter courses whenever search term or filters change
  useEffect(() => {
    let currentFilteredCourses = allCourses;

    // Apply search term filter
    if (searchTerm) {
      currentFilteredCourses = currentFilteredCourses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply study level filter
    if (selectedStudyLevels.length > 0) {
      currentFilteredCourses = currentFilteredCourses.filter(course =>
        selectedStudyLevels.includes(course.studyLevel)
      );
    }

    // if (selectedInstitutions.length > 0) { ... }
    // if (selectedIntakes.length > 0) { ... }
    // if (selectedLocations.length > 0) { ... }

    setFilteredCourses(currentFilteredCourses);
  }, [searchTerm, selectedStudyLevels, selectedInstitutions, selectedIntakes, selectedLocations]);

  // Handle study level filter click
  const handleStudyLevelClick = (level) => {
    setSelectedStudyLevels(prevSelected =>
      prevSelected.includes(level)
        ? prevSelected.filter(l => l !== level)
        : [...prevSelected, level]
    );
  };

  //  reset filters
  const handleReset = () => {
    setSearchTerm('');
    setSelectedStudyLevels([]);
    setSelectedInstitutions([]);
    setSelectedIntakes([]);
    setSelectedLocations([]);
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          UK Pathway Courses - Your First Step Toward Top UK Universities
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Start your academic journey with UK pathway courses that bridge the gap to university entry. Gain the skills, support, and qualifications needed to join leading UK institutions with confidence.
        </p>

        {/* Search Input */}
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search Courses"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-themeClr text-gray-700 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Filters Section */}
          <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Filters</h2>
              <button
                onClick={handleReset}
                className="text-themeClr2 hover:text-themeClr font-medium transition-colors duration-200"
              >
                Reset
              </button>
            </div>

            {/* Institutions Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Institutions</h3>
              {/* Placeholder for Institutions dropdown/selection */}
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-themeClr">
                  <option>Select Institution</option>
                  {/* Add dynamic options here based on available institutions */}
                  <option>INTO</option>
                  <option>University of London</option>
                  <option>University of Manchester</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Intakes Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Intakes</h3>
              {/* Placeholder for Intakes dropdown/selection */}
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-themeClr">
                  <option>Select Intake</option>
                  <option>September</option>
                  <option>January</option>
                  <option>April</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Location</h3>
              {/* Placeholder for Location dropdown/selection */}
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                  <option>Select Location</option>
                  <option>London</option>
                  <option>Manchester</option>
                  <option>Edinburgh</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Course List Section */}
          <div className="lg:col-span-2">
            {/* Select Study Level */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select Your Study Level</h2>
              <p className="text-gray-600 mb-4">
                Pick one or more study levels to explore your academic journey in the UK.
              </p>
              <div className="flex flex-wrap gap-3">
                {studyLevels.map(level => (
                  <button
                    key={level}
                    onClick={() => handleStudyLevelClick(level)}
                    className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ease-in-out
                      ${selectedStudyLevels.includes(level)
                        ? 'bg-themeClr text-white shadow-md'
                        : 'bg-gray-200 text-gray-700 hover:bg-blue-100 hover:themeClr'
                      }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Available Courses */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Available Courses ({filteredCourses.length} results found)
            </h2>

            <div className="space-y-6 ">
              {filteredCourses.length > 0 ? (
                filteredCourses.map(course => (
                  <div
                    key={course.id}
                    className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="w-full sm:w-48 h-32 sm:h-auto flex-shrink-0">
                      <img
                        src={course.imageUrl}
                        alt={course.name}
                        className="w-full h-full object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-t-none"
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/150x100/AEC6CF/FFFFFF?text=Image+Error`; }}
                      />
                    </div>
                    <div className="flex-grow p-4 sm:p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {course.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{course.institution}</p>
                      <p className="text-gray-500 text-sm flex items-center mb-4">
                        <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                        {course.location}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-themeClr" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          Study Level: {course.studyLevel}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-themeClr2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
                          </svg>
                          Duration: {course.duration}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 flex justify-center items-center text-sm w-auto sm:w-auto">
                      <Link 
                      to ='/form'
                      className="px-10 py-2 bg-themeClr text-white rounded-lg shadow-md hover:bg-themeClr transition-colors duration-300">
                       Register
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-500 text-lg">
                  No courses found matching your criteria.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
