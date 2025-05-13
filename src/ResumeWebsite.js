import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, MapPin, Download, Moon, Sun, Award } from 'lucide-react';

const ResumeWebsite = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [visibleSections, setVisibleSections] = useState({});
  
  // The resume URL - your PDF path
  const resumeUrl = '/resume/Ayden_Cabral_Resume.pdf';
  
  // Function to scroll to section and close mobile menu
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Check which section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setVisibleSections(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    }, { threshold: 0.2 });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Update active section based on visibility
  useEffect(() => {
    const sections = ['about', 'experience', 'education', 'certifications'];
    for (const section of sections) {
      if (visibleSections[section]) {
        setActiveSection(section);
        break;
      }
    }
  }, [visibleSections]);
  
  return (
    <div className={darkMode ? "min-h-screen bg-[#000000] text-gray-200" : "min-h-screen bg-[#EEEEEE] text-gray-800"}>
      {/* Header */}
      <header className={darkMode ? "fixed w-full z-10 bg-[#000000] border-b border-[#AA14F0]" : "fixed w-full z-10 bg-white shadow-md"}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="mr-2 text-3xl">🎱</span>
            <span className={darkMode ? "text-gray-300" : "text-gray-700"}>AYDEN CABRAL</span>
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} 
              className={`${darkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-[#AA14F0]"} 
                ${activeSection === 'about' ? (darkMode ? "text-white border-b-2 border-[#AA14F0]" : "text-[#AA14F0] border-b-2 border-[#AA14F0]") : ""}
                transition-colors pb-1`}>
              About
            </button>
            <button onClick={() => scrollToSection('experience')} 
              className={`${darkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-[#AA14F0]"} 
                ${activeSection === 'experience' ? (darkMode ? "text-white border-b-2 border-[#AA14F0]" : "text-[#AA14F0] border-b-2 border-[#AA14F0]") : ""}
                transition-colors pb-1`}>
              Experience
            </button>
            <button onClick={() => scrollToSection('education')} 
              className={`${darkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-[#AA14F0]"} 
                ${activeSection === 'education' ? (darkMode ? "text-white border-b-2 border-[#AA14F0]" : "text-[#AA14F0] border-b-2 border-[#AA14F0]") : ""}
                transition-colors pb-1`}>
              Education
            </button>
            <button onClick={() => scrollToSection('certifications')} 
              className={`${darkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-[#AA14F0]"} 
                ${activeSection === 'certifications' ? (darkMode ? "text-white border-b-2 border-[#AA14F0]" : "text-[#AA14F0] border-b-2 border-[#AA14F0]") : ""}
                transition-colors pb-1`}>
              Certifications
            </button>
          </nav>
          
          {/* Dark Mode Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={darkMode ? "p-2 rounded-full bg-[#AA14F0] hover:bg-[#BC8CF2] transition-colors" : "p-2 rounded-full bg-gray-200"}
            >
              {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-[#AA14F0]" />}
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
          <div className={darkMode ? "md:hidden bg-[#000000] border-t border-[#AA14F0] py-4" : "md:hidden bg-white border-t border-gray-200 py-4"}>
            <div className="max-w-6xl mx-auto px-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} 
                className={darkMode ? "text-left text-gray-300 hover:text-gray-100" : "text-left text-gray-700 hover:text-[#AA14F0]"}>About</button>
              <button onClick={() => scrollToSection('experience')} 
                className={darkMode ? "text-left text-gray-300 hover:text-gray-100" : "text-left text-gray-700 hover:text-[#AA14F0]"}>Experience</button>
              <button onClick={() => scrollToSection('education')} 
                className={darkMode ? "text-left text-gray-300 hover:text-gray-100" : "text-left text-gray-700 hover:text-[#AA14F0]"}>Education</button>
              <button onClick={() => scrollToSection('certifications')} 
                className={darkMode ? "text-left text-gray-300 hover:text-gray-100" : "text-left text-gray-700 hover:text-[#AA14F0]"}>Certifications</button>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className={`${darkMode ? "pt-32 pb-20 bg-[#000000]" : "pt-32 pb-20 bg-white"} transition-all duration-700`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className={darkMode ? "inline-block px-3 py-1 rounded-full text-sm bg-[#AA14F0] text-white mb-4" : "inline-block px-3 py-1 rounded-full text-sm bg-[#BC8CF2] text-white mb-4"}>
              Computer Science
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 transform transition-transform duration-700 hover:translate-x-2">Ayden Cabral</h1>
            <h2 className={darkMode ? "text-2xl md:text-3xl text-[#BC8CF2] mb-6" : "text-2xl md:text-3xl text-[#AA14F0] mb-6"}>Always a Student</h2>
            <p className={darkMode ? "text-lg mb-8 text-gray-300" : "text-lg mb-8 text-gray-700"}>
              Tracy, CA • 209-640-3911 • Aycab159@protonmail.com
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ayden-cabral-ba0103217" target="_blank" rel="noopener noreferrer" 
                className={`${darkMode ? "bg-[#AA14F0] hover:bg-[#BC8CF2] text-white" : "bg-[#AA14F0] hover:bg-[#BC8CF2] text-white"} 
                  px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105`}>
                LinkedIn Profile
              </a>
              <a href={resumeUrl} 
                download="Ayden_Cabral_Resume.pdf"
                className={`${darkMode ? "border border-[#AA14F0] hover:bg-[#AA14F0]" : "border border-[#AA14F0] hover:bg-[#BC8CF2]"} 
                px-6 py-3 rounded-lg font-medium flex items-center transition-all duration-300 transform hover:scale-105`}>
                <Download size={18} className="mr-2" /> Resume PDF
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className={`${darkMode ? "border-4 border-[#AA14F0]" : "border-4 border-[#AA14F0]"} 
              w-64 h-64 rounded-full overflow-hidden shadow-lg transform transition-all duration-700 hover:scale-105`}>
              <img src="/images/PP3.JPG" alt="Ayden Cabral" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className={`${darkMode ? "py-20 bg-[#000000] border-t border-[#AA14F0]" : "py-20 bg-white border-t border-gray-200"} 
        transition-all duration-700 transform ${visibleSections.about ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <div className={darkMode ? "p-8 rounded-lg bg-[#000000] shadow-xl border border-[#AA14F0]" : "p-8 rounded-lg bg-[#EEEEEE] shadow-lg"}>
              <p className={darkMode ? "text-lg mb-6 text-gray-200" : "text-lg mb-6 text-gray-700"}>
                I'm a technology professional pursuing a Master's in Computer Science at the University of Texas in Austin. I have experience in IT support and technology architecture analysis at organizations like Accenture and University of the Pacific.
              </p>
              
              <h3 className={darkMode ? "text-xl font-bold mb-4 text-[#BC8CF2]" : "text-xl font-bold mb-4 text-[#AA14F0]"}>Skills</h3>
              <div className="flex flex-wrap gap-3">
                <span className={`${darkMode ? "bg-[#AA14F0] text-white border border-[#BC8CF2]" : "bg-[#BC8CF2] text-white"} 
                  px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105`}>Google Workspace</span>
                <span className={`${darkMode ? "bg-[#AA14F0] text-white border border-[#BC8CF2]" : "bg-[#BC8CF2] text-white"} 
                  px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105`}>Microsoft Office</span>
                <span className={`${darkMode ? "bg-[#AA14F0] text-white border border-[#BC8CF2]" : "bg-[#BC8CF2] text-white"} 
                  px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105`}>Windows OS</span>
                <span className={`${darkMode ? "bg-[#AA14F0] text-white border border-[#BC8CF2]" : "bg-[#BC8CF2] text-white"} 
                  px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105`}>Jira / qTest</span>
                <span className={`${darkMode ? "bg-[#AA14F0] text-white border border-[#BC8CF2]" : "bg-[#BC8CF2] text-white"} 
                  px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105`}>Python</span>
                <span className={`${darkMode ? "bg-[#AA14F0] text-white border border-[#BC8CF2]" : "bg-[#BC8CF2] text-white"} 
                  px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105`}>HTML/CSS</span>
                <span className={`${darkMode ? "bg-[#AA14F0] text-white border border-[#BC8CF2]" : "bg-[#BC8CF2] text-white"} 
                  px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105`}>C++, Java</span>
                <span className={`${darkMode ? "bg-[#AA14F0] text-white border border-[#BC8CF2]" : "bg-[#BC8CF2] text-white"} 
                  px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105`}>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className={`${darkMode ? "py-20 bg-[#AA14F0] border-t border-[#000000]" : "py-20 bg-[#EEEEEE]"} 
        transition-all duration-700 transform ${visibleSections.experience ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Job 1 */}
            <div className={`${darkMode ? "bg-[#000000] border border-[#BC8CF2]" : "bg-white"} 
              p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-102 hover:shadow-xl`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className={darkMode ? "text-xl font-bold text-[#BC8CF2]" : "text-xl font-bold text-[#AA14F0]"}>Technology Architecture Analyst</h3>
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
              <h5 className={darkMode ? "font-semibold mb-2 text-[#BC8CF2]" : "font-semibold mb-2 text-[#AA14F0]"}>Key Accomplishments:</h5>
              <ul className="list-disc list-inside space-y-2">
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>Developed detailed technology architecture blueprints, roadmaps, and documentation to guide clients in their digital transformation journey.</li>
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>Played a key role in the programs UAT for numerous sprints, collaborating with others to write, review, and test scripts while documenting and reporting bugs and defects.</li>
              </ul>
            </div>
            
            {/* Job 2 */}
            <div className={`${darkMode ? "bg-[#000000] border border-[#BC8CF2]" : "bg-white"} 
              p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-102 hover:shadow-xl`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className={darkMode ? "text-xl font-bold text-[#BC8CF2]" : "text-xl font-bold text-[#AA14F0]"}>Information Technology Support Specialist</h3>
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
              <h5 className={darkMode ? "font-semibold mb-2 text-[#BC8CF2]" : "font-semibold mb-2 text-[#AA14F0]"}>Key Accomplishments:</h5>
              <ul className="list-disc list-inside space-y-2">
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>Organized streaming hardware and software for medium to large conferences and presentations.</li>
                <li className={darkMode ? "text-gray-300" : "text-gray-700"}>Managed and maintained departmental devices, including a gaming computer lab, and organized esports tournaments with over 25 participants.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className={`${darkMode ? "py-20 bg-[#BC8CF2] border-t border-[#AA14F0]" : "py-20 bg-white border-t border-gray-200"} 
        transition-all duration-700 transform ${visibleSections.education ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Degree 1 */}
            <div className={`${darkMode ? "bg-[#000000] border border-[#AA14F0]" : "bg-[#EEEEEE]"} 
              p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-102 hover:shadow-xl`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className={darkMode ? "text-xl font-bold mb-2 text-[#AA14F0]" : "text-xl font-bold mb-2 text-[#AA14F0]"}>University of Texas in Austin</h3>
                  <h4 className="text-lg font-medium">Master of Science in Computer Science</h4>
                </div>
                <div className={darkMode ? "text-sm text-gray-400 font-medium mt-2 md:mt-0" : "text-sm text-gray-500 mt-2 md:mt-0"}>
                  January 2025 - Expected 2027
                </div>
              </div>
              <p className={darkMode ? "mt-4 text-gray-300" : "mt-4 text-gray-700"}>GPA: 4.0</p>
            </div>
            
            {/* Degree 2 */}
            <div className={`${darkMode ? "bg-[#000000] border border-[#AA14F0]" : "bg-[#EEEEEE]"} 
              p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-102 hover:shadow-xl`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className={darkMode ? "text-xl font-bold mb-2 text-[#AA14F0]" : "text-xl font-bold mb-2 text-[#AA14F0]"}>University of the Pacific</h3>
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
            <div className={`${darkMode ? "bg-[#000000] border border-[#AA14F0]" : "bg-[#EEEEEE]"} 
              p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-102 hover:shadow-xl`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className={darkMode ? "text-xl font-bold mb-2 text-[#AA14F0]" : "text-xl font-bold mb-2 text-[#AA14F0]"}>Las Positas College</h3>
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
      <section id="certifications" className={`${darkMode ? "py-20 bg-[#000000] border-t border-[#AA14F0]" : "py-20 bg-[#EEEEEE] border-t border-gray-200"} 
        transition-all duration-700 transform ${visibleSections.certifications ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {/* Certification 1 */}
            <div className={`${darkMode ? "bg-[#AA14F0] border border-[#BC8CF2]" : "bg-white"} 
              p-6 rounded-lg shadow-lg text-center transition-all duration-500 transform hover:scale-105 hover:shadow-xl`}>
              <Award size={40} className={`${darkMode ? "text-white" : "text-[#AA14F0]"} mx-auto mb-4`} />
              <h3 className={darkMode ? "text-xl font-bold mb-2 text-white" : "text-xl font-bold mb-2 text-[#AA14F0]"}>CompTIA Security+</h3>
              <p className={darkMode ? "text-white" : "text-gray-600"}>January 2023</p>
            </div>
            
            {/* Certification 2 */}
            <div className={`${darkMode ? "bg-[#AA14F0] border border-[#BC8CF2]" : "bg-white"} 
              p-6 rounded-lg shadow-lg text-center transition-all duration-500 transform hover:scale-105 hover:shadow-xl`}>
              <Award size={40} className={`${darkMode ? "text-white" : "text-[#AA14F0]"} mx-auto mb-4`} />
              <h3 className={darkMode ? "text-xl font-bold mb-2 text-white" : "text-xl font-bold mb-2 text-[#AA14F0]"}>CompTIA Network+</h3>
              <p className={darkMode ? "text-white" : "text-gray-600"}>July 2022</p>
            </div>
            
            {/* Certification 3 */}
            <div className={`${darkMode ? "bg-[#AA14F0] border border-[#BC8CF2]" : "bg-white"} 
              p-6 rounded-lg shadow-lg text-center transition-all duration-500 transform hover:scale-105 hover:shadow-xl`}>
              <Award size={40} className={`${darkMode ? "text-white" : "text-[#AA14F0]"} mx-auto mb-4`} />
              <h3 className={darkMode ? "text-xl font-bold mb-2 text-white" : "text-xl font-bold mb-2 text-[#AA14F0]"}>CompTIA A+</h3>
              <p className={darkMode ? "text-white" : "text-gray-600"}>February 2022</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={darkMode ? "py-8 bg-[#000000] border-t border-[#AA14F0]" : "py-8 bg-white border-t border-gray-200"}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-4 flex flex-wrap justify-center gap-6">
            <a href="mailto:Aycab159@protonmail.com" className={`${darkMode ? "text-[#BC8CF2] hover:text-[#AA14F0]" : "text-[#AA14F0] hover:text-[#BC8CF2]"} 
              flex items-center transition-all duration-300 transform hover:scale-105`}>
              <Mail size={18} className="mr-2" /> Aycab159@protonmail.com
            </a>
            <a href="tel:209-640-3911" className={`${darkMode ? "text-[#BC8CF2] hover:text-[#AA14F0]" : "text-[#AA14F0] hover:text-[#BC8CF2]"} 
              flex items-center transition-all duration-300 transform hover:scale-105`}>
              <Phone size={18} className="mr-2" /> 209-640-3911
            </a>
            <a href="https://www.linkedin.com/in/ayden-cabral-ba0103217" target="_blank" rel="noopener noreferrer" 
              className={`${darkMode ? "text-[#BC8CF2] hover:text-[#AA14F0]" : "text-[#AA14F0] hover:text-[#BC8CF2]"} 
                flex items-center transition-all duration-300 transform hover:scale-105`}>
              <Linkedin size={18} className="mr-2" /> LinkedIn
            </a>
            <a href={resumeUrl} 
              download="Ayden_Cabral_Resume.pdf"
              className={`${darkMode ? "text-[#BC8CF2] hover:text-[#AA14F0]" : "text-[#AA14F0] hover:text-[#BC8CF2]"} 
                flex items-center transition-all duration-300 transform hover:scale-105`}>
              <Download size={18} className="mr-2" /> Download Resume
            </a>
          </div>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>&copy; {new Date().getFullYear()} Ayden Cabral. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeWebsite;