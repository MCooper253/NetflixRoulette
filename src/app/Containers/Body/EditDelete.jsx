import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Components/Button.jsx';
import CloseImg from '../../Images/close.png';

const EditDelete = ({
  toggleEditMenue,
  toggleEditButton,
  toggleDeleteModal,
  toggleModal,
}) => (
  <div className="edit-menue">
    <Button image={CloseImg} onClick={toggleEditMenue} alt="close_edit_menue" />
    <ul>
      <li key="01">
        <Button
          alt="open_edit_modal"
          onClick={() => {
            toggleModal();
            toggleEditMenue();
            toggleEditButton();
          }}
          caption="EDIT"
        />
      </li>
      <li key="02">
        <Button
          alt="open_delete_modal"
          onClick={() => {
            toggleEditMenue();
            toggleDeleteModal();
            toggleEditButton();
          }}
          caption="DELETE"
        />
      </li>
    </ul>
  </div>
);

EditDelete.propTypes = {
  toggleEditMenue: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  toggleEditButton: PropTypes.func.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
};

export default EditDelete;
