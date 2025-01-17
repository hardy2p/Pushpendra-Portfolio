import React, { useState, useEffect, useRef } from "react";
import "../styles/Carousel.css";

const entries = [
  {
    id: 1,
    label: "Inning Score Prediction",
    image: "/images/animep.png",
    desc: [
      "A vibrant platform enabling real-time IPL first-inning score predictions.",
      "Processed 15,000+ IPL records to train and test a Linear Regression model.",
      "Achieved 80%+ accuracy by analyzing last 5 overs' performance.",
      "Technology used: Flask, Pandas, NumPy, Scikit-learn.",
    ],
    title: "IPL Score Predictor",
    platforms: [
      {
        type: "web",
        url: "https://github.com/hardy2p/First-Innings-Score-Predictor-IPL-",
        icon: "/images/web.png",
      },
    ],
  },
  {
    id: 2,
    label: "Real-Time Chat Application",
    image: "/images/mpip.png",
    title: "One way solution for your home inspection",
    desc: [
      "Developed a real-time chat application using Node.js and WebSockets.",
      "Enabled users to join multiple chat rooms and communicate instantly.",
      "Built the front-end with HTML, CSS, and JavaScript for seamless interaction.",
      "Implemented a Node.js backend for low-latency messaging, tested with 50+ users."
    ],
    platforms: [
      {
        type: "web",
        url: "https://github.com/hardy2p",
        icon: "/images/web.png",
      },
    ],
  },
  {
    id: 3,
    label: "HeroStat Application",
    image: "/images/zawwarp.png",
    title: "Test your knowledge about Marvels.",
    desc: [
      "Built a superhero information app using HTML, CSS, and JavaScript.",
      "Retrieved real-time data from the Superhero API to display detailed stats for 761 superheroes.",
      "Optimized search functionality using JavaScript for efficient querying.",
      "Enhanced user engagement by reducing search time and improving app performance."
    ],
    platforms: [
      {
        type: "web",
        url: "https://www.google.com",
        icon: "/images/web.png",
      },
      
    ],
  },
];

const PlatformLinks = ({ platforms }) => (
  <div className="platform-links  w-[100px] h-[40px]">
    {platforms.map((platform, index) => (
      <a
        key={index}
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className="platform-link"
      >
        <img
          src={platform.icon}
          alt={`${platform.type} icon`}
          className="platform-icon"
        />
      </a>
    ))}
  </div>
);

const Projects = ({ darkMode, h }) => {
  console.log("Rendering Home with darkMode:", darkMode);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(entries);
  const [isAnimating, setIsAnimating] = useState(false);

  const timeoutRef = useRef(null);

  const timeRunning = 1000;
  const timeAutoNext = 1000;

  const moveSlide = (direction) => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (direction === "next") {
      setSlides((prevSlides) => {
        const updatedSlides = [...prevSlides];
        updatedSlides.push(updatedSlides.shift());
        return updatedSlides;
      });
    } else if (direction === "prev") {
      setSlides((prevSlides) => {
        const updatedSlides = [...prevSlides];
        updatedSlides.unshift(updatedSlides.pop());
        return updatedSlides;
      });
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, timeRunning);
  };

  const handleNext = () => moveSlide("next");
  const handlePrev = () => moveSlide("prev");

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, timeAutoNext);

    return () => clearTimeout(timeoutRef.current);
  }, [slides]);

  return (
    <div className="container mx-auto  min-h-screen">
      <div className="carousel">
        <div className={`list mt-[10vh] md:mt-[14vh] `}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`item ${index === 0 ? "active" : ""}`}
            >
              <div className="content max-w-[60vw]">
                <div
                  className={`author ${
                    darkMode ? "text-white" : "text-black "
                  }`}
                >
                  Projects
                </div>
                <div className="topic">{slide.label}</div>
                <div
                  className={`title ${darkMode ? "text-white" : "text-black"}`}
                >
                  {slide.title}
                </div>
                <div
                  className={`desc my-4 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  <ul className="list-disc pl-5">
                    {slide.desc.map((point, idx) => (
                      <h1 className="md:text-lg text-[15px]" key={idx}>
                        {point}
                      </h1>
                    ))}
                  </ul>
                </div>

                <PlatformLinks platforms={slide.platforms} />
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`item ${index === currentSlide ? "active" : ""} `}
            >
              <div className="content">
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="w-full h-full object-contain py-3"
                />
                <div
                  className={`title ${
                    darkMode ? "text-white" : "text-black"
                  } text-center `}
                >
                  {slide.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`arrows ${darkMode ? "text-white" : "text-black"}`}>
          <button
            className={` ${darkMode ? "bg-[#043927]" : "text-black"}`}
            id="prev"
            onClick={handlePrev}
            disabled={isAnimating}
          >
            ⇐
          </button>
          <button id="next" onClick={handleNext} disabled={isAnimating}>
            ⇒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
