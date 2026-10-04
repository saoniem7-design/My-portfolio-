import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const experiences = {
    work: [
      {
        id: 1,
        company: 'Tech Solutions Inc.',
        position: 'Senior Full Stack Developer',
        location: 'Phnom Penh, Cambodia',
        period: '2022 - Present',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        description: [
          'Leading a team of 8 developers building enterprise web applications',
          'Architected microservices using Node.js and React',
          'Improved application performance by 40% through optimization',
          'Implemented CI/CD pipeline using Docker and GitHub Actions'
        ],
        technologies: ['React', 'Node.js', 'TypeScript', 'Docker', 'AWS'],
        color: '#3b82f6'
      },
      {
        id: 2,
        company: 'Digital Innovations Co.',
        position: 'Full Stack Developer',
        location: 'Siem Reap, Cambodia',
        period: '2020 - 2022',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        description: [
          'Developed 15+ web applications for clients across Southeast Asia',
          'Built RESTful APIs serving 100k+ daily requests',
          'Mentored junior developers and conducted code reviews',
          'Reduced load time by 60% using lazy loading and code splitting'
        ],
        technologies: ['React', 'Express.js', 'MongoDB', 'Git', 'Jest'],
        color: '#8b5cf6'
      },
      {
        id: 3,
        company: 'Startup Hub Cambodia',
        position: 'Junior Developer',
        location: 'Phnom Penh, Cambodia',
        period: '2019 - 2020',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        description: [
          'Built responsive web applications using React and Tailwind CSS',
          'Collaborated with designers to implement UI/UX designs',
          'Wrote clean, maintainable code with comprehensive documentation',
          'Participated in daily stand-ups and sprint planning'
        ],
        technologies: ['React', 'CSS3', 'JavaScript', 'Figma', 'Git'],
        color: '#f59e0b'
      }
    ],
    education: [
      {
        id: 1,
        institution: 'Royal University of Phnom Penh',
        degree: 'Bachelor of Science in Computer Science',
        location: 'Phnom Penh, Cambodia',
        period: '2016 - 2020',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
        description: [
          'Graduated with First Class Honors (GPA: 3.8/4.0)',
          'Thesis: "Machine Learning for Predictive Analytics"',
          'Dean\'s List for all semesters',
          'President of the Computer Science Club'
        ],
        color: '#22c55e'
      },
      {
        id: 2,
        institution: 'Coding Bootcamp Cambodia',
        degree: 'Full Stack Web Development Certificate',
        location: 'Phnom Penh, Cambodia',
        period: '2019',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        description: [
          'Intensive 12-week program focused on MERN stack',
          'Built 5 full-stack projects from scratch',
          'Learned agile methodologies and pair programming',
          'Presented final project to industry professionals'
        ],
        color: '#ec4899'
      }
    ],
    certifications: [
      {
        id: 1,
        name: 'AWS Certified Developer - Associate',
        issuer: 'Amazon Web Services',
        date: '2023',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
        color: '#ff9900'
      },
      {
        id: 2,
        name: 'Meta Frontend Developer Certificate',
        issuer: 'Coursera',
        date: '2022',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meta/meta-original.svg',
        color: '#1877f2'
      },
      {
        id: 3,
        name: 'Google IT Support Professional',
        issuer: 'Google',
        date: '2021',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
        color: '#4285f4'
      },
      {
        id: 4,
        name: 'Scrum Master Certified (SMC)',
        issuer: 'Scrum Alliance',
        date: '2022',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        color: '#f5a623'
      }
    ]
  };

  const getTotalExperience = () => {
    const now = new Date();
    const start = new Date(2019, 0, 1);
    const years = now.getFullYear() - start.getFullYear();
    return years;
  };

  return (
    <section id="experience" style={{
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
            💼 Experience
          </span>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '12px',
            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
          }}>
            My <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Journey</span>
          </h2>
          <p style={{
            color: '#94a3b8',
            fontSize: '1.2rem',
            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
          }}>
            {getTotalExperience()}+ years of professional experience
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          {[
            { id: 'work', label: '💼 Work Experience' },
            { id: 'education', label: '🎓 Education' },
            { id: 'certifications', label: '📜 Certifications' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 28px',
                borderRadius: '50px',
                border: activeTab === tab.id 
                  ? '2px solid #3b82f6' 
                  : '1px solid rgba(255,255,255,0.08)',
                background: activeTab === tab.id 
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' 
                  : 'rgba(255,255,255,0.03)',
                color: activeTab === tab.id ? '#ffffff' : '#94a3b8',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.target.style.background = 'rgba(255,255,255,0.06)';
                  e.target.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.target.style.background = 'rgba(255,255,255,0.03)';
                  e.target.style.color = '#94a3b8';
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {/* Work Experience */}
          {activeTab === 'work' && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {experiences.work.map((exp, index) => (
                <div
                  key={exp.id}
                  style={{
                    padding: '28px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.06)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.target.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {/* Timeline line */}
                  {index < experiences.work.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      left: '28px',
                      top: '80px',
                      bottom: '-24px',
                      width: '2px',
                      background: `linear-gradient(to bottom, ${exp.color}, ${experiences.work[index + 1].color})`,
                      opacity: 0.3
                    }}></div>
                  )}

                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${exp.color}33, ${exp.color}11)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${exp.color}33`,
                      flexShrink: 0,
                      padding: '8px'
                    }}>
                      <img 
                        src={exp.icon} 
                        alt={exp.company}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          filter: 'brightness(0.9)'
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '4px'
                      }}>
                        <div>
                          <h3 style={{
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                          }}>
                            {exp.position}
                          </h3>
                          <span style={{
                            color: exp.color,
                            fontSize: '0.95rem',
                            fontWeight: '500'
                          }}>
                            {exp.company}
                          </span>
                        </div>
                        <span style={{
                          color: '#94a3b8',
                          fontSize: '0.85rem',
                          fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                        }}>
                          {exp.period}
                        </span>
                      </div>
                      <span style={{
                        color: '#64748b',
                        fontSize: '0.85rem',
                        display: 'block',
                        marginBottom: '12px'
                      }}>
                        📍 {exp.location}
                      </span>
                      <div style={{
                        margin: '0 0 16px 0'
                      }}>
                        {exp.description.map((item, idx) => (
                          <div key={idx} style={{
                            color: '#cbd5e1',
                            fontSize: '0.95rem',
                            lineHeight: '1.8',
                            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                          }}>
                            {item}
                          </div>
                        ))}
                      </div>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px'
                      }}>
                        {exp.technologies.map((tech) => (
                          <span key={tech} style={{
                            padding: '4px 14px',
                            borderRadius: '20px',
                            background: `${exp.color}22`,
                            color: exp.color,
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            border: `1px solid ${exp.color}33`
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {experiences.education.map((edu) => (
                <div
                  key={edu.id}
                  style={{
                    padding: '28px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.06)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.target.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${edu.color}33, ${edu.color}11)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${edu.color}33`,
                      flexShrink: 0,
                      padding: '8px'
                    }}>
                      <img 
                        src={edu.icon} 
                        alt={edu.institution}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          filter: 'brightness(0.9)'
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '4px'
                      }}>
                        <div>
                          <h3 style={{
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                          }}>
                            {edu.degree}
                          </h3>
                          <span style={{
                            color: edu.color,
                            fontSize: '0.95rem',
                            fontWeight: '500'
                          }}>
                            {edu.institution}
                          </span>
                        </div>
                        <span style={{
                          color: '#94a3b8',
                          fontSize: '0.85rem',
                          fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                        }}>
                          {edu.period}
                        </span>
                      </div>
                      <span style={{
                        color: '#64748b',
                        fontSize: '0.85rem',
                        display: 'block',
                        marginBottom: '12px'
                      }}>
                        📍 {edu.location}
                      </span>
                      <div style={{
                        margin: 0
                      }}>
                        {edu.description.map((item, idx) => (
                          <div key={idx} style={{
                            color: '#cbd5e1',
                            fontSize: '0.95rem',
                            lineHeight: '1.8',
                            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                          }}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {activeTab === 'certifications' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {experiences.certifications.map((cert) => (
                <div
                  key={cert.id}
                  style={{
                    padding: '24px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.06)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.target.style.transform = 'translateY(-4px)';
                    e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${cert.color}33, ${cert.color}11)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    border: `2px solid ${cert.color}33`,
                    padding: '12px'
                  }}>
                    <img 
                      src={cert.icon} 
                      alt={cert.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: 'brightness(0.9)'
                      }}
                    />
                  </div>
                  <h4 style={{
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '4px',
                    fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                  }}>
                    {cert.name}
                  </h4>
                  <p style={{
                    color: cert.color,
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                  }}>
                    {cert.issuer}
                  </p>
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.8rem',
                    fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                  }}>
                    📅 {cert.date}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Experience Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginTop: '48px',
          padding: '32px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{
              display: 'block',
              fontSize: '2rem',
              fontWeight: '700',
              color: 'white',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              {getTotalExperience()}+
            </span>
            <span style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              ⏳ Years Experience
            </span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{
              display: 'block',
              fontSize: '2rem',
              fontWeight: '700',
              color: '#22c55e',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              {experiences.work.length}
            </span>
            <span style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              💼 Companies
            </span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{
              display: 'block',
              fontSize: '2rem',
              fontWeight: '700',
              color: '#f59e0b',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              {experiences.certifications.length}
            </span>
            <span style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              📜 Certifications
            </span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{
              display: 'block',
              fontSize: '2rem',
              fontWeight: '700',
              color: '#3b82f6',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              {experiences.work.reduce((acc, exp) => acc + exp.description.length, 0)}
            </span>
            <span style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              🎯 Achievements
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;