import * as React from "react";
import CarCard from "../../components/CarCard/CarCard";
import Form from "react-bootstrap/Form";

const Cars = () => {
  return (
    <div className="cars container">
      <div className="filter">
        <h3>Find your cars</h3>
        <Form.Select aria-label="Default select example" className="select">
          <option>Filter by</option>
          <option value="1">Price</option>
          <option value="2">Name</option>
          <option value="3">For Sale</option>
          <option value="3">For Rent</option>
        </Form.Select>
      </div>
      <div className="cars-content">
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
      </div>
    </div>
  );
};
export default Cars;
