import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    width: "360px",
    padding: "25px 16px 8px",
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
  subContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  minGap: {
    display: "flex",
    gap: "5px",
  },
  btn: {
    textAlign: "center",
    marginBottom: "0.5rem",
    position: "relative",
    color: "#4943da",
    background: "white",
    border: "none",
  },
  btnApply: {
    width: "100%",
    backgroundColor: "rgb(85, 239, 196)",
    color: "rgb(0, 0, 0)",
    fontWeight: "500",
    padding: "8px 18px",
    textTransform: "none",
    borderRadius: "8px",
    margin: "5px 0",
  },
}));

function JobCard({
  value,
  setSelectedJob,
  showFullDescription,
  setShowFullDescription,
}) {
  const classes = useStyles();
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
    setSelectedJob(value);
  };
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <Box className={classes.box}>
        <Box className={classes.subContainer}>
          <Box className={classes.minGap}>
            <img
              src={value?.logoUrl}
              alt="company-logo"
              width="25px"
              height="40px"
            />
            <Box>
              <Typography variant="h3-grey">
                {capitalizeFirstLetter(value?.companyName)}
              </Typography>
              <Typography>{capitalizeFirstLetter(value?.jobRole)}</Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography>{capitalizeFirstLetter(value?.location)}</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography>
            Estimated Salary:
            {` ${value?.minJdSalary ? value?.minJdSalary + " - " : ""} ${
              value?.maxJdSalary
            }`}{" "}
            LPA
          </Typography>
          &nbsp; ✅
        </Box>
        <Box>
          <Typography>About the role:</Typography>
          <Typography fontFamily="Lexend-thin" textAlign="justify">
            {`${value?.jobDetailsFromCompany.slice(0, 500)}...`}
          </Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button className={classes?.btn} onClick={toggleDescription}>
              View more
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography variant="h3-grey">Minimum Experience</Typography>
          <Typography>{value.minExp ? value.minExp : 0} years</Typography>
        </Box>
        <Button className={classes?.btnApply}>⚡ Easy Apply</Button>
      </Box>
    </>
  );
}
export default JobCard;
