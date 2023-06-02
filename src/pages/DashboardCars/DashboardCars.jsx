import Form from "react-bootstrap/Form";
import CardCarListItem from "../../components/CardCarListItem";
import React from "react";
import carImg from "../../assets/images/porsche-911.jpg";
import { api, endpoints } from "../../lib/api/";

const DashboardCars = () => {
  const [rerender, setRerender] = React.useState(false);
  const [cars, setCars] = React.useState();
  const getCars = async () => {
    const result = await api.call(endpoints.getCars);
    if (result.success) {
      setCars(result.data);
    }
  };
  React.useEffect(() => {
    getCars();
  }, [rerender]);
  return (
    <div className="dashboardCars">
      <div className="filter">
        <h3>Cars</h3>
        <Form.Select aria-label="Default select example" className="select">
          <option>Filter by</option>
          <option value="1">Price</option>
          <option value="3">For Sale</option>
          <option value="3">For Rent</option>
        </Form.Select>
      </div>
      <div className="dashboardCars-grid">
        {cars?.map((car) => {
          return (
            <div className="carCard" key={car._id}>
              <img src={carImg} alt="porsche" />
              <div className="carCard-content">
                <h3>{car?.name}</h3>
                <p>911</p>
                <p>White</p>
                <p>2018</p>
                <p>Rent Price 30$/per day</p>
                <p>Sell Price 70k$</p>
                <CardCarListItem id={car._id} setRerender={setRerender}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DashboardCars;
