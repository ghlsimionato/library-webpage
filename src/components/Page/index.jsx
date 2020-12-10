import React from 'react';
import PropTypes from 'prop-types';

import Home from '../../pages/Home';
import Library from '../../pages/Library';
import References from '../../pages/References';

import { HOME_TAB_ID, LIBRARY_TAB_ID, REF_TAB_ID } from '../../constants/tabIds';

import './index.css';

// const pageMap = {
//   [HOME_TAB_ID]: Home,
//   [LIBRARY_TAB_ID]: Library,
//   [REF_TAB_ID]: References,
// };

const getPage = (tabId) => {
  switch (tabId) {
    case HOME_TAB_ID:
      return <Home />
    
    case LIBRARY_TAB_ID:
      return <Library />
    
    case REF_TAB_ID:
      return <References />

    default:
      return null;
  }
}

const Page = (props) => {
  // const PageComponent = pageMap[props.tab];

  return (
    <div className="page-container-div">
      {getPage(props.tab)}
    </div>
  )
};

Page.propTypes = {
  tab: PropTypes.number,
};

export default Page;
