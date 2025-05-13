import React, { useState } from 'react';
import { Menu, X, Mail, Phone, Linkedin, MapPin, Download, Moon, Sun, Award } from 'lucide-react';

const ResumeWebsite = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Function to scroll to section and close mobile menu
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={darkMode ? "min-h-screen bg-black text-gray-200" : "min-h-screen bg-gray-50 text-gray-800"}>
      {/* Header */}
      <header className={darkMode ? "fixed w-full z-10 bg-black border-b border-gray-800" : "fixed w-full z-10 bg-white shadow-md"}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="mr-2 text-3xl">🎱</span>
            <span className={darkMode ? "text-gray-300" : "text-gray-700"}>AYDEN CABRAL</span>
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} 
              className={darkMode ? "text-gray-300 hover:text-gray-100 transition-colors" : "text-gray-700 hover:text-indigo-600 transition-colors"}>About</button>
            <button onClick={() => scrollToSection('experience')} 
              className={darkMode ? "text-gray-300 hover:text-gray-100 transition-colors" : "text-gray-700 hover:text-indigo-600 transition-colors"}>Experience</button>
            <button onClick={() => scrollToSection('education')} 
              className={darkMode ? "text-gray-300 hover:text-gray-100 transition-colors" : "text-gray-700 hover:text-indigo-600 transition-colors"}>Education</button>
            <button onClick={() => scrollToSection('certifications')} 
              className={darkMode ? "text-gray-300 hover:text-gray-100 transition-colors" : "text-gray-700 hover:text-indigo-600 transition-colors"}>Certifications</button>
          </nav>
          
          {/* Dark Mode Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={darkMode ? "p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors" : "p-2 rounded-full bg-gray-200"}
            >
              {darkMode ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-indigo-600" />}
            </button>
            
            <button 
              className="md:hidden p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className={darkMode ? "text-gray-300" : ""} /> : <Menu size={24} className={darkMode ? "text-gray-300" : ""} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={darkMode ? "md:hidden bg-gray-900 border-t border-gray-800 py-4" : "md:hidden bg-white border-t border-gray-200 py-4"}>
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} 
                className={darkMode ? "text-left text-gray-300 hover:text-gray-100" : "text-left text-gray-700 hover:text-indigo-600"}>About</button>
              <button onClick={() => scrollToSection('experience')} 
                className={darkMode ? "text-left text-gray-300 hover:text-gray-100" : "text-left text-gray-700 hover:text-indigo-600"}>Experience</button>
              <button onClick={() => scrollToSection('education')} 
                className={darkMode ? "text-left text-gray-300 hover:text-gray-100" : "text-left text-gray-700 hover:text-indigo-600"}>Education</button>
              <button onClick={() => scrollToSection('certifications')} 
                className={darkMode ? "text-left text-gray-300 hover:text-gray-100" : "text-left text-gray-700 hover:text-indigo-600"}>Certifications</button>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className={darkMode ? "pt-32 pb-20 bg-black" : "pt-32 pb-20 bg-white"}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className={darkMode ? "inline-block px-3 py-1 rounded-full text-sm bg-gray-900 text-gray-300 mb-4" : "inline-block px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700 mb-4"}>
              Computer Science
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ayden Cabral</h1>
            <h2 className={darkMode ? "text-2xl md:text-3xl text-gray-500 mb-6" : "text-2xl md:text-3xl text-indigo-500 mb-6"}>Always a Student</h2>
            <p className={darkMode ? "text-lg mb-8 text-gray-300" : "text-lg mb-8 text-gray-700"}>
              Tracy, CA • 209-640-3911 • Aycab159@protonmail.com
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ayden-cabral-ba0103217" target="_blank" rel="noopener noreferrer" className={darkMode ? "px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors" : "px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"}>
                LinkedIn Profile
              </a>
              <a href="#" className={darkMode ? "px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-800 font-medium flex items-center transition-colors" : "px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 font-medium flex items-center"}>
                <Download size={18} className="mr-2" /> Resume PDF
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className={darkMode ? "w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg" : "w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500"}>
              <img src="/api/placeholder/400/400" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className={darkMode ? "py-20 bg-gray-900 border-t border-gray-800" : "py-20 bg-white border-t border-gray-200"}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <div className={darkMode ? "p-8 rounded-lg bg-black shadow-xl border border-gray-800" : "p-8 rounded-lg bg-gray-100 shadow-lg"}>
              <p className={darkMode ? "text-lg mb-6 text-gray-200" : "text-lg mb-6 text-gray-700"}>
                I'm a technology professional pursuing a Master's in Computer Science at the University of Texas in Austin. I have experience in IT support and technology architecture analysis at organizations like Accenture and University of the Pacific.
              </p>
              
              <h3 className={darkMode ? "text-xl font-bold mb-4 text-gray-300" : "text-xl font-bold mb-4 text-indigo-600"}>Skills</h3>
              <div className="flex flex-wrap gap-3">
                <span className={darkMode ? "px-4 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700" : "px-4 py-2 rounded-lg bg-gray-200 text-gray-700"}>Google Workspace</span>
                <span className={darkMode ? "px-4 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700" : "px-4 py-2 rounded-lg bg-gray-200 text-gray-700"}>Microsoft Office</span>
                <span className={darkMode ? "px-4 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700" : "px-4 py-2 rounded-lg bg-gray-200 text-gray-700"}>Windows OS</span>
                <span className={darkMode ? "px-4 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700" : "px-4 py-2 rounded-lg bg-gray-200 text-gray-700"}>Jira / qTest</span>
                <span className={darkMode ? "px-4 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700" : "px-4 py-2 rounded-lg bg-gray-200 text-gray-700"}>Python</span>
                <span className={darkMode ? "px-4 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700" : "px-4 py-2 rounded-lg bg-gray-200 text-gray-700"}>HTML/CSS</span>
                <span className={darkMode ? "px-4 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700" : "px-4 py-2 rounded-lg bg-gray-200 text-gray-700"}>C++, Java</span>
                <span className={darkMode ? "px-4 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700" : "px-4 py-2 rounded-lg bg-gray-200 text-gray-700"}>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className={darkMode ? "py-20 bg-black" : "py-20 bg-gray-50"}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Job 1 */}
            <div className={darkMode ? "p-6 rounded-lg bg-gray-900 border border-gray-800 shadow-lg" : "p-6 rounded-lg bg-white shadow-lg"}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className={darkMode ? "text-xl font-bold text-gray-200" : "text-xl font-bold text-indigo-600"}>Technology Architecture Analyst</h3>
                  <h4 className="text-lg font-medium mb-2">Accenture</h4>
                  <p className={darkMode ? "mb-4 text-gray-400" : "mb-4 text-gray-600"}>
                    <MapPin size={16} className="inline mr-1" /> Sacramento, CA
                  </p>
                </div>
                <div className={darkMode ? "text-sm text-gray-400 font-medium" : "text-sm text-gray-500"}>
                  May 2023 – December 2023 | October 2024 – May 2025
                </div>
              </div>
              <p className={darkMode ? "mb-4 text-gray-300" : "mb-4 text-gray-700"}>
                Successfully delivered technology architecture solutions for high-profile clients, utilizing Scrum, resulting in improved results. Acted as a liaison between technical and non-technical stakeholders, translating business requirements into technical specifications.
              </p>
              <h5 className={darkMode ? "font-semibold mb-2 text-gray-300" : "font-semibold mb-2 text-indigo-600"}>Key Accomplishments:</h5>
              <ul className="list-disc list-inside space-y-2">
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>Developed detailed technology architecture blueprints, roadmaps, and documentation to guide clients in their digital transformation journey.</li>
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>Played a key role in the programs UAT for numerous sprints, collaborating with others to write, review, and test scripts while documenting and reporting bugs and defects.</li>
              </ul>
            </div>
            
            {/* Job 2 */}
            <div className={darkMode ? "p-6 rounded-lg bg-gray-900 border border-gray-800 shadow-lg" : "p-6 rounded-lg bg-white shadow-lg"}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className={darkMode ? "text-xl font-bold text-gray-200" : "text-xl font-bold text-indigo-600"}>Information Technology Support Specialist</h3>
                  <h4 className="text-lg font-medium mb-2">University of the Pacific: Eberhardt School of Business</h4>
                  <p className={darkMode ? "mb-4 text-gray-400" : "mb-4 text-gray-600"}>
                    <MapPin size={16} className="inline mr-1" /> Stockton, CA
                  </p>
                </div>
                <div className={darkMode ? "text-sm text-gray-400 font-medium" : "text-sm text-gray-500"}>
                  August 2022 - May 2023 | January 2024 – Jun 2024
                </div>
              </div>
              <p className={darkMode ? "mb-4 text-gray-300" : "mb-4 text-gray-700"}>
                Provided customer support to faculty, staff and students through the support of hardware, software and networking of desktops, laptops, and other mobile devices. Documented all service requests through ServiceNow.
              </p>
              <h5 className={darkMode ? "font-semibold mb-2 text-gray-300" : "font-semibold mb-2 text-indigo-600"}>Key Accomplishments:</h5>
              <ul className="list-disc list-inside space-y-2">
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>Organized streaming hardware and software for medium to large conferences and presentations.</li>
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>Managed and maintained departmental devices, including a gaming computer lab, and organized esports tournaments with over 25 participants.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className={darkMode ? "py-20 bg-gray-900 border-t border-gray-800" : "py-20 bg-white border-t border-gray-200"}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Degree 1 */}
            <div className={darkMode ? "p-6 rounded-lg bg-black shadow-lg border border-gray-800" : "p-6 rounded-lg bg-gray-100 shadow-lg"}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className={darkMode ? "text-xl font-bold mb-2 text-gray-300" : "text-xl font-bold mb-2 text-indigo-600"}>University of Texas in Austin</h3>
                  <h4 className="text-lg font-medium">Master of Science in Computer Science</h4>
                </div>
                <div className={darkMode ? "text-sm text-gray-400 font-medium mt-2 md:mt-0" : "text-sm text-gray-500 mt-2 md:mt-0"}>
                  January 2025 - Expected 2027
                </div>
              </div>
              <p className={darkMode ? "mt-4 text-gray-300" : "mt-4 text-gray-700"}>GPA: 4.0</p>
            </div>
            
            {/* Degree 2 */}
            <div className={darkMode ? "p-6 rounded-lg bg-black shadow-lg border border-gray-800" : "p-6 rounded-lg bg-gray-100 shadow-lg"}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className={darkMode ? "text-xl font-bold mb-2 text-gray-300" : "text-xl font-bold mb-2 text-indigo-600"}>University of the Pacific</h3>
                  <h4 className="text-lg font-medium">Bachelor of Science in Computer Science</h4>
                </div>
                <div className={darkMode ? "text-sm text-gray-400 font-medium mt-2 md:mt-0" : "text-sm text-gray-500 mt-2 md:mt-0"}>
                  May 2022 - May 2024
                </div>
              </div>
              <ul className="mt-4 space-y-1">
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>GPA: 3.74</li>
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>Dean's Honor Roll: All Semesters Active</li>
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>Member of Iota Eta chapter of Theta Chi Fraternity and SUCCESS TRIO Program</li>
              </ul>
            </div>
            
            {/* Degree 3 */}
            <div className={darkMode ? "p-6 rounded-lg bg-black shadow-lg border border-gray-800" : "p-6 rounded-lg bg-gray-100 shadow-lg"}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className={darkMode ? "text-xl font-bold mb-2 text-gray-300" : "text-xl font-bold mb-2 text-indigo-600"}>Las Positas College</h3>
                  <h4 className="text-lg font-medium">General Education</h4>
                </div>
                <div className={darkMode ? "text-sm text-gray-400 font-medium mt-2 md:mt-0" : "text-sm text-gray-500 mt-2 md:mt-0"}>
                  May 2020 - May 2022
                </div>
              </div>
              <ul className="mt-4 space-y-1">
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>GPA: 3.60</li>
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>Dean's List Fall 2021 & Spring 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section id="certifications" className={darkMode ? "py-20 bg-black border-t border-gray-800" : "py-20 bg-gray-50 border-t border-gray-200"}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {/* Certification 1 */}
            <div className={darkMode ? "p-6 rounded-lg bg-gray-900 shadow-lg border border-gray-800 text-center" : "p-6 rounded-lg bg-white shadow-lg text-center"}>
              <Award size={40} className={darkMode ? "mx-auto mb-4 text-gray-400" : "mx-auto mb-4 text-indigo-600"} />
              <h3 className={darkMode ? "text-xl font-bold mb-2 text-gray-300" : "text-xl font-bold mb-2 text-indigo-600"}>CompTIA Security+</h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>January 2023</p>
            </div>
            
            {/* Certification 2 */}
            <div className={darkMode ? "p-6 rounded-lg bg-gray-900 shadow-lg border border-gray-800 text-center" : "p-6 rounded-lg bg-white shadow-lg text-center"}>
              <Award size={40} className={darkMode ? "mx-auto mb-4 text-gray-400" : "mx-auto mb-4 text-indigo-600"} />
              <h3 className={darkMode ? "text-xl font-bold mb-2 text-gray-300" : "text-xl font-bold mb-2 text-indigo-600"}>CompTIA Network+</h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>July 2022</p>
            </div>
            
            {/* Certification 3 */}
            <div className={darkMode ? "p-6 rounded-lg bg-gray-900 shadow-lg border border-gray-800 text-center" : "p-6 rounded-lg bg-white shadow-lg text-center"}>
              <Award size={40} className={darkMode ? "mx-auto mb-4 text-gray-400" : "mx-auto mb-4 text-indigo-600"} />
              <h3 className={darkMode ? "text-xl font-bold mb-2 text-gray-300" : "text-xl font-bold mb-2 text-indigo-600"}>CompTIA A+</h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>February 2022</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={darkMode ? "py-8 bg-black border-t border-gray-800" : "py-8 bg-white border-t border-gray-200"}>
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex justify-center space-x-6">
            <a href="mailto:Aycab159@protonmail.com" className={darkMode ? "text-gray-400 hover:text-gray-300 flex items-center" : "text-indigo-600 hover:text-indigo-500 flex items-center"}>
              <Mail size={18} className="mr-2" /> Aycab159@protonmail.com
            </a>
            <a href="tel:209-640-3911" className={darkMode ? "text-gray-400 hover:text-gray-300 flex items-center" : "text-indigo-600 hover:text-indigo-500 flex items-center"}>
              <Phone size={18} className="mr-2" /> 209-640-3911
            </a>
            <a href="https://www.linkedin.com/in/ayden-cabral-ba0103217" target="_blank" rel="noopener noreferrer" className={darkMode ? "text-gray-400 hover:text-gray-300 flex items-center" : "text-indigo-600 hover:text-indigo-500 flex items-center"}>
              <Linkedin size={18} className="mr-2" /> LinkedIn
            </a>
          </div>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>&copy; {new Date().getFullYear()} Ayden Cabral. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeWebsite;