import React from 'react';
import PropTypes from 'prop-types';
import './css/style.css'; // Import the external CSS file

const PopupMessage = ({ type, message, onOk, onTryAgain }) => {
  // Determine the class name based on the type prop
  const className = type === 'success' ? 'popup-message success' : 'popup-message error';

  return (
    <div className={className}>
      <p>{message}</p>
      {type === 'success' && <button className='popupbutton' onClick={onOk}>OK</button>}
      {type === 'error' && <button className='popupbutton2' onClick={() => {onTryAgain(); onOk();}}>Try Again</button>}
    </div>
  );
};

PopupMessage.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onOk: PropTypes.func.isRequired,
  onTryAgain: PropTypes.func.isRequired,
};

export default PopupMessage;
