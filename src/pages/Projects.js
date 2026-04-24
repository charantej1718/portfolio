import React from "react";
import { motion } from "framer-motion";


const projects = [
  {
    title: "Cyber Case Management System",
    desc: "Developed a system to manage and track cybersecurity cases with structured workflows and improved reporting.",
  },
  {
    title: "Sales Forecasting Model",
    desc: "Built a time-series forecasting model to analyze trends and predict company sales performance.",
  },
  {
    title: "FauxFinance",
    desc: "Created a real-time stock tracking web app using APIs with a responsive user interface.",
  },
  {
    title: "DICOM Viewer",
    desc: "Developed a full-stack medical imaging application with advanced tools like cine playback and measurements.",
  },
  {
    title: "Cryptocurrency Transaction Tracker",
    desc: "Built a web app to track blockchain transactions across Ethereum, Bitcoin, and Tron networks.",
  },
  {
    title: "Chronos – AI Text Reconstruction",
    desc: "Designed an AI-based system to reconstruct fragmented text using Gemini API and contextual search.",
  },
];

function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      <div className="grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;    