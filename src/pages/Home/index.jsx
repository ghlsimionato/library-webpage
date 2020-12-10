import React from 'react';

import Card from '../../components/Card';
import photo from '../../images/photo.png';

import './index.css';

const Home = () => (
  <div className="home-page-container">
    <Card header="Welcome" text="John Doe" photoSrc={photo} />
  </div>
);

export default Home;
