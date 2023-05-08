import React, { useState } from "react";
import { Icons } from "./Icons/Icons";
import { useNavigate } from "react-router-dom";
import CostumModal from "./CostumModal";
import DeleteItemModalContent from "./DeleteItemModalContent/DeleteItemModalContent";

const TabelCarListItem = () => {
  const navigate = useNavigate();
  const carId = 1;
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="editDelete">
      <span className="icon" onClick={() => navigate(`${carId}`)}>
            {<Icons.Edit />}
          </span>
          <span className="icon" onClick={() => setModalShow(true)}>
            {<Icons.Delete />}
          </span>
      </div>
      <CostumModal
        modalBody={<DeleteItemModalContent setModalShow={setModalShow} />}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
export default TabelCarListItem;
