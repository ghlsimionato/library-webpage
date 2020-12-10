import React from 'react';
import PropTypes from 'prop-types';

import { HOME_TAB_ID, LIBRARY_TAB_ID, REF_TAB_ID } from '../../constants/tabIds';
import Tab from './components/Tab';

import './index.css';

const buildTabElements = (tabs, setCurrentTab, currentTab) => tabs.map(tab =>
  (
    <Tab
      key={tab.tabId}
      text={tab.text}
      tabId={tab.tabId}
      setCurrentTab={setCurrentTab}
      isSelected={currentTab === tab.tabId}
    />
  ));

const TopBar = (props) => {
  const { currentTab, setCurrentTab } = props;

  const tabs = [
    { text: 'Home', tabId: HOME_TAB_ID },
    { text: 'Library', tabId: LIBRARY_TAB_ID },
    { text: 'References', tabId: REF_TAB_ID },
  ];


  const tabElements = buildTabElements(tabs, setCurrentTab, currentTab);

  return (
    <div className="top-bar-container-div">
      {tabElements}
    </div >
  )
};

TopBar.propTypes = {
  setCurrentTab: PropTypes.func.isRequired,
  currentTab: PropTypes.number.isRequired,
};

export default TopBar;
