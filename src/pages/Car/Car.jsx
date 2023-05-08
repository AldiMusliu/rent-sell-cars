import carImg from "../../assets/images/porsche-911.jpg";

const Car = () => {
  return (
    <div className="car container">
      <h4 className="car-title">Porsche 911 (2018)</h4>
      <div className="car-content">
        <div className="car-content-details">
          <p>Details</p>
          <p>Details</p>
          <p>Details</p>
          <p>Details</p>
          <p>Details</p>
        </div>
        <img src={carImg} alt="" className="car-content-photo" />
      </div>
    </div>
  );
};
export default Car;
