import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const servicesItems = [
    { name: "Digital Strategy & Design", icon: "🎯" },
    { name: "Software Product Engineering", icon: "⚙️" },
    { name: "Intelligent Automation", icon: "🤖" },
    { name: "CX Transformation", icon: "💡" },
    { name: "Data & Analytics", icon: "📊" },
    { name: "Enterprise Integration", icon: "🔗" },
    { name: "Application Development and Management", icon: "💻" },
    { name: "Enterprise IT Security", icon: "🔒" },
    { name: "Cloud Infrastructure", icon: "☁️" },
    { name: "Open Source Hub", icon: "📦" }
  ];

  const industriesItems = [
    { name: "Banking & Financial Services", icon: "🏦" },
    { name: "Insurance", icon: "🛡️" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Life Sciences", icon: "🧬" },
    { name: "Consumer Tech", icon: "📱" },
    { name: "Industrial", icon: "🏭" },
    { name: "Software & Hi-Tech", icon: "💾" },
    { name: "Telecom & Media", icon: "📡" }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img
            src={new URL("../../assets/logos/io2-logo-light.png", import.meta.url).href}
            alt="Infoxygen"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#home" className="nav-link">Home</a>
          
          {/* Services Dropdown */}
          <div 
            className="dropdown-container"
            onMouseEnter={() => toggleDropdown('services')}
            onMouseLeave={closeDropdown}
          >
            <a href="#services" className="nav-link dropdown-trigger">
              Services
              <span className="dropdown-arrow">▼</span>
            </a>
            {activeDropdown === 'services' && (
              <div className="dropdown-menu">
                {servicesItems.map((item, index) => (
                  <a key={index} href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-item">
                    <span className="dropdown-icon">{item.icon}</span>
                    <span className="dropdown-text">{item.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div 
            className="dropdown-container"
            onMouseEnter={() => toggleDropdown('industries')}
            onMouseLeave={closeDropdown}
          >
            <a href="#industries" className="nav-link dropdown-trigger">
              Industries
              <span className="dropdown-arrow">▼</span>
            </a>
            {activeDropdown === 'industries' && (
              <div className="dropdown-menu">
                {industriesItems.map((item, index) => (
                  <a key={index} href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-item">
                    <span className="dropdown-icon">{item.icon}</span>
                    <span className="dropdown-text">{item.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#about" className="nav-link">About</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#careers" className="nav-link">Careers</a>
        </nav>

        {/* Contact Button */}
        <div className="contact-section">
          <button className="contact-button">
            LET'S CONNECT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <a href="#home" className="mobile-nav-link">Home</a>
          
          {/* Mobile Services */}
          <div className="mobile-dropdown">
            <a href="#services" className="mobile-nav-link mobile-dropdown-trigger">
              Services
              <span className="mobile-dropdown-arrow">▼</span>
            </a>
            <div className="mobile-dropdown-menu">
              {servicesItems.map((item, index) => (
                <a key={index} href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="mobile-dropdown-item">
                  <span className="dropdown-icon">{item.icon}</span>
                  <span className="dropdown-text">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Industries */}
          <div className="mobile-dropdown">
            <a href="#industries" className="mobile-nav-link mobile-dropdown-trigger">
              Industries
              <span className="mobile-dropdown-arrow">▼</span>
            </a>
            <div className="mobile-dropdown-menu">
              {industriesItems.map((item, index) => (
                <a key={index} href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="mobile-dropdown-item">
                  <span className="dropdown-icon">{item.icon}</span>
                  <span className="dropdown-text">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <a href="#about" className="mobile-nav-link">About</a>
          <a href="#blog" className="mobile-nav-link">Blog</a>
          <a href="#careers" className="mobile-nav-link">Careers</a>
          <button className="mobile-contact-button">
            LET'S CONNECT
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
