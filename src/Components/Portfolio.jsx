/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Resume",
    description:
      "I invite you to explore my portfolio to see examples of my work and to gain a deeper understanding of my professional journey and capabilities. ",
    url: "https://github.com/Spidy32/Resume.git",
  },
  {
    title: "Calculator Project",
    description:
      "Developed a fully functional calculator using HTML, CSS, and JavaScript. This project demonstrates my ability to create interactive web applications with a focus on user experience and responsive design.",
    url: "https://github.com/Spidy32/Calculator.git",
  },
  {
    title: "Weather App Project",
    description:
      "Developed a real-time weather application using HTML, CSS, and JavaScript. This project highlights my skills in front-end development and API integration.",
    url: "https://github.com/Spidy32/Weather-App.git",
  },
  {
    title: "Age Calculator Project",
    description:
      "Developed an age calculator application using HTML, CSS, and JavaScript. This project highlights my ability to create interactive web tools with a focus on user input and real-time calculations.",
    url: "https://github.com/Spidy32/Age-Calculator.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
