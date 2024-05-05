import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  box: {
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    width: "360px",
    padding: "8px 16px",
    borderRadius: "20px",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    position: " relative !important",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px !important",
    "&:hover": {
      transition: "all .2s ease-in-out",
      transform: "scale(1.01)",
    },
  },
}));

const description = `We are on a mission to help a million+ consumer brands with automated
sales and user acquisition on WhatsApp. In 2022, Businessonbot has
grown 10X in ARR and inched towards profitability in Q4 of FY 2023. We
target a massive wave of D2C businesses in India. In the year 2023,
we'd be the market leader in our domain. There’s never been a more
exciting time to be in BusinessOnBot. We are a Y Combinator backed
company (YC W21) and have closed our pre-series A round with Ant
Financials on the Board. Backed by experienced founders/CXOs/directors
from renowned companies like WhatsApp, Lulu group, OYO, Netflix,
Pepsico, Cleartax, InMobi, etc. to add to our team. Fullstack Engineer
works closely with the founders and tech lead to drive the vision and
plans, building a lovable technology first product that customers
want.`;

function JobCard() {
  const classes = useStyles();

  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <Box className={classes.box}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <Typography variant="h3-grey">FlexWash Technologies</Typography>
        <Typography>Senior Engineer</Typography>
        <Box display="flex" alignItems="center">
          <Typography>India</Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography>Estimated Salary: ₹30 - 60 LPA </Typography>
        &nbsp; ✅
      </Box>
      <Box>
        <Typography>About the role:</Typography>
        <Typography
          style={{
            fontFamily: "Lexend-thin",
            textAlign: "justify",
          }}
        >
          {showFullDescription
            ? description
            : `${description.slice(0, 500)}...`}
        </Typography>
        {!showFullDescription && (
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{
                textAlign: "center",
                marginBottom: "0.5rem",
                position: "relative",
                color: "#4943da",
                background: "white",
                border: "none",
              }}
              onClick={toggleDescription}
            >
              View more
            </Button>
          </Box>
        )}
      </Box>
      <Box>
        <Typography variant="h3-grey">Minimum Experience</Typography>
        <Typography>5 years</Typography>
      </Box>
      <Button
        style={{
          width: "100%",
          backgroundColor: "rgb(85, 239, 196)",
          color: "rgb(0, 0, 0)",
          fontWeight: "500",
          padding: "8px 18px",
          textTransform: "none",
          borderRadius: "8px",
          margin: "5px 0",
        }}
      >
        ⚡ Easy Apply
      </Button>
    </Box>
  );
}
export default JobCard;
