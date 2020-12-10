import React, { useState } from 'react';

import { HOME_TAB_ID } from '../../constants/tabIds';
import TopBar from '../TopBar';
import Page from '../Page';

const MainContainer = () => {
  const [currentTab, setCurrentTab] = useState(HOME_TAB_ID);

  return (
    <div className="main-container-div">
      <TopBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Page tab={currentTab} />
    </div>
  )
};

export default MainContainer;
