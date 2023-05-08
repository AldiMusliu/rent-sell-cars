import Form from "react-bootstrap/Form";
import TabelUserListItem from "../../components/TabelUserListItem";
import Pagination from "react-bootstrap/Pagination";

const DashboardUsers = () => {
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
    <div className="dashboardUsers">
      <div className="filter">
        <h3>Users</h3>
        <Form.Select aria-label="Default select example" className="select">
          <option>Filter by</option>
          <option value="1">Price</option>
          <option value="3">For Sale</option>
          <option value="3">For Rent</option>
        </Form.Select>
      </div>
      <div className="tableContent">
        <table>
          <tr>
            <th className="firstItem">Number</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Status</th>
            <th className="lastItem">Actions</th>
          </tr>
          <TabelUserListItem />
          <TabelUserListItem />
          <TabelUserListItem />
          <TabelUserListItem />
          <TabelUserListItem />
          <TabelUserListItem />
        </table>
      </div>
      <Pagination>{items}</Pagination>
    </div>
  );
};
export default DashboardUsers;