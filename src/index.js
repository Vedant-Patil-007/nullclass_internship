import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Header() {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "20px",
        background: "#282c34",
        color: "white",
        fontSize: "2rem", // Increased font size to make it more noticeable
        fontWeight: "bold", // Added bold for visibility
        "@media (max-width: 768px)": {
          fontSize: "1.5rem", // Smaller font size for medium screens
          padding: "15px", // Reduce padding on medium screens
        },
        "@media (max-width: 480px)": {
          fontSize: "1.2rem", // Even smaller font size on small screens
          padding: "10px", // Further reduce padding on small screens
        },
      }}
    >
      <h1>NullClass Internship Task - Vedant Patil</h1>
      <p className="intro">
        During my internship, I completed the following tasks. You can visit my
        work by clicking on the buttons below.
      </p>
    </header>
  );
}

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "15px",
        background: "#3b3f46",
        color: "white",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>
        <a
          href="mailto:vspatil2004@gmail.com"
          style={{
            color: "#61dafb",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <FaEnvelope style={{ marginRight: "8px" }} /> vspatil2004@gmail.com
        </a>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "10px",
        }}
      >
        <a
          href="https://twitter.com/yourhandle"
          style={{ color: "#1DA1F2", fontSize: "1.5rem" }}
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          style={{ color: "#0A66C2", fontSize: "1.5rem" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/yourhandle"
          style={{ color: "#E4405F", fontSize: "1.5rem" }}
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

root.render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>
);
