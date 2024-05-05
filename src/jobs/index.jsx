import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "./components/header";
import JobCard from "./components/job-card";

const JobListingPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Header />
      <Grid
        container
        justifyContent="space-between"
        spacing="auto"
        padding="30px"
        gap="30px"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2].map((item) => (
          <JobCard />
        ))}
      </Grid>
    </Box>
  );
};

export default JobListingPage;
