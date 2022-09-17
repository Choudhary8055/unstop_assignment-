import "./App.css";
import React, { useState } from "react";
import Train from "./components/Train";
import ShowCase from "./components/ShowCase";
import ShowSeat from "./components/ShowSeat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserData from "./components/UserData";

const trains = [
  {
    name: "Rajdhani Express",
    price: 200,
    occupied: [20, 21, 30, 1, 2, 8]
  },
  {
    name: "Humsafar Express",
    price: 120,
    occupied: [9, 41, 35, 11, 65, 26]
  },
  {
    name: "Duronto Express",
    price: 180,
    occupied: [37, 25, 44, 13, 2, 3]
  },
  {
    name: "Sampark Kranti Express",
    price: 290,
    occupied: [10, 12, 50, 33, 28, 47]
  }
];

const seats = Array.from({ length: 10 * 8 }, (_, i) => i);
export default function App() {
  const [selectedTrain, setSelectedTrain] = useState(trains[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserData />} />
   </Routes>
    
  
    <div className="App">
      <Train
        train={selectedTrain}
        trains={trains}
        onChange={(train) => {
          setSelectedSeats([]);
          setSelectedTrain(train);
        }}
      />
      <ShowCase />

      <ShowSeat
        train={selectedTrain}
        seats={seats}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      />
      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{" "}
        seats for the price of{" "}
        <span className="total">
          {selectedSeats.length * selectedTrain.price}₹
        </span>
      </p>
    </div>
    </BrowserRouter>
  );
}
