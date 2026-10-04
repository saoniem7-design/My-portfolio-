import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    }}>
      {/* Decorative gradient line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, #ec4899, transparent)',
        opacity: 0.5
      }}></div>

      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        bottom: '-200px',
        right: '-200px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.05), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '-200px',
        left: '-200px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.05), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px 30px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)',
                flexShrink: 0
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop&crop=center"
                  alt="Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div>
                <span style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  Yin Saonim
                </span>
                <span style={{
                  display: 'block',
                  fontSize: '10px',
                  color: 'rgba(148, 163, 184, 0.7)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  Full Stack Developer
                </span>
              </div>
            </div>
            <p style={{
              color: '#94a3b8',
              fontSize: '0.95rem',
              lineHeight: '1.8',
              marginBottom: '16px',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              Building modern web applications with passion and precision. 
              Specializing in React, Node.js, and cloud technologies.
            </p>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              {[
                { 
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
                  label: 'LinkedIn',
                  color: '#0a66c2'
                },
                { 
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
                  label: 'GitHub',
                  color: '#333'
                },
                { 
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg',
                  label: 'Twitter',
                  color: '#1da1f2'
                },
                { 
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/youtube/youtube-original.svg',
                  label: 'YouTube',
                  color: '#ff0000'
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(59, 130, 246, 0.15)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(59,130,246,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <img 
                    src={social.icon} 
                    alt={social.label}
                    style={{
                      width: '20px',
                      height: '20px',
                      filter: 'brightness(0.8)'
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '16px',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#60a5fa';
                      e.target.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#94a3b8';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{
                      display: 'inline-block',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: '#3b82f6',
                      opacity: 0
                    }}>•</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '16px',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'Cloud Solutions',
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#a78bfa';
                      e.target.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#94a3b8';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{
                      display: 'inline-block',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: '#8b5cf6',
                      opacity: 0
                    }}>•</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '16px',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              Contact Info
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#94a3b8',
                fontSize: '14px',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Email"
                  style={{
                    width: '20px',
                    height: '20px',
                    filter: 'brightness(0.7)'
                  }}
                />
                <a href="mailto:sokdara@example.com" style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#94a3b8';
                }}>
                  sokdara@example.com
                </a>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#94a3b8',
                fontSize: '14px',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
                  alt="Phone"
                  style={{
                    width: '20px',
                    height: '20px',
                    filter: 'brightness(0.7)'
                  }}
                />
                <a href="tel:+85512345678" style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#94a3b8';
                }}>
                  +855 12 345 678
                </a>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#94a3b8',
                fontSize: '14px',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlemaps/googlemaps-original.svg"
                  alt="Location"
                  style={{
                    width: '20px',
                    height: '20px',
                    filter: 'brightness(0.7)'
                  }}
                />
                <span>Phnom Penh, Cambodia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          sm: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <p style={{
              color: '#64748b',
              fontSize: '14px',
              textAlign: 'center',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              © {currentYear} <span style={{ color: '#94a3b8' }}>Yin Saonim</span>. Built with ❤️ using React
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#64748b',
                fontSize: '12px',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}>
                🔒 SSL Secure
              </span>
              <span style={{
                color: '#64748b',
                fontSize: '12px',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}>
                ⭐ 4.9/5 Rating
              </span>
              <span style={{
                color: '#64748b',
                fontSize: '12px',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}>
                🚀 50+ Projects
              </span>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center'
          }}>
            <a
              href="#"
              style={{
                color: '#64748b',
                textDecoration: 'none',
                fontSize: '12px',
                transition: 'color 0.3s ease',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#64748b';
              }}
            >
              Privacy Policy
            </a>
            <span style={{
              color: '#334155',
              fontSize: '12px'
            }}>
              •
            </span>
            <a
              href="#"
              style={{
                color: '#64748b',
                textDecoration: 'none',
                fontSize: '12px',
                transition: 'color 0.3s ease',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#64748b';
              }}
            >
              Terms of Service
            </a>
            <span style={{
              color: '#334155',
              fontSize: '12px'
            }}>
              •
            </span>
            <a
              href="#"
              style={{
                color: '#64748b',
                textDecoration: 'none',
                fontSize: '12px',
                transition: 'color 0.3s ease',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#64748b';
              }}
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '48px',
          height: '48px',
          borderRadius: '14px',
          border: 'none',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          color: 'white',
          cursor: 'pointer',
          fontSize: '20px',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 30px rgba(59,130,246,0.3)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 15px 40px rgba(59,130,246,0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 10px 30px rgba(59,130,246,0.3)';
        }}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;