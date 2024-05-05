import { useState, useEffect, useRef, useCallback } from "react";

const useJobListPage = () => {
  const [jobList, setJobList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});
  const [showFullDescription, setShowFullDescription] = useState(false);
  const observer = useRef();

  const lastJobRef = useRef();

  const fetchMoreJobs = useCallback(async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset: offset + 10, // Increase offset to fetch next set of jobs
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const result = await response.json();
      setJobList((prevJobs) => [...prevJobs, ...result.jdList]);
      setOffset((prevOffset) => prevOffset + 10);
    } catch (error) {
      console.error(error);
    }
  }, [offset]);
  useEffect(() => {
    fetchMoreJobs();
  }, [fetchMoreJobs]);
  useEffect(() => {
    const loadMoreJobs = async () => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          fetchMoreJobs()
            .then(() => setLoading(false))
            .catch(() => setLoading(false));
        }
      });

      if (lastJobRef.current) observer.current.observe(lastJobRef.current);
    };

    loadMoreJobs();

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loading, fetchMoreJobs]);

  return {
    setShowFullDescription,
    selectedJob,
    jobList,
    loading,
    fetchMoreJobs,
    lastJobRef,
    setSelectedJob,
    showFullDescription,
  };
};

export default useJobListPage;
