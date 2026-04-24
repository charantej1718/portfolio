import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";
import profile from "../profile.jpg";
function Home() {
    const navigate = useNavigate();
  return (
    <div className="container">
      <div className="hero">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Bhogi Charan Tej</h1>

          <h3>
            <ReactTyped
              strings={[
                "Cybersecurity Enthusiast",
                "Backend Developer",
                "Tech Explorer"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h3>

          <p>
            Passionate about building scalable systems, solving real-world problems,
            and exploring cutting-edge technologies.
          </p>

        <button className="cta" onClick={() => navigate("/projects")}>
            View Projects
        </button>
        </motion.div>

        <motion.img
          src={profile} 
          alt="profile"
          className="profile-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Skills</h2>

        <div className="skill-bar">
          <p>Python</p>
          <div className="bar"><div style={{ width: "90%" }} /></div>

          <p>Backend Development</p>
          <div className="bar"><div style={{ width: "85%" }} /></div>

          <p>Cybersecurity</p>
          <div className="bar"><div style={{ width: "80%" }} /></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;