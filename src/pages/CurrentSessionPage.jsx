import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentSessionDetails from '../components/CurrentSessionDetails';
import NotFoundBooking from '../components/NotFoundBooking';
import {useParams} from "react-router-dom"
import Loader from '../components/Loader';

const YourComponent = () => {
  const {device_license} = useParams();
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true while fetching data
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/zoapi/current-session/${device_license}`);
        const data = response.data;
        setBooking(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setBooking(null);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : booking ? (
        <CurrentSessionDetails data={booking.data} />
      ) : (
        <NotFoundBooking />
      )}
    </>
  );
};

export default YourComponent;
