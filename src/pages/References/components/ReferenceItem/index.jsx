import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const ReferenceItem = (props) => (
  <div className="reference-item">
    <a href={props.link}>{props.label}</a>
  </div>
);

ReferenceItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
};

export default ReferenceItem;
