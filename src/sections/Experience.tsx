import { Container, Typography, Box, Grid, Chip } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';

// Updated experiences with Yoshua Purba's actual work history
// Added 'technologies' field for better HR scanning
const experiences = [
  {
    company: "Bank Raya",
    period: "Aug 2024 - Present",
    role: "Frontend Developer",
    tasks: [
      "Expanding features in current mobile applications using Flutter for cross-platform performance",
      "Developing and maintaining webviews using Next.js for seamless integration",
      "Collaborating with cross-functional teams to deliver high-quality banking features",
    ],
    technologies: ["Flutter", "Dart", "Next.js", "TypeScript", "CI/CD"],
    highlighted: true
  },
  {
    company: "PT. PLN Icon Plus",
    period: "Feb 2023 - Aug 2024",
    role: "Flutter Developer",
    tasks: [
      "Implemented new critical features for PLN Click, Barista PLN, and COLOK.IN apps",
      "Responsible for bug fixing, performance optimization, and UI/UX enhancements",
      "Maintained code quality and adhered to best practices in mobile development"
    ],
    technologies: ["Flutter", "Dart", "State Management", "REST API"],
    highlighted: false
  },
  {
    company: "Alterra Academy",
    period: "Dec 2021 - Jun 2023",
    role: "Flutter Mentor (Freelance)",
    tasks: [
      "Created comprehensive learning materials for mobile application development",
      "Produced high-quality video presentations and tutorials",
      "Conducted live mentoring sessions, guiding students through practical implementation"
    ],
    technologies: ["Mentoring", "Flutter", "Curriculum Design", "Public Speaking"],
    highlighted: false
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            marginBottom: '60px',
            background: 'linear-gradient(to right, #fff, #cbd5e1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <WorkIcon sx={{ fontSize: 'inherit', color: '#a78bfa', opacity: 0.8 }} />
          Work Experience<span style={{ color: '#8b5cf6' }}>.</span>
        </Typography>

        <Box sx={{ position: 'relative' }}>
          {/* Vertical line for desktop */}
          <Box 
            sx={{ 
              position: 'absolute', 
              left: { md: '300px' }, 
              top: '20px', 
              bottom: '20px', 
              width: '2px', 
              background: 'linear-gradient(to bottom, #8b5cf6, rgba(139, 92, 246, 0.1))',
              display: { xs: 'none', md: 'block' }
            }} 
          />

          {experiences.map((exp, index) => (
            <Grid container spacing={4} key={index} sx={{ marginBottom: '40px', position: 'relative' }}>
              
              {/* Timeline Dot (Desktop) */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { md: '294px' },
                  top: '32px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: exp.highlighted ? '#8b5cf6' : '#1e293b',
                  border: '2px solid #8b5cf6',
                  zIndex: 2,
                  display: { xs: 'none', md: 'block' },
                  boxShadow: exp.highlighted ? '0 0 15px rgba(139, 92, 246, 0.6)' : 'none'
                }}
              />

              {/* Left Side: Period & Company */}
              <Grid item xs={12} md={3} sx={{ textAlign: { md: 'right' }, paddingRight: { md: '40px' } }}>
                <Typography
                  sx={{
                    color: exp.highlighted ? '#a78bfa' : '#94a3b8',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                    marginBottom: '4px'
                  }}
                >
                  {exp.company}
                </Typography>
                <Typography
                  sx={{
                    color: '#64748b',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    fontFamily: 'Outfit, sans-serif'
                  }}
                >
                  {exp.period}
                </Typography>
              </Grid>

              {/* Right Side: Role & Details */}
              <Grid item xs={12} md={9}>
                <Box className="experience-item" sx={{ borderLeft: exp.highlighted ? '4px solid #8b5cf6' : '1px solid rgba(255,255,255,0.05)' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '16px'
                    }}
                  >
                    {exp.role}
                  </Typography>

                  <ul className="experience-tasks">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: '20px' }}>
                    {exp.technologies.map((tech, i) => (
                      <Chip 
                        key={i} 
                        label={tech} 
                        className="tech-chip" 
                        size="small" 
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </section>
  );
}
