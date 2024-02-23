import React, { useEffect, useState } from "react";
import axios from "axios";
import loading from "../../public/loading.png";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { toast } from "react-toastify";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardsInfo from "./CardsInfo";

const Cards = () => {
  const [data, setData] = useState();
  const [showDiv, setShowDiv] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://swapi.dev/api/planets/?format=json"
        );
        setData(response.data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);
// =====================Function for previous page button=====================
  const handlePrev = async () => {
    try {
      if (data.previous === null) {
        console.log("Its empty");
        toast.info("Cannot go back", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } else {
        setData(null);
        const response = await axios.get(data.previous);
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
// =====================Function for next page button=====================

  const handleNext = async () => {
    try {
      if (data.next === null) {
        console.log("Its empty");
        toast.info("Cannot go ahead", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } else {
        setData(null);
        const response = await axios.get(data.next);
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
// =====================Function for closing the div=====================
const closeDivFunc = ()=>{
  setShowDiv(null)
}

  return (
    <>
      {!data ? (
        <div className="loading">
          <img src={loading} />
        </div>
      ) : (
        <div className="cardsMainDiv">
          <button onClick={handlePrev} className="natigationButtonLeft">
            <ImArrowLeft />
          </button>

          {data.results.map((item, index) => (
            <div key={index} className="cardDiv">
              <div className="para">
                <h3 className="cardDivHeading">Planet: {item.name}</h3>
                <p className="cardDivPara">
                  Climate:{" "}
                  {item.climate.charAt(0).toUpperCase() + item.climate.slice(1)}
                </p>
                <p className="cardDivPara">Population: {item.population}</p>
                <p className="cardDivPara">
                  Terrain:{" "}
                  {item.terrain.charAt(0).toUpperCase() + item.terrain.slice(1)}
                </p>
              </div>
              <button
                onClick={() => setShowDiv(item)}
                className="cardDivButton"
              >
                More Info
              </button>
            </div>
          ))}
          <button onClick={handleNext} className="natigationButtonRight">
            <ImArrowRight />
          </button>
        </div>
      )}
      {showDiv && data && <CardsInfo closeDivProp={()=>closeDivFunc()} renderData={showDiv}/>}
      
      
      <ToastContainer/>
    </>
  );
};

export default Cards;
