import React from 'react';
import PropTypes from 'prop-types';

const LibraryItem = (props) => (
  <div className="library-item">
    {`${props.name}: ${props.address}`}
  </div>
);

LibraryItem.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
};

export default LibraryItem;
