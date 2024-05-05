import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "./components/header";
import JobCard from "./components/job-card";
import useJobList from "./useJobListPage";
import Modal from "../components/feature/Modal";
const JobListingPage = () => {
  const {
    setShowFullDescription,
    selectedJob,
    jobList,
    lastJobRef,
    setSelectedJob,
    showFullDescription,
    loading,
  } = useJobList();

  return (
    <>
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
          {jobList.length > 0 &&
            jobList.map((item, index) => {
              if (jobList.length === index + 1) {
                return (
                  <div ref={lastJobRef} key={index}>
                    <JobCard
                      value={item}
                      setSelectedJob={setSelectedJob}
                      showFullDescription={showFullDescription}
                      setShowFullDescription={setShowFullDescription}
                    />
                  </div>
                );
              } else {
                return (
                  <JobCard
                    key={index}
                    value={item}
                    setSelectedJob={setSelectedJob}
                    showFullDescription={showFullDescription}
                    setShowFullDescription={setShowFullDescription}
                  />
                );
              }
            })}
        </Grid>
        {loading && <div>Loading...</div>}
      </Box>
      {
        <Modal
          isOpen={showFullDescription}
          onClose={() => setShowFullDescription(false)}
        >
          <h2>Job Description</h2>
          <p>{selectedJob?.jobDetailsFromCompany}</p>
        </Modal>
      }
    </>
  );
};

export default JobListingPage;
