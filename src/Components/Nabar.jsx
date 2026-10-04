import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      background: isScrolled 
        ? 'rgba(15, 23, 42, 0.98)' 
        : 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(16px)',
      borderBottom: isScrolled 
        ? '1px solid rgba(255,255,255,0.08)' 
        : '1px solid rgba(255,255,255,0.03)',
      padding: '0 24px',
      transition: 'all 0.4s ease',
      boxShadow: isScrolled 
        ? '0 20px 60px rgba(0, 0, 0, 0.3)' 
        : 'none',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: isScrolled ? '64px' : '72px',
      transition: 'height 0.4s ease'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    logoImageWrapper: {
      position: 'relative',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '2px solid rgba(96, 165, 250, 0.3)',
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)',
      transition: 'all 0.3s ease'
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    logoText: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#ffffff',
      letterSpacing: '-0.5px',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    logoTextHighlight: {
      color: '#60a5fa'
    },
    logoSub: {
      fontSize: '8px',
      fontWeight: '600',
      color: 'rgba(148, 163, 184, 0.7)',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      display: 'block',
      marginTop: '1px',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    desktopNav: {
      display: 'flex',
      gap: '4px',
      alignItems: 'center'
    },
    link: {
      color: activeSection === 'home' ? '#ffffff' : '#94a3b8',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      padding: '8px 16px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      background: activeSection === 'home' ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    linkHover: {
      color: '#ffffff',
      background: 'rgba(255, 255, 255, 0.06)'
    },
    linkActive: {
      color: '#ffffff',
      background: 'rgba(59, 130, 246, 0.15)'
    },
    linkDot: {
      display: 'inline-block',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#60a5fa',
      marginRight: '6px',
      opacity: activeSection === 'home' ? 1 : 0,
      transition: 'opacity 0.3s ease'
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    resumeButton: {
      padding: '8px 20px',
      borderRadius: '10px',
      border: 'none',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      color: 'white',
      fontSize: '13px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    resumeButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)'
    },
    socialButton: {
      padding: '8px',
      borderRadius: '10px',
      border: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(255,255,255,0.03)',
      color: '#94a3b8',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    socialButtonHover: {
      background: 'rgba(255,255,255,0.06)',
      color: '#ffffff',
      borderColor: 'rgba(255,255,255,0.12)'
    },
    mobileMenuButton: {
      display: 'none',
      padding: '10px',
      borderRadius: '10px',
      border: 'none',
      background: 'transparent',
      color: '#94a3b8',
      cursor: 'pointer',
      fontSize: '22px',
      transition: 'all 0.3s ease'
    },
    mobileMenu: {
      display: isMobileMenuOpen ? 'block' : 'none',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '16px 0',
      background: 'rgba(15, 23, 42, 0.98)',
      backdropFilter: 'blur(16px)'
    },
    mobileLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#94a3b8',
      textDecoration: 'none',
      padding: '12px 20px',
      borderRadius: '10px',
      transition: 'all 0.2s ease',
      fontSize: '15px',
      fontWeight: '500',
      cursor: 'pointer',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    mobileLinkActive: {
      background: 'rgba(59, 130, 246, 0.1)',
      color: '#ffffff'
    },
    mobileDivider: {
      height: '1px',
      background: 'rgba(255,255,255,0.05)',
      margin: '8px 16px'
    },
    mobileResumeButton: {
      display: 'block',
      margin: '12px 16px',
      padding: '12px',
      borderRadius: '10px',
      border: 'none',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      color: 'white',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '💡' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'portfolio', label: 'Portfolio', icon: '📁' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logo} onClick={() => scrollToSection('home')}>
          <div style={styles.logoImageWrapper}>
            <img 
              src="https://scontent.fpnh18-2.fna.fbcdn.net/v/t39.30808-1/777824796_1420160499984303_4602433710650949946_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s200x200&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFjjrL_yYCcXeqKqGYfOd-ZXm-qu3VzwXleb6q7dXPBeRfrgdM1-8SdHJRgTkGdwIdKbtXQfb4GpZLfb8wwf_Q7&_nc_ohc=HY8ukaVzFEwQ7kNvwGiIw3W&_nc_oc=AdrSL7TAzmUhX-Zh5Dk4Re2oLNsj91jmyoGyS39e4Ezc0jF6v53d5iaGNkRGQ51mISE&_nc_zt=24&_nc_ht=scontent.fpnh18-2.fna&_nc_gid=POkMFXTaBFpUGjjRF1skuQ&_nc_ss=7b2a8&oh=00_AQJHUHQ50axRKGRxnl41M_uBqLi6-rmTzVhRDkCn1-suBg&oe=6A9B9C7C" 
              alt="Logo"
              style={styles.logoImage}
            />
          </div>
          <div>
            <span style={styles.logoText}>
              Yin<span style={styles.logoTextHighlight}>Saonim</span>
            </span>
            <span style={styles.logoSub}>Developer</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div style={styles.desktopNav}>
          {navItems.map((item) => (
            <div
              key={item.id}
              style={{
                ...styles.link,
                ...(activeSection === item.id ? styles.linkActive : {})
              }}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.color = '#ffffff';
                  e.target.style.background = 'rgba(255,255,255,0.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.color = '#94a3b8';
                  e.target.style.background = 'transparent';
                }
              }}
            >
              <span style={{ marginRight: '4px' }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div style={styles.rightSection}>
          {/* Social Links with Real Icons */}
          <a 
            href="#" 
            style={styles.socialButton}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(0, 119, 181, 0.15)';
              e.target.style.color = '#ffffff';
              e.target.style.borderColor = 'rgba(0, 119, 181, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.color = '#94a3b8';
              e.target.style.borderColor = 'rgba(255,255,255,0.06)';
            }}
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              style={{
                width: '18px',
                height: '18px',
                filter: 'brightness(0.8)'
              }}
            />
          </a>
          <a 
            href="#" 
            style={styles.socialButton}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(36, 41, 46, 0.15)';
              e.target.style.color = '#ffffff';
              e.target.style.borderColor = 'rgba(36, 41, 46, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.color = '#94a3b8';
              e.target.style.borderColor = 'rgba(255,255,255,0.06)';
            }}
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              style={{
                width: '18px',
                height: '18px',
                filter: 'brightness(0.8)'
              }}
            />
          </a>
          <a 
            href="#" 
            style={styles.socialButton}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(29, 161, 242, 0.15)';
              e.target.style.color = '#ffffff';
              e.target.style.borderColor = 'rgba(29, 161, 242, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.color = '#94a3b8';
              e.target.style.borderColor = 'rgba(255,255,255,0.06)';
            }}
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
              alt="Twitter"
              style={{
                width: '18px',
                height: '18px',
                filter: 'brightness(0.8)'
              }}
            />
          </a>
          
          {/* Resume Button */}
          <button 
            style={styles.resumeButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)';
            }}
          >
            📄 Resume
          </button>

          {/* Mobile Menu Button */}
          <button 
            style={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        {navItems.map((item) => (
          <div
            key={item.id}
            style={{
              ...styles.mobileLink,
              ...(activeSection === item.id ? styles.mobileLinkActive : {})
            }}
            onClick={() => scrollToSection(item.id)}
            onMouseEnter={(e) => {
              if (activeSection !== item.id) {
                e.target.style.background = 'rgba(255,255,255,0.05)';
                e.target.style.color = '#ffffff';
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.id) {
                e.target.style.background = 'transparent';
                e.target.style.color = '#94a3b8';
              }
            }}
          >
            <span>{item.icon}</span>
            {item.label}
          </div>
        ))}
        <div style={styles.mobileDivider}></div>
        <div style={{ display: 'flex', gap: '12px', padding: '0 16px', marginBottom: '12px' }}>
          <a 
            href="#" 
            style={{
              ...styles.socialButton,
              flex: 1,
              justifyContent: 'center',
              padding: '10px'
            }}
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              style={{
                width: '20px',
                height: '20px',
                filter: 'brightness(0.8)'
              }}
            />
          </a>
          <a 
            href="#" 
            style={{
              ...styles.socialButton,
              flex: 1,
              justifyContent: 'center',
              padding: '10px'
            }}
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              style={{
                width: '20px',
                height: '20px',
                filter: 'brightness(0.8)'
              }}
            />
          </a>
          <a 
            href="#" 
            style={{
              ...styles.socialButton,
              flex: 1,
              justifyContent: 'center',
              padding: '10px'
            }}
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
              alt="Twitter"
              style={{
                width: '20px',
                height: '20px',
                filter: 'brightness(0.8)'
              }}
            />
          </a>
        </div>
        <button style={styles.mobileResumeButton}>
          📄 Download Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;