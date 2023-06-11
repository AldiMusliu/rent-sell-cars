import { useParams } from "react-router-dom";
import { api } from "../../lib/api/";
import React from "react";

const Car = () => {
  const { carId } = useParams();
  const [car, setCar] = React.useState();
  const getCar = async () => {
    const result = await api.call({ url: `/car/${carId}`, Method: "GET" });
    if (result.success) {
      setCar(result.data);
    }
  };
  React.useEffect(() => {
    getCar();
  }, []);
  return (
    <div className="car container">
      <h4 className="car-title">{car?.name}</h4>
      <div className="car-content">
        <div className="car-content-details">
        <h5>{car?.description}</h5>
          <p>
            <span>Model: </span>
            {car?.model}
          </p>
          <p>
            <span>Price For Rent: </span>
            {car?.priceRent}
          </p>
          <p>
            <span>Price For Sell: </span>
            {car?.priceSell}
          </p>
          <p>
            <span>Is Available: </span>
            {car?.available}
          </p>

          <p>
            <span>Seats: </span>
            {car?.seats}
          </p>
        </div>
        <img src={car?.images} alt="" className="car-content-photo" />
      </div>
      <div className="car-buttons">
        <button>Book Now</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};
export default Car;
