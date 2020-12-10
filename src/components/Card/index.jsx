import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Card = (props) => (
  <div className="card-container">
    <img
      src={props.photoSrc}
      alt=""
      className="card-photo"
    />
    <div className="card-text-container">
      <p className="card-text-header">{props.header}</p>
      <p className="card-text">{props.text}</p>
    </div>
  </div>
);

Card.propTypes = {
  photoSrc: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
}

export default Card;
