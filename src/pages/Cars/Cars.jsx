import * as React from "react";
import CarCard from "../../components/CarCard/CarCard";
import Form from "react-bootstrap/Form";
import { api, endpoints } from "../../lib/api/";

const Cars = () => {
  const [cars, setCars] = React.useState();
  const getCars = async () => {
    const result = await api.call(endpoints.getCars);
    if (result.success) {
      setCars(result.data);
    }
  };
  React.useEffect(() => {
    getCars();
  }, []);
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
        {cars?.map((car) => {
          return <CarCard car={car} key={car._id}/>;
        })}
      </div>
    </div>
  );
};
export default Cars;
