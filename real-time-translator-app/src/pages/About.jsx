import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About LumiSub</h1>

      <p className="about-paragraph highlight">
        LumiSub is a powerful desktop application built to deliver real-time translated subtitles using advanced speech recognition and translation APIs. It instantly converts spoken language into readable translated text, helping users communicate without barriers.
      </p>

      <p className="about-paragraph subtle-highlight">
        Whether you're watching foreign-language films, participating in international meetings, or learning a new language, LumiSub ensures you stay connected. It uses your microphone to accurately detect speech and translates it into a wide range of languages.
      </p>

      <div className="features-section">
        <h2 className="features-title">Key Features</h2>
        <ul className="features-list">
          <li>Accurate real-time speech-to-text transcription</li>
          <li>Instant translation into your preferred language</li>
          <li>Customizable subtitle design for better readability</li>
          <li>Supports multiple languages including English, French, Italian, Sinhala, and more</li>
          <li>Simplified and intuitive user interface</li>
        </ul>
      </div>

      <p className="about-paragraph subtle-highlight">
        Our vision is to make communication seamless across cultures. LumiSub aims to eliminate language boundaries by providing fast, accessible, and accurate subtitle translation for everyone.
      </p>

      <p className="about-conclusion">
        Discover how LumiSub is redefining accessibility and language understanding—experience the future of real-time translation today.
      </p>
    </div>
  );
}

export default About;
