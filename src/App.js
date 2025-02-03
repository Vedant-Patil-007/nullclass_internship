import React, { useEffect } from "react";
import TaskButton from "./components/TaskButton";
import "./styles/styles.css";

const App = () => {
  const tasks = [
    {
      name: "Twitter Analytics PowerBI",
      link: "https://github.com/Vedant-Patil-007/Twitter_Analysis",
      description:
        "This project utilizes Power BI to analyze Twitter data, providing insights into user engagement, trends, and sentiment analysis. It showcases data-driven storytelling through interactive visualizations for better decision-making.",
      technologies: ["PowerBI", "Data Analysis", "ETL"],
    },
    {
      name: "Google PlayStore Analytics ",
      link: "https://github.com/Vedant-Patil-007/Google_PlayStore_Analytics_project/",
      description:
        "The objective of this project is to explore and analyze the Google Play Store apps dataset, which includes information such as category, rating, size, and more. Additionally, a dataset containing customer reviews of the Android apps is provided. The goal is to discover key factors that contribute to app engagement and overall success.",
      technologies: [
        "Python(pandas,Numpy,Matplotlib,Seaborn)",
        "EDA",
        "Machine Learning",
        "Bussiness Intelligence",
      ],
    },
    {
      name: "Sales Insights using Tableau",
      link: "https://github.com/Vedant-Patil-007/sales-insights-project-using-tableau",
      description:
        "The Sales Insights Data Analysis Project leverages SQL and Tableau to extract valuable business insights from transactional data. It includes querying customer records, analyzing revenue trends, and filtering data by market and currency. The project visualizes sales performance in different regions and timeframes for better decision-making.",
      technologies: [
        "Tableue",
        "SQL",
        "Data Analysis",
        "ETL",
        "Bussiness Intelligence",
      ],
    },
  ];

  useEffect(() => {
    const taskCards = document.querySelectorAll(".task-card");
    taskCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 200);
    });
  }, []);

  return (
    <div className="container">
      <h1>NullClass Internship Task - Vedant Patil</h1>
      <p className="intro">
        During my internship, I completed the following tasks. You can visit my
        work by clicking on the buttons below.
      </p>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-card">
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <div className="technologies">
              <strong>Technologies Used:</strong>
              <ul>
                {task.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <TaskButton taskName="View on GitHub" repoLink={task.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
