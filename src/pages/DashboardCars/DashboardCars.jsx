import Form from "react-bootstrap/Form";
import CardCarListItem from "../../components/CardCarListItem";
import Pagination from "react-bootstrap/Pagination";
import carImg from "../../assets/images/porsche-911.jpg"

const DashboardCars = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
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
     <div className="carCard">
      <img src={carImg} alt="porsche"/>
      <div className="carCard-content">
        <h3>Porsche</h3>
        <p>911</p>
        <p>White</p>
        <p>2018</p>
        <p>Rent Price 30$/per day</p>
        <p>Sell Price 70k$</p>
        <CardCarListItem/>
      </div>
    </div>
    <div className="carCard">
      <img src={carImg} alt="porsche"/>
      <div className="carCard-content">
        <h3>Porsche</h3>
        <p>911</p>
        <p>White</p>
        <p>2018</p>
        <p>Rent Price 30$/per day</p>
        <p>Sell Price 70k$</p>
        <CardCarListItem/>
      </div>
    </div>
    <div className="carCard">
      <img src={carImg} alt="porsche"/>
      <div className="carCard-content">
        <h3>Porsche</h3>
        <p>911</p>
        <p>White</p>
        <p>2018</p>
        <p>Rent Price 30$/per day</p>
        <p>Sell Price 70k$</p>
        <CardCarListItem/>
      </div>
    </div>
    <div className="carCard">
      <img src={carImg} alt="porsche"/>
      <div className="carCard-content">
        <h3>Porsche</h3>
        <p>911</p>
        <p>White</p>
        <p>2018</p>
        <p>Rent Price 30$/per day</p>
        <p>Sell Price 70k$</p>
        <CardCarListItem/>
      </div>
    </div>
    <div className="carCard">
      <img src={carImg} alt="porsche"/>
      <div className="carCard-content">
        <h3>Porsche</h3>
        <p>911</p>
        <p>White</p>
        <p>2018</p>
        <p>Rent Price 30$/per day</p>
        <p>Sell Price 70k$</p>
        <CardCarListItem/>
      </div>
    </div>
     </div>
      <Pagination>{items}</Pagination>
    </div>
  );
};
export default DashboardCars;
