import React from "react";

// Import components
import Navbar from "./Navbar";

// Import styles
import "../styles/header.css";

/**
 * Header component
 *
 * @returns {JSX.Element}
 * @component
 */
const Header: React.FC = () => {
  return (
    <header
      className="site-header"
      role="banner"
      itemScope
      itemType="http://schema.org/WPHeader"
    >
      <h1
        className="site-title"
        itemScope
        itemType="http://schema.org/Organization"
      >
        10up Blog
      </h1>

      <Navbar />
    </header>
  );
};

export default Header;
