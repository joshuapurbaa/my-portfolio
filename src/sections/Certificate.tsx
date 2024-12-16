import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Certificate.module.css";
import useResponsive from "../hooks/useResponsive";

const certificateData = [
  {
    name: "Memulai Pemrograman Dengan Dart",
    path: ["/certificate_img/dart.jpg"],
    link: "https://www.dicoding.com/certificates/QLZ9854VDX5D",
  },
  {
    name: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    path: ["/certificate_img/fpemula1.jpg"],
    link: "https://www.dicoding.com/certificates/98XW6MM2LXM3",
  },
  {
    name: "Belajar Fundamental Aplikasi Flutter",
    path: ["/certificate_img/ffundamental1.jpg"],
    link: "https://www.dicoding.com/certificates/NVP714DD4PR0",
  },
  {
    name: "Menjadi Flutter Developer Expert",
    path: ["/certificate_img/fexpert1.jpg"],
    link: "https://www.dicoding.com/certificates/MEPJLMG4WZ3V",
  },
  {
    name: "Mentor Of MSIB Batch 4",
    path: ["/certificate_img/mentor.jpeg"],
    link: "null",
  },
  {
    name: "Meniti Karier sebagai Software Developer",
    path: ["/certificate_img/sd.jpg"],
    link: "https://www.dicoding.com/certificates/KEXL4DQGWXG2",
  },
  {
    name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    path: ["/certificate_img/ps.jpg"],
    link: "https://www.dicoding.com/certificates/L4PQMKW12ZO1",
  },
  {
    name: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    path: ["/certificate_img/101.jpg"],
    link: "https://www.dicoding.com/certificates/L4PQMKW12ZO1",
  },
  {
    name: "Belajar Dasar Pemrograman JavaScript",
    path: ["/certificate_img/javascript/1.jpg"],
    link: "https://www.dicoding.com/certificates/1RXYM66KMXVM",
  },
  {
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    path: ["/certificate_img/backend/1.jpg"],
    link: "https://www.dicoding.com/certificates/L4PQ4Y5GQXO1",
  },
  {
    name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    path: ["/certificate_img/aws/1.jpg"],
    link: "https://www.dicoding.com/certificates/0LZ01MGNKP65",
  },
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
    width: 40,
    height: 40,
    cursor: "pointer",
    backgroundColor: "#1976d2", // primary color
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    outline: "none",
  };

  return (
    <Container id="certificates" maxWidth="lg" sx={{ paddingTop: 10 }}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Certificates
        </Typography>
        <Carousel
          selectedItem={currentIndex}
          onChange={handleChange}
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          infiniteLoop={false}
          centerMode={true}
          centerSlidePercentage={isMobile ? 100 : isTablet ? 50 : 100 / 3}
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
                {"<"}
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
                {">"}
              </button>
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const indicatorStyle = {
              marginLeft: 8,
              cursor: "pointer",
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: isSelected ? "#000" : "#ccc",
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
            <div key={index} style={{ padding: "0 20px" }}>
              <a
                href={certificate.link !== "null" ? certificate.link : "#"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <img src={certificate.path[0]} alt={certificate.name} />
                <Typography
                  variant="h6"
                  component="h2"
                  paddingTop={4}
                  paddingBottom={7}
                >
                  {certificate.name}
                </Typography>
              </a>
            </div>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}
