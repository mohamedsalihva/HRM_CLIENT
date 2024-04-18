import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css'; 

const PopupMessage = ({ type, message, onOk, onTryAgain }) => {
 
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
