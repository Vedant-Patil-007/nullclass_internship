// import React from "react";
// import "../styles/styles.css";
// const TaskButton = ({ taskName, repoLink }) => {
//   return (
//     <a href={repoLink} target="_blank" rel="noopener noreferrer">
//       <button className="task-button">{taskName}</button>
//     </a>
//   );
// };

// export default TaskButton;

import React from "react";
import "../styles/styles.css";

const TaskButton = ({ taskName, repoLink }) => {
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "12px",
    fontWeight: "bold",
    color: "#000",
    backgroundColor: "#ffd700",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    display: "inline-block",
    textDecoration: "none",
  };

  const hoverStyle = {
    backgroundColor: "#fff",
    transform: "scale(1.05)",
  };

  return (
    <a
      href={repoLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <button
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = hoverStyle.backgroundColor;
          e.target.style.transform = hoverStyle.transform;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
          e.target.style.transform = "scale(1)";
        }}
      >
        {taskName}
      </button>
    </a>
  );
};

export default TaskButton;
