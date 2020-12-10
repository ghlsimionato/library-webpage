import React from 'react';
import Card from '../../components/Card';

import './index.css';

import defaultImage from '../../images/default.png';
import booksList from '../../db/books.json';

const buildCards = books => books.map(book => 
  <Card
    key={book.id}
    header={book.title}
    text={book.description}
    photoSrc={book.image || defaultImage}
  />
);

const Library = () => {
  const bookCards = buildCards(booksList);

  return (
    <div className="library-page-container">
      {bookCards}
    </div>
  );
};

export default Library;
