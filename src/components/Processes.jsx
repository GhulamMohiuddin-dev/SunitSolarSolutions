import React from "react";
import { Box, Typography, Icon } from "@mui/material";
import { ArrowForward, ArrowBack, ArrowDownward } from "@mui/icons-material";
import heroBanner from "../assets/heroBanner.webp"; // Ensure this import is correct

// Array of process steps
const processSteps = [
  "Initial Survey and Quote",
  "Finalization of Contract",
  "Detail Design",
  "Project End",
  "Net Metering",
  "Projects Installation and Commissioning",
];

// Animation for number
const useNumberAnimation = (end, duration) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const Processes = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
        padding: "60px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#FFFFFF",
          marginBottom: "40px",
          fontWeight: "bold",
        }}
      >
        Our Process
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* First Line */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            position: "relative",
            gap: "50px"
          }}
        >
          {processSteps.slice(0, 3).map((step, index) => {
            const count = useNumberAnimation(index + 1, 1000); // Number animation

            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0 15px",
                  position: "relative",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "#fcb916",
                    fontWeight: "bold",
                    marginRight: "10px",
                    animation: "fadeIn 1s ease-in-out",
                  }}
                >
                  {`0${count}.`}
                </Typography>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.4rem",
                    marginRight: "10px",
                  }}
                >
                  {step}
                </Typography>
                {index < 2 && (
                  <Icon
                    sx={{
                      color: "#fcb916",
                      fontSize: "2rem",
                      position: "absolute",
                      right: "-30px",
                    }}
                  >
                    <ArrowForward />
                  </Icon>
                )}
              </Box>
            );
          })}
        </Box>
        <Box display="flex" marginLeft="980px">
          <Icon
            sx={{
              color: "#fcb916",
              fontSize: "2rem",
              position: "relative",
            }}
          >
            <ArrowDownward />
          </Icon>
        </Box>

        {/* Second Line */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            marginTop: "40px",
            gap: "50px"
          }}
        >
          {processSteps.slice(3).map((step, index) => {
            const reversedIndex = 5 - index; // Reverse the index for descending order
            const count = useNumberAnimation(reversedIndex + 1, 1000); // Number animation

            return (
              <Box
                key={index + 3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0 15px",
                  position: "relative",
                }}
              >
                {index > 0 && (
                  <Icon
                    sx={{
                      color: "#fcb916",
                      fontSize: "2rem",
                      position: "absolute",
                      left: "-30px",
                    }}
                  >
                    <ArrowBack />
                  </Icon>
                )}
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.4rem",
                    marginRight: "10px",
                  }}
                >
                  {step}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#fcb916",
                    fontWeight: "bold",
                    marginRight: "10px",
                    animation: "fadeIn 1s ease-in-out",
                  }}
                >
                  {`.0${count}`}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Processes;
