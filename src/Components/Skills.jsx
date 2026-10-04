import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: '📊 All Skills' },
    { id: 'frontend', label: '🎨 Frontend' },
    { id: 'backend', label: '⚙️ Backend' },
    { id: 'tools', label: '🛠️ Tools & DevOps' },
    { id: 'design', label: '✏️ Design' }
  ];

  const skills = [
    // Frontend
    {
      id: 1,
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      level: 90,
      category: 'frontend',
      color: '#61dafb',
      description: 'Building dynamic user interfaces'
    },
    {
      id: 2,
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      level: 92,
      category: 'frontend',
      color: '#f7df1e',
      description: 'ES6+, Modern JavaScript'
    },
    {
      id: 3,
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      level: 85,
      category: 'frontend',
      color: '#3178c6',
      description: 'Type-safe JavaScript'
    },
    {
      id: 4,
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      level: 95,
      category: 'frontend',
      color: '#e34f26',
      description: 'Semantic markup'
    },
    {
      id: 5,
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      level: 88,
      category: 'frontend',
      color: '#1572b6',
      description: 'Modern styling & animations'
    },
    {
      id: 6,
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      level: 85,
      category: 'frontend',
      color: '#06b6d4',
      description: 'Utility-first CSS framework'
    },
    // Backend
    {
      id: 7,
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      level: 82,
      category: 'backend',
      color: '#68a063',
      description: 'Server-side JavaScript'
    },
    {
      id: 8,
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      level: 78,
      category: 'backend',
      color: '#3776ab',
      description: 'Backend & Data processing'
    },
    {
      id: 9,
      name: 'Express.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      level: 80,
      category: 'backend',
      color: '#000000',
      description: 'Node.js framework'
    },
    {
      id: 10,
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      level: 75,
      category: 'backend',
      color: '#47a248',
      description: 'NoSQL database'
    },
    {
      id: 11,
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      level: 72,
      category: 'backend',
      color: '#4479a1',
      description: 'Relational databases'
    },
    // Tools
    {
      id: 12,
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      level: 88,
      category: 'tools',
      color: '#f05032',
      description: 'Version control'
    },
    {
      id: 13,
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      level: 70,
      category: 'tools',
      color: '#2496ed',
      description: 'Containerization'
    },
    {
      id: 14,
      name: 'AWS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      level: 68,
      category: 'tools',
      color: '#ff9900',
      description: 'Cloud services'
    },
    {
      id: 15,
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      level: 92,
      category: 'tools',
      color: '#007acc',
      description: 'Primary editor'
    },
    // Design
    {
      id: 16,
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      level: 75,
      category: 'design',
      color: '#f24e1e',
      description: 'UI/UX Design'
    },
    {
      id: 17,
      name: 'Photoshop',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',
      level: 65,
      category: 'design',
      color: '#31a8ff',
      description: 'Image editing'
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getLevelColor = (level) => {
    if (level >= 90) return '#22c55e';
    if (level >= 80) return '#3b82f6';
    if (level >= 70) return '#f59e0b';
    return '#ef4444';
  };

  const getLevelLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" style={{
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
            💡 My Skills
          </span>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '12px',
            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
          }}>
            What I <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Do</span>
          </h2>
          <p style={{
            color: '#94a3b8',
            fontSize: '1.2rem',
            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
          }}>
            Technologies and tools I work with
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '8px 24px',
                borderRadius: '50px',
                border: activeCategory === cat.id 
                  ? '2px solid #3b82f6' 
                  : '1px solid rgba(255,255,255,0.08)',
                background: activeCategory === cat.id 
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' 
                  : 'rgba(255,255,255,0.03)',
                color: activeCategory === cat.id ? '#ffffff' : '#94a3b8',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) {
                  e.target.style.background = 'rgba(255,255,255,0.06)';
                  e.target.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) {
                  e.target.style.background = 'rgba(255,255,255,0.03)';
                  e.target.style.color = '#94a3b8';
                }
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.3s ease',
                cursor: 'default'
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
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  padding: '6px',
                  flexShrink: 0
                }}>
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      filter: 'brightness(0.9)'
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                  }}>
                    {skill.name}
                  </h3>
                  <span style={{
                    color: skill.color,
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {skill.description}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{
                width: '100%',
                height: '8px',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '8px'
              }}>
                <div style={{
                  width: `${skill.level}%`,
                  height: '100%',
                  background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
                  borderRadius: '4px',
                  transition: 'width 1s ease'
                }}></div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  color: '#94a3b8',
                  fontSize: '0.8rem',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  {getLevelLabel(skill.level)}
                </span>
                <span style={{
                  color: 'white',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
                }}>
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredSkills.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#94a3b8',
            fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
          }}>
            No skills found in this category
          </div>
        )}

        {/* Skill Stats */}
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
              {skills.length}
            </span>
            <span style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              📚 Total Skills
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
              {skills.filter(s => s.level >= 80).length}
            </span>
            <span style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              ⭐ Advanced Skills
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
              {new Set(skills.map(s => s.category)).size}
            </span>
            <span style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              🏷️ Categories
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
              {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
            </span>
            <span style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
            }}>
              📈 Average Level
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;