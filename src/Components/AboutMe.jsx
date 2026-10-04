import React from 'react';

const AboutMe = () => {
  // ===== YOUR REAL INFORMATION =====
  const myName = "Yin Saonim"; // ← Change this to your real name
  const myRole = "Full Stack Developer";
  const myLocation = "Kampong Speu, Cambodia";
  const myEmail = "saoniem7@gimail.com";
  const myPhone = "+855 712648106";
  
  // ===== YOUR REAL PROFILE PICTURE =====
  // Option 1: Use a local image (recommended)
  // import profileImage from './assets/profile.jpg';
  // Then use: src={profileImage}
  
  // Option 2: Use an image URL
  const profileImage = "https://scontent.fpnh18-3.fna.fbcdn.net/v/t39.30808-6/701480021_1340196684647352_6397376122321634686_n.jpg?stp=c0.123.747.747a_dst-jpg_tt6&cstp=mx747x747&ctp=s206x206&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeH-8JWk-BedEiQF7EHUiVr3GlxpGYT9gBgaXGkZhP2AGIs63APPOSGPipsQv3zYw33ydeYO-nbKUFxM2AXBS4tI&_nc_ohc=uuBL7MbH4JgQ7kNvwE4r9s-&_nc_oc=AdqdA7rKut19ZH5trd74C03e7pIxVbSFaEl_aKQ5CaWlMpUr_yHmxE4pOJ17QsKym-8&_nc_zt=23&_nc_ht=scontent.fpnh18-3.fna&_nc_gid=pyHzRbRIBn5RDPT6_PR5bA&_nc_ss=7b2a8&oh=00_AQIBY6nZwg4Il1ice5SLOu-anLNHWoeySv-InWrwUXTUZA&oe=6A9B7298";
  
  // Option 3: Use a placeholder with your name initials
  // const profileImage = `https://ui-avatars.com/api/?name=${myName.replace(' ', '+')}&size=600&background=3b82f6&color=fff&bold=true`;

  const styles = {
    section: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },
    header: {
      textAlign: 'center',
      marginBottom: '64px'
    },
    badge: {
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
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '12px',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    titleHighlight: {
      background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      color: '#94a3b8',
      fontSize: '1.2rem',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      alignItems: 'center'
    },
    imageContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      maxWidth: '420px'
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '20px',
      border: '3px solid rgba(59, 130, 246, 0.2)',
      boxShadow: '0 20px 60px rgba(59, 130, 246, 0.15)',
      transition: 'all 0.3s ease',
      objectFit: 'cover',
      aspectRatio: '1/1'
    },
    imageBadge: {
      position: 'absolute',
      bottom: '-10px',
      right: '-10px',
      background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '12px',
      fontSize: '0.85rem',
      fontWeight: '600',
      boxShadow: '0 10px 30px rgba(37, 99, 235, 0.4)',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    name: {
      fontSize: '2.4rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '4px',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    role: {
      color: '#60a5fa',
      fontSize: '1.2rem',
      fontWeight: '500',
      marginBottom: '8px',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    description: {
      color: '#cbd5e1',
      lineHeight: '1.9',
      fontSize: '1.05rem',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      marginTop: '8px'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      borderRadius: '12px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.05)',
      transition: 'all 0.3s ease'
    },
    infoIcon: {
      fontSize: '20px',
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(59, 130, 246, 0.1)',
      borderRadius: '8px',
      flexShrink: 0
    },
    infoLabel: {
      color: '#94a3b8',
      fontSize: '0.7rem',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    infoValue: {
      color: 'white',
      fontSize: '0.9rem',
      fontWeight: '500',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      paddingTop: '20px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      marginTop: '8px'
    },
    statValue: {
      display: 'block',
      fontSize: '1.8rem',
      fontWeight: '700',
      color: 'white',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    statLabel: {
      color: '#94a3b8',
      fontSize: '0.85rem',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    socialLinks: {
      display: 'flex',
      gap: '12px',
      marginTop: '8px',
      flexWrap: 'wrap'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 20px',
      borderRadius: '10px',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.06)',
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    quote: {
      marginTop: '12px',
      padding: '16px 20px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))',
      border: '1px solid rgba(59, 130, 246, 0.1)',
      color: '#93c5fd',
      fontSize: '1rem',
      fontStyle: 'italic',
      fontFamily: 'Cambria, "Hoefler Text", "Liberation Serif", Georgia, serif'
    },
    responsive: {
      '@media (max-width: 768px)': {
        grid: {
          gridTemplateColumns: '1fr',
          gap: '32px'
        },
        imageWrapper: {
          maxWidth: '300px',
          margin: '0 auto'
        },
        title: {
          fontSize: '2rem'
        },
        name: {
          fontSize: '1.8rem'
        },
        infoGrid: {
          gridTemplateColumns: '1fr'
        },
        stats: {
          gridTemplateColumns: 'repeat(3, 1fr)'
        }
      }
    }
  };

  return (
    <section id="about" style={styles.section}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        right: '-200px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-200px',
        left: '-200px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.badge}>👤 About Me</span>
          <h2 style={styles.title}>
            Get To Know <span style={styles.titleHighlight}>Me</span>
          </h2>
          <p style={styles.subtitle}>
            Passionate developer creating digital experiences
          </p>
        </div>

        <div style={styles.grid}>
          {/* Image Section */}
          <div style={styles.imageContainer}>
            <div style={styles.imageWrapper}>
              <img
                src={profileImage}
                alt={myName}
                style={styles.image}
              />
              <div style={styles.imageBadge}>
                ⭐ 5+ Years
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div style={styles.content}>
            {/* Name */}
            <h3 style={styles.name}>
              {myName}
            </h3>
            
            {/* Role */}
            <p style={styles.role}>
              {myRole}
            </p>
            
            {/* Description */}
            <p style={styles.description}>
              I'm a passionate {myRole} with over 5 years of experience 
              building web and mobile applications. I specialize in React, Node.js, 
              and cloud technologies. I love creating elegant, user-friendly 
              solutions that make a difference.
            </p>

            {/* Info Grid - Updated Icons */}
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>📍</span>
                <div>
                  <span style={styles.infoLabel}>Location</span>
                  <p style={styles.infoValue}>{myLocation}</p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>✉️</span>
                <div>
                  <span style={styles.infoLabel}>Email</span>
                  <p style={styles.infoValue}>{myEmail}</p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>📞</span>
                <div>
                  <span style={styles.infoLabel}>Phone</span>
                  <p style={styles.infoValue}>{myPhone}</p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>🎓</span>
                <div>
                  <span style={styles.infoLabel}>Education</span>
                  <p style={styles.infoValue}>B.S. Computer Science</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div style={styles.quote}>
              💭 "Code is like poetry - it should be clean, elegant, and meaningful."
            </div>

            {/* Stats - Updated Icons */}
            <div style={styles.stats}>
              <div>
                <span style={styles.statValue}>5+</span>
                <span style={styles.statLabel}>⏳ Years Experience</span>
              </div>
              <div>
                <span style={styles.statValue}>50+</span>
                <span style={styles.statLabel}>📁 Projects</span>
              </div>
              <div>
                <span style={styles.statValue}>98%</span>
                <span style={styles.statLabel}>😊 Satisfaction</span>
              </div>
            </div>

            {/* Social Links - Updated Icons */}
            <div style={styles.socialLinks}>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 119, 181, 0.15)';
                  e.target.style.borderColor = 'rgba(0, 119, 181, 0.3)';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.04)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.target.style.color = '#94a3b8';
                }}
              >
                🔗 LinkedIn
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(36, 41, 46, 0.15)';
                  e.target.style.borderColor = 'rgba(36, 41, 46, 0.3)';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.04)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.target.style.color = '#94a3b8';
                }}
              >
                🐙 GitHub
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(29, 161, 242, 0.15)';
                  e.target.style.borderColor = 'rgba(29, 161, 242, 0.3)';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.04)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.target.style.color = '#94a3b8';
                }}
              >
                🐦 Twitter
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(234, 67, 53, 0.15)';
                  e.target.style.borderColor = 'rgba(234, 67, 53, 0.3)';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.04)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.target.style.color = '#94a3b8';
                }}
              >
                📧 Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;