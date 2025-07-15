import { Box, Container, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Certificate.module.css";
import useResponsive from "../hooks/useResponsive";
import LaunchIcon from "@mui/icons-material/Launch";

const certificateData = [
  {
    name: "ID CAMP 2021",
    period: "May - November 2021",
    description: "Memulai Pemrograman dengan Dart",
    additionalInfo: [
      "Belajar Membuat Aplikasi Flutter Untuk Pemula",
      "Belajar Fundamental Aplikasi Flutter",
      "Belajar Prinsip Pemrograman SOLID",
      "Menjadi Flutter Developer Expert"
    ],
    path: ["/certificate_img/dart.jpg"],
    link: "https://www.dicoding.com/certificates/QLZ9854VDX5D",
  },
  {
    name: "JavaScript Fundamentals",
    period: "2023",
    description: "Belajar Dasar Pemrograman JavaScript",
    additionalInfo: [],
    path: ["/certificate_img/javascript/1.jpg"],
    link: "https://www.dicoding.com/certificates/1RXYM66KMXVM",
  },
  {
    name: "Backend Development",
    period: "2023",
    description: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    additionalInfo: [],
    path: ["/certificate_img/backend/1.jpg"],
    link: "https://www.dicoding.com/certificates/L4PQ4Y5GQXO1",
  },
  {
    name: "AWS Cloud Practitioner",
    period: "2023",
    description: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    additionalInfo: [],
    path: ["/certificate_img/aws/1.jpg"],
    link: "https://www.dicoding.com/certificates/0LZ01MGNKP65",
  },
  {
    name: "MSIB Batch 4 Mentor",
    period: "2022",
    description: "Mentor Of MSIB Batch 4",
    additionalInfo: [],
    path: ["/certificate_img/mentor.jpeg"],
    link: "null",
  },
  {
    name: "Software Developer Career",
    period: "2022",
    description: "Meniti Karier sebagai Software Developer",
    additionalInfo: [],
    path: ["/certificate_img/sd.jpg"],
    link: "https://www.dicoding.com/certificates/KEXL4DQGWXG2",
  }
];

export default function Certificate() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  const { isMobile, isTablet } = useResponsive();

  const arrowStyles: React.CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 50,
    height: 50,
    cursor: "pointer",
    backgroundColor: "rgba(102, 126, 234, 0.9)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  };

  return (
    <section id="certificates" className="section-container">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            fontWeight: 700,
            marginBottom: '48px',
            color: '#333'
          }}
        >
          Certificate<span style={{ color: '#667eea' }}>.</span>
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Carousel
            selectedItem={currentIndex}
            onChange={handleChange}
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            infiniteLoop={false}
            centerMode={true}
            centerSlidePercentage={isMobile ? 100 : isTablet ? 50 : 100 / 2}
            swipeable={true}
            emulateTouch={true}
            className={styles.carousel}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, left: 15 }}
                >
                  {"‹"}
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, right: 15 }}
                >
                  {"›"}
                </button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const indicatorStyle = {
                marginLeft: 8,
                cursor: "pointer",
                display: "inline-block",
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: isSelected ? "#667eea" : "#ccc",
                transition: "all 0.3s ease",
              };
              return (
                <span
                  style={indicatorStyle}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                  key={index}
                />
              );
            }}
          >
            {certificateData.map((certificate, index) => (
              <div key={index} style={{ padding: "0 16px" }}>
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    },
                    border: '1px solid rgba(102, 126, 234, 0.1)',
                    position: 'relative'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={certificate.path[0]}
                    alt={certificate.name}
                    sx={{
                      objectFit: 'cover',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <CardContent sx={{ padding: '24px' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#333',
                        marginBottom: '8px',
                        fontSize: '1.1rem'
                      }}
                    >
                      {certificate.name}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#888',
                        marginBottom: '12px',
                        fontSize: '0.9rem'
                      }}
                    >
                      {certificate.period}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666',
                        lineHeight: 1.6,
                        marginBottom: '16px',
                        fontSize: '0.95rem'
                      }}
                    >
                      {certificate.description}
                    </Typography>

                    {certificate.additionalInfo.length > 0 && (
                      <Box sx={{ marginBottom: '16px' }}>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                          {certificate.additionalInfo.map((info, idx) => (
                            <li key={idx}>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: '#666',
                                  fontSize: '0.85rem',
                                  marginBottom: '4px'
                                }}
                              >
                                {info}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                    )}

                    {certificate.link !== "null" && (
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton
                          href={certificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: '#667eea',
                            background: 'rgba(102, 126, 234, 0.1)',
                            '&:hover': {
                              background: 'rgba(102, 126, 234, 0.2)',
                              transform: 'scale(1.1)',
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <LaunchIcon />
                        </IconButton>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}
