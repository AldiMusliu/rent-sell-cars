import * as React from "react";
import { useNavigate } from "react-router-dom";
import carImg from "../../assets/images/porsche-911.jpg";


const CarCard = () => {
  const navigate = useNavigate();
  const id = '1';
  return (
    <div className="carCard" onClick={() => navigate(`/cars/${id}`)}>
      <img src={carImg} alt="porsche" />
      <div className="carCard-content">
        <h3>Porsche</h3>
        <p>911</p>
        <p>White</p>
        <p>2018</p>
        <p>Rent Price 30$/per day</p>
        <p>Sell Price 70k$</p>
      </div>
    </div>
  );
};

export default CarCard;
