import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" style={{
      padding: '80px 20px',
      background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-300px',
        right: '-300px',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.05), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-300px',
        left: '-300px',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.05), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 20px',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            color: '#93c5fd',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '16px',
            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
          }}>
            📧 Contact
          </span>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '12px',
            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
          }}>
            Get In <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Touch</span>
          </h2>
          <p style={{
            color: '#94a3b8',
            fontSize: '1.2rem',
            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
          }}>
            Have a question or want to work together? Let's talk!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Profile Card */}
            <div style={{
              padding: '28px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.06)';
              e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.borderColor = 'rgba(255,255,255,0.05)';
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                margin: '0 auto 16px',
                overflow: 'hidden',
                border: '3px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)'
              }}>
                <img 
                  src="https://scontent.fpnh18-2.fna.fbcdn.net/v/t39.30808-1/777824796_1420160499984303_4602433710650949946_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s200x200&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFjjrL_yYCcXeqKqGYfOd-ZXm-qu3VzwXleb6q7dXPBeRfrgdM1-8SdHJRgTkGdwIdKbtXQfb4GpZLfb8wwf_Q7&_nc_ohc=HY8ukaVzFEwQ7kNvwGiIw3W&_nc_oc=AdrSL7TAzmUhX-Zh5Dk4Re2oLNsj91jmyoGyS39e4Ezc0jF6v53d5iaGNkRGQ51mISE&_nc_zt=24&_nc_ht=scontent.fpnh18-2.fna&_nc_gid=POkMFXTaBFpUGjjRF1skuQ&_nc_ss=7b2a8&oh=00_AQJHUHQ50axRKGRxnl41M_uBqLi6-rmTzVhRDkCn1-suBg&oe=6A9B9C7C" 
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h3 style={{
                color: 'white',
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '4px',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}>
                Yin Saonim
              </h3>
              <p style={{
                color: '#60a5fa',
                fontSize: '0.95rem',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}>
                Full Stack Developer
              </p>
            </div>

            <div style={{
              padding: '28px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.06)';
              e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.borderColor = 'rgba(255,255,255,0.05)';
            }}>
              <h3 style={{
                color: 'white',
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '16px',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}>
                Contact Information
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.03)';
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    flexShrink: 0
                  }}>
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                      alt="Email"
                      style={{
                        width: '20px',
                        height: '20px',
                        filter: 'brightness(0.9)'
                      }}
                    />
                  </div>
                  <div>
                    <div style={{
                      color: '#64748b',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontWeight: '500'
                    }}>
                      Email
                    </div>
                    <a href="mailto:saoniem7@gimail.com" style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#60a5fa';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'white';
                    }}>
                      saoniem7@gimail.com
                    </a>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.03)';
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    flexShrink: 0
                  }}>
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
                      alt="Phone"
                      style={{
                        width: '20px',
                        height: '20px',
                        filter: 'brightness(0.9)'
                      }}
                    />
                  </div>
                  <div>
                    <div style={{
                      color: '#64748b',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontWeight: '500'
                    }}>
                      Phone
                    </div>
                    <a href="tel:+85512345678" style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#60a5fa';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'white';
                    }}>
                      +855 712648106
                    </a>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.03)';
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    flexShrink: 0
                  }}>
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlemaps/googlemaps-original.svg"
                      alt="Location"
                      style={{
                        width: '20px',
                        height: '20px',
                        filter: 'brightness(0.9)'
                      }}
                    />
                  </div>
                  <div>
                    <div style={{
                      color: '#64748b',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontWeight: '500'
                    }}>
                      Location
                    </div>
                    <span style={{
                      color: 'white',
                      fontSize: '14px'
                    }}>
                      Kampong Speu, Cambodia
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links with Real Icons */}
            <div style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.06)';
              e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.borderColor = 'rgba(255,255,255,0.05)';
            }}>
              <h4 style={{
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '16px',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}>
                Connect With Me
              </h4>
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap'
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
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', 
                    label: 'Email', 
                    color: '#ea4335' 
                  }
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = `rgba(59, 130, 246, 0.1)`;
                      e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                      e.target.style.color = '#ffffff';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.03)';
                      e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.target.style.color = '#94a3b8';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.label}
                      style={{
                        width: '20px',
                        height: '20px',
                        filter: 'brightness(0.9)'
                      }}
                    />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div style={{
              padding: '20px 24px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(34,197,94,0.05), rgba(34,197,94,0.02))',
              border: '1px solid rgba(34,197,94,0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#22c55e',
                animation: 'pulse 2s infinite'
              }}></div>
              <div>
                <div style={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '500',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  Available for work
                </div>
                <div style={{
                  color: '#64748b',
                  fontSize: '12px',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  Open to new opportunities
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            padding: '32px',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.06)';
            e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.03)';
            e.target.style.borderColor = 'rgba(255,255,255,0.05)';
          }}>
            <h3 style={{
              color: 'white',
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '24px',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              Send Me a Message
            </h3>

            {isSubmitted && (
              <div style={{
                padding: '16px 20px',
                borderRadius: '12px',
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.2)',
                color: '#4ade80',
                marginBottom: '20px',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}>
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  color: '#94a3b8',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '6px',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Sao Nim"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
                    color: 'white',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    e.target.style.background = 'rgba(255,255,255,0.06)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: '#94a3b8',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '6px',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="saoniem7@gimail.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
                    color: 'white',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    e.target.style.background = 'rgba(255,255,255,0.06)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: '#94a3b8',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '6px',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can I help?"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
                    color: 'white',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    e.target.style.background = 'rgba(255,255,255,0.06)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: '#94a3b8',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '6px',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
                    color: 'white',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                    fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    e.target.style.background = 'rgba(255,255,255,0.06)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '14px 32px',
                  borderRadius: '12px',
                  border: 'none',
                  background: isSubmitting 
                    ? 'rgba(255,255,255,0.1)' 
                    : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isSubmitting ? 'none' : '0 8px 30px rgba(59,130,246,0.3)',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'scale(1)';
                  }
                }}
              >
                {isSubmitting ? (
                  <span>⏳ Sending...</span>
                ) : (
                  <span>🚀 Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default Contact;