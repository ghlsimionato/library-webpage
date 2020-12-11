import React from 'react';
import Card from '../../components/Card';

import './index.css';

import defaultImage from '../../images/default.png';
import booksList from '../../db/books.json';

const defaultDescription = 'Sem descrição';
const defaultTitle = 'Sem título';

const buildCards = books => books.map(book => 
  <Card
    key={book.id}
    header={book.title || defaultTitle}
    text={book.description || defaultDescription}
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
