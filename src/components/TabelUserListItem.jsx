import React, {useState} from "react";
import { Icons } from "./Icons/Icons";
import { useNavigate } from "react-router-dom";
import CostumModal from "./CostumModal";
import DeleteItemModalContent from "./DeleteItemModalContent/DeleteItemModalContent";

const TabelUserListItem = () => {
  const navigate = useNavigate();
  const userId = 1;
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <tr>
        <td className="firstItem">1</td>
        <td>Aldi Musliu</td>
        <td>Aldi@musliu.com</td>
        <td>Has Rent</td>
        <td className="lastItem">
          <span className="icon" onClick={() => navigate(`${userId}`)}>
            {<Icons.Edit />}
          </span>
          <span className="icon" onClick={() => setModalShow(true)}>{<Icons.Delete />}</span>
        </td>
      </tr>
      <CostumModal
        modalBody={<DeleteItemModalContent setModalShow={setModalShow} />}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
export default TabelUserListItem;
