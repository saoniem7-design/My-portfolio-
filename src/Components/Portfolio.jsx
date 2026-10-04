import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'ecommerce', label: 'E-Commerce' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      description: 'Full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      color: '#3b82f6',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&h=400&fit=crop',
      description: 'Collaborative task management application with real-time updates, team workspaces, and progress tracking.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      github: '#',
      color: '#8b5cf6',
      featured: false
    },
    {
      id: 3,
      title: 'Food Delivery Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'Mobile app for food delivery with GPS tracking, real-time order updates, and seamless payment processing.',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#',
      color: '#ec4899',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Modern, responsive portfolio website design with dark theme, smooth animations, and interactive elements.',
      technologies: ['Figma', 'Adobe XD', 'Photoshop'],
      link: '#',
      github: '#',
      color: '#f59e0b',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop',
      description: 'Health and fitness tracking app with workout plans, progress monitoring, and social features.',
      technologies: ['React Native', 'Firebase', 'Chart.js'],
      link: '#',
      github: '#',
      color: '#22c55e',
      featured: false
    },
    {
      id: 6,
      title: 'Online Learning Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      description: 'E-learning platform with video courses, quizzes, progress tracking, and instructor dashboards.',
      technologies: ['React', 'Express.js', 'PostgreSQL'],
      link: '#',
      github: '#',
      color: '#06b6d4',
      featured: true
    },
    {
      id: 7,
      title: 'E-Commerce UI Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Modern e-commerce UI design with focus on user experience, conversion optimization, and brand identity.',
      technologies: ['Figma', 'Sketch', 'InVision'],
      link: '#',
      github: '#',
      color: '#f472b6',
      featured: false
    },
    {
      id: 8,
      title: 'Real Estate Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      description: 'Real estate listing platform with property search, virtual tours, and agent management system.',
      technologies: ['React', 'Node.js', 'Elasticsearch'],
      link: '#',
      github: '#',
      color: '#8b5cf6',
      featured: false
    },
    {
      id: 9,
      title: 'Social Media Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1432889821006-c08f46d9adf4?w=600&h=400&fit=crop',
      description: 'Social media analytics dashboard with real-time data, customizable widgets, and reporting features.',
      technologies: ['React', 'D3.js', 'Firebase'],
      link: '#',
      github: '#',
      color: '#3b82f6',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="portfolio" style={{
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
              📁 Portfolio
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
              }}>Work</span>
            </h2>
            <p style={{
              color: '#94a3b8',
              fontSize: '1.2rem',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              Some of my recent projects
            </p>
          </div>

          {/* Filters */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '40px'
          }}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  padding: '8px 24px',
                  borderRadius: '50px',
                  border: activeFilter === filter.id 
                    ? '2px solid #3b82f6' 
                    : '1px solid rgba(255,255,255,0.08)',
                  background: activeFilter === filter.id 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' 
                    : 'rgba(255,255,255,0.03)',
                  color: activeFilter === filter.id ? '#ffffff' : '#94a3b8',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter.id) {
                    e.target.style.background = 'rgba(255,255,255,0.06)';
                    e.target.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter.id) {
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                    e.target.style.color = '#94a3b8';
                  }
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
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
                onClick={() => openModal(project)}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '220px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  {project.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '4px 14px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #f59e0b, #f97316)',
                      color: 'white',
                      fontSize: '11px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Featured
                    </div>
                  )}
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    padding: '20px',
                    background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)'
                  }}></div>
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <span style={{
                      color: project.color,
                      fontSize: '12px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {project.category}
                    </span>
                    <span style={{
                      color: '#64748b',
                      fontSize: '12px'
                    }}>
                      {project.technologies.length} techs
                    </span>
                  </div>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '8px',
                    fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: '#94a3b8',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    marginBottom: '12px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px'
                  }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} style={{
                        padding: '2px 12px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,0.05)',
                        color: '#94a3b8',
                        fontSize: '11px',
                        border: '1px solid rgba(255,255,255,0.05)'
                      }}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span style={{
                        padding: '2px 12px',
                        borderRadius: '12px',
                        color: '#64748b',
                        fontSize: '11px'
                      }}>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {filteredProjects.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px',
              color: '#94a3b8',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              No projects found in this category
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(8px)',
          animation: 'fadeIn 0.3s ease'
        }} onClick={closeModal}>
          <div style={{
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            padding: '32px',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '8px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                color: '#94a3b8',
                cursor: 'pointer',
                fontSize: '18px',
                transition: 'all 0.3s ease',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.05)';
                e.target.style.color = '#94a3b8';
              }}
            >
              ✕
            </button>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px'
            }}>
              {/* Image */}
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />
              </div>

              {/* Details */}
              <div>
                <span style={{
                  color: selectedProject.color,
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  {selectedProject.category}
                </span>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '12px',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  {selectedProject.title}
                </h3>
                <p style={{
                  color: '#cbd5e1',
                  lineHeight: '1.8',
                  marginBottom: '20px',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  {selectedProject.description}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                  }}>
                    Technologies Used
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} style={{
                        padding: '4px 16px',
                        borderRadius: '20px',
                        background: 'rgba(59, 130, 246, 0.15)',
                        color: '#93c5fd',
                        fontSize: '13px',
                        border: '1px solid rgba(59, 130, 246, 0.2)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '12px'
                }}>
                  <a
                    href={selectedProject.link}
                    style={{
                      padding: '10px 28px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.02)';
                      e.target.style.boxShadow = '0 8px 30px rgba(59,130,246,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    🔗 View Live
                  </a>
                  <a
                    href={selectedProject.github}
                    style={{
                      padding: '10px 28px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.05)',
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.05)';
                    }}
                  >
                    🐙 GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Portfolio;