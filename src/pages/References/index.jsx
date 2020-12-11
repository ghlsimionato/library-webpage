import React from 'react';

import ReferenceItem from './components/ReferenceItem';
import references from '../../db/references.json';

import './index.css';

const buildReferences = references => references.map(ref => (
  <ReferenceItem
    key={ref.id}
    label={ref.label}
    link={ref.link}
  />
));

const References = () => {
  const referenceElements = buildReferences(references);
  return (
    <div className="references-page-container">
      <div>
        {referenceElements}
      </div>

      <div>
        <span className="references-libraries-title">Libraries</span>
        {/* Inserir elementos "libraries" aqui */}
      </div>
    </div>
  );
};

export default References;
