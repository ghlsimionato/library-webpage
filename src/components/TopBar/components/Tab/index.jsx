import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Tab = (props) => {
  const { text, tabId, setCurrentTab, isSelected } = props;
  const className = `top-bar-label${(isSelected ? '-selected' : '')}`;

  const onLabelClick = () => {
    console.log('TAB ID', tabId);
    setCurrentTab(tabId)
  }

  return (
    <div className={className} onClick={onLabelClick}>{text}</div>
  );
}

Tab.propTypes = {
  text: PropTypes.string,
  tabId: PropTypes.number,
  setCurrentTab: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default Tab;
