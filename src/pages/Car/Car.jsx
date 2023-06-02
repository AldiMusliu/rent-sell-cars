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
          <p>{car?.model}</p>
          <p>{car?.priceRent}</p>
          <p>{car?.priceSell}</p>
          <p>{car?.available}</p>
          <p>{car?.description}</p>
          <p>{car?.seats}</p>
        </div>
        <img src={car?.images} alt="" className="car-content-photo" />
      </div>
    </div>
  );
};
export default Car;
