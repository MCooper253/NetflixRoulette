import React from "react";
import PropTypes from "prop-types";

import Button from "../../Components/Button.js";
import CloseImg from "../../Images/close.png";

const EditDelete = (props) => {
  return (
    <div className="edit-menue">
      <Button image={CloseImg} onClick={props.toggleEditMenue} />
      <ul>
        <li key="01">
          <Button
            onClick={() => {
              props.toggleModal();
              props.toggleEditMenue();
              props.toggleEditButton();
            }}
            caption="EDIT"
          />
        </li>
        <li key="02">
          <Button
            onClick={() => {
              props.toggleEditMenue();
              props.toggleDeleteModal();
              props.toggleEditButton();
            }}
            caption="DELETE"
          />
        </li>
      </ul>
    </div>
  );
};

EditDelete.propTypes = {
  toggleEditMenue: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  toggleEditButton: PropTypes.func.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
};

export default EditDelete;
