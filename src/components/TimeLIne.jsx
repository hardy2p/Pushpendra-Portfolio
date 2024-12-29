import React, { useState } from "react";

const TimeLine = ({ darkMode, bg }) => {
  const [activeTab, setActiveTab] = useState("experience");

  const educationData = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "Chandigarh University Mohali",
      date: "2021 - 2025",
      marks: "8.2 CGPA",
      details:
        "Gained a solid foundation in computer science principles, including data structures, algorithms, and software development. Ranked in the top 20% on LeetCode, showcasing strong problem-solving skills and expertise in competitive programming. Applied theoretical knowledge through hands-on projects, fostering collaboration and teamwork in dynamic, challenging environments.",
    },
    {
      degree: "High School",
      institution: "JVP International School, CBSE Board",
      marks: "85.00%",
      date: "2019",
      details:
        "Studied core subjects such as Physics, Chemistry, and Mathematics, building a solid foundation for engineering studies. Developed an interest in analytical thinking and scientific problem-solving through coursework and practical applications.",
    },
  ];

  const experienceData = [
    {
      role: "Backend Developer Intern",
      company: "Smallfare Corp.",
      date: "December 2024 - Feburary 2025",
      details:
        "Worked as an intern at Smallfare Corp, handling backend technologies such as Express, Node.js, and MongoDB, while simultaneously utilizing React and Tailwind CSS to design and customize the website effectively.",
      technologies: [
        "React JS",
        "React Native",
        "MongoDB",
        "Next Js",
        "Node JS",
        "Tailwind CSS",
        "Kafka",
        "Postman-API",
        "Thunder Client",
      ],
    },

    {
      role: "Subject Matter Expert(CSE)",
      company: "Cheggs Inc.",
      date: "December 2021 - Aprill 2023",
      details:
        "Worked as a Subject Matter Expert at Chegg, resolving queries for over 500 students and achieving a 4.1-star rating in the subject of Computer Science and Engineering.",
      technologies: ["React", "HTML", "CSS", "DBMS", "JavaScript","OOPS", "Computer Networks", "Operating System"],
    },
  ];

  const renderContent = () => {
    const data = activeTab === "experience" ? experienceData : educationData;
    return data.map((item, index) => (
      <div
        key={index}
        className={`mb-6 p-4 border-l-4 ${
          darkMode
            ? "border-green-500 bg-[#004225]"
            : "border-orange-500 bg-[#FBCEB1] "
        } backdrop-blur-md bg-opacity-100 hover:scale-105 transition-transform duration-300 rounded-md shadow-lg`}
      >
        <h3 className="text-lg font-bold mb-2">
          {activeTab === "experience" ? item.role : item.degree} -{" "}
          {item.company || item.institution}
        </h3>
        <p className="text-sm text-gray-500">{item.date}</p>
        {item.marks && (
          <p className="text-lg text-gray-500"> Score : {item.marks}</p>
        )}
        <p>{item.details}</p>
        {item.technologies && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium bg-cyan-500 text-white rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div
      className={`flex md:flex-row flex-col h-[100vh] items-center justify-center ${
        bg
          ? "bg-transparent"
          : darkMode
          ? "bg-[#032903] text-white"
          : "bg-[#F5F5DC] text-black"
      }`}
    >
      {/* Left Menu */}
      <div className="flex flex-col items-center justify-center w-[35vw] hidden md:block md:flex">
        {["experience", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 m-2 relative group font-semibold ${
              activeTab === tab ? "text-green-500" : "text-gray-500"
            }`}
          >
            <span
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-green-500 group-hover:h-full transition-all duration-300 ${
                activeTab === tab ? "h-full" : ""
              }`}
            ></span>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex md:hidden items-center justify-center w-full mt-[10vh]">
        {["experience", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 mx-1 text-center relative group font-semibold rounded-full transition-all duration-300 ${
              activeTab === tab
                ? darkMode
                  ? "bg-green-500 text-white" // Green for dark mode
                  : "bg-orange-500 text-white" // Orange for light mode
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div
        className={`md:w-[65vw] w-[95vw] mt-[3vh] md:mt-0   ${
          darkMode ? "border-green-500" : "border-orange-500"
        }`}
      >
        {renderContent()}
      </div>

      {/* Vertical Timeline */}
      <div
        className={`flex-col items-center justify-center hidden md:block ml-[10vw] w-7 h-[170px] self-center ${
          darkMode ? "text-white bg-lime-600" : "text-gray-800 bg-orange-400"
        }`}
      >
        <h2
          className={`text-sm font-bold text-center px-1 py-2 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            transform: "rotate(360deg)",
          }}
        >
          TIMELINE
        </h2>
      </div>
    </div>
  );
};

export default TimeLine;
