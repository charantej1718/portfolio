import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="container">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I am Bhogi Charan Tej, a Computer Science student at Mahindra University
        with a strong interest in cybersecurity, backend development, and emerging technologies.
        I enjoy building scalable systems and solving real-world problems.
      </motion.p>

      {/* PERSONAL INFO */}
      <h2>Personal Information</h2>
      <div className="info-grid">
        <p><strong>Name:</strong> Bhogi Charan Tej</p>
        <p><strong>Phone:</strong> +91 9133846928</p>
        <p><strong>Email:</strong> bhogicharantej@gmail.com</p>
        <p><strong>Location:</strong> Hyderabad, India</p>
        <p><strong>University:</strong> Mahindra University</p>
        <p><strong>Degree:</strong> B.Tech Computer Science</p>
        <p><strong>GitHub:</strong> github.com/bhogi1718</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/charan-tej-bhogi</p>
      </div>

      <h2>Education</h2>
      <p>
        B.Tech in Computer Science – Mahindra University (2024 – 2027)
      </p>

      <h2>Interests</h2>
      <ul>
        <li>Cybersecurity</li>
        <li>Cloud Computing</li>
        <li>Backend Development</li>
        <li>Blockchain Analysis</li>
      </ul>

      <h2>Strengths</h2>
      <ul>
        <li>Problem-solving mindset</li>
        <li>Quick learner</li>
        <li>Strong analytical thinking</li>
        <li>Team collaboration</li>
      </ul>

    </div>
  );
}

export default About;