import React from "react";
import locationIcon from '../assets/icons/location.svg';
import profilePic from '../assets/images/BENJAMIN_001.jpg';
import resume from '../assets/resume.pdf';

const Contact = () => {
    return (
        <div className="bg-[#0d1117] text-white flex flex-col sm:flex-row justify-between items-center p-8 rounded-lg shadow-md">
          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">
              Benjamin Teo
            </h1>
            <h3 className="text-lg text-gray-400 mb-4">Full Stack Developer</h3>
            <div className="flex items-center mb-4">
              <img src={locationIcon} alt="Benjamin's Location" className="w-6 h-6 sm:w-6 sm:h-6" />
              <p className="ml-2 text-md font-thin text-gray-400">Melbourne, Australia</p>
            </div>
            <p className="text-gray-300 mb-4">
              Recent Software Development graduate from Monash University.
            </p>
    
            {/* Buttons Section */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={resume}
                download
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center"
              >
                <span className="mr-2">Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 17l-4 4m0 0l-4-4m4 4V3"
                  />
                </svg>
              </a>
              <div className="flex items-center gap-3">
                {/* Icons for LinkedIn, GitHub, etc. */}
                <a href="https://www.linkedin.com/in/benjamin-teo-yh99" target= "_blank" rel="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.4c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.4h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.357c.609-.815 1.634-1.357 2.75-1.357 2.072 0 3.75 1.678 3.75 3.75v6.25z" />
                  </svg>
                </a>
                <a href="https://www.github.com/benjaminteoyh" target= "_blank" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-5.5 0-10 4.5-10 10 0 4.41 2.87 8.15 6.84 9.49.5.09.66-.21.66-.47 0-.23-.01-.84-.01-1.65-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.63.07-.62.07-.62 1.01.07 1.55 1.03 1.55 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.64-1.33-2.22-.26-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.31.1-2.74 0 0 .84-.27 2.75 1.03.8-.22 1.66-.33 2.51-.33s1.71.11 2.51.33c1.91-1.31 2.75-1.03 2.75-1.03.55 1.43.2 2.48.1 2.74.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.67-4.57 4.92.36.31.68.93.68 1.87 0 1.35-.01 2.44-.01 2.77 0 .26.16.57.67.47 3.97-1.34 6.83-5.08 6.83-9.48 0-5.5-4.5-10-10-10z" />
                  </svg>
                </a>
                <a href="mailto:benjaminteoyh99@gmail.com" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.8 4h-15.6c-1.16 0-2.2.94-2.2 2.1v11.8c0 1.16.94 2.1 2.2 2.1h15.6c1.16 0 2.2-.94 2.2-2.1v-11.8c0-1.16-.94-2.1-2.2-2.1zm-1.06 3.16l-6.74 5.05-6.74-5.05c-.15-.12-.37-.01-.37.17v.9l7.07 5.3c.22.17.52.17.74 0l7.07-5.3v-.9c0-.18-.22-.29-.37-.17zm-14.74 1.27l6.3 4.73-6.3 4.73v-9.46zm1.35 9.73l6.4-4.81 6.4 4.81h-12.8zm14.39-.27l-6.3-4.73 6.3-4.73v9.46z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
    
          {/* Image Section */}
          <div className="flex-shrink-0 mt-6 sm:mt-0">
            <img
              src={profilePic}
              alt="Benjamin Teo"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
        </div>
      );
}

export default Contact;