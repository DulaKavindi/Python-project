import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">
        About LumiSub 
      </h1>

      <p className="about-paragraph highlight">
        LumiSub is a powerful desktop application designed to provide real-time translated subtitles through advanced speech recognition and language translation APIs. By converting spoken language into translated text instantly, LumiSub breaks down language barriers and enhances communication for users worldwide.
      </p>

      <p className="about-paragraph subtle-highlight">
        Whether you are watching foreign-language movies, attending international meetings, or learning a new language, LumiSub ensures you never miss a word. Its seamless integration with your microphone captures speech accurately, while the translation engine supports multiple languages, making it versatile for global use.
      </p>

      <div className="features-section">
        <h2 className="features-title">
          Key Features 
        </h2>
        <ul className="features-list">
          <li>Real-time speech-to-text transcription with high accuracy</li>
          <li>Instant translation into your preferred language</li>
          <li>Customizable subtitle appearance for better readability</li>
          <li>Supports multiple languages including English 🇬🇧, French 🇫🇷, Italian 🇮🇹, Sinhala 🇱🇰, and more</li>
          <li>User-friendly interface optimized for ease of use</li>
        </ul>
      </div>

      <p className="about-paragraph subtle-highlight">
        Our vision is to empower users by facilitating effortless communication across languages and cultures. LumiSub strives to make language differences a thing of the past by providing accessible, fast, and reliable translation subtitles.
      </p>

      <p className="about-conclusion">
        Join thousands of users who trust LumiSub for their everyday communication and entertainment needs 🎉.
      </p>
    </div>
  );
}

export default About;
