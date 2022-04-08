import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import { Link } from "react-router-dom";
import Candle from "./components/Candle";
import axios from "axios";
import NewReview from "./components/NewReview";
import Button from "./components/Button";
// import CandleItem from "./components/CandleItem";
import ChangeScent from "./components/Changescent";
import Review from "./components/Review";



const App = () => {
  const [candles, setCandles] = useState([""]);
  // const [candleItem] = useState([]);
  // const [updateCandleItem] = useState("");
  // const [setUpdateCandle] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
    rating: "",
  });

  
  useEffect(() => {
    async function getReviews() {
      try {
        let res = await axios.get(`http://localhost:3001/reviews`);
        setReviews(res.data);
        // console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, []);
  



  let navigate = useNavigate();
  async function getCandles() {
    const res = await axios.get("http://localhost:3001/candles");
    console.log(res.data);
    setCandles(res.data);
  }
  useEffect(() => {
    getCandles();
  }, []);

  const updateCandle = (id) => {
    console.log(id);
    navigate(`/candles/${id}/update`);
  };

  const deleteCandle = async (id) => {
    const stat = await axios.delete(`http://localhost:3001/delete/${id}`, {});
    getCandles();
    stat();
  };



  const addNewReview = async (e) => {
    e.preventDefault();
    const currentReviews = reviews;
    const createdReview = {
      ...newReview,
      name: newReview.name,
      review: newReview.review,
    };

    let response = await axios.post("http://localhost:3001/reviews/new",createdReview);
    currentReviews.push(response.data);
    setReviews(currentReviews);
    setNewReview({ name: "", review: ""});
  };

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };











  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/candles"
            element={
              <Candle
                candles={candles}
                updateCandle={updateCandle}
                deleteCandle={deleteCandle}
              />
            }
            />
           
              <Route
            path="/reviews/new"
            element={
              <NewReview
              newReview={newReview}
                handleChange={handleChange}
                addNewReview={addNewReview}
              />
            }
            />
            
          <Route path="/reviews" element={<Review reviews={reviews} />} />
          <Route path="/candles/:id/update" element={<ChangeScent />} />
        </Routes>

        <div>
          <Button />
        </div>
      </main>
    </div>
  );
          }
        
      

export default App;
