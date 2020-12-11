import React from 'react';

import ReferenceItem from './components/ReferenceItem';
import LibraryItem from './components/LibraryItem';

import libraries from '../../db/libraries.json';
import references from '../../db/references.json';

import './index.css';

const buildReferences = references => references.map(ref => (
  <ReferenceItem
    key={ref.id}
    label={ref.label}
    link={ref.link}
  />
));

const buildLibraries = libraries => libraries.map(lib => (
  <LibraryItem
    key={lib.id}
    name={lib.name}
    address={lib.address}
  />
))

const References = () => {
  const referenceElements = buildReferences(references);
  const libraryElements = buildLibraries(libraries);

  return (
    <div className="references-page-container">
      <div>
        {referenceElements}
      </div>

      <div>
        <span className="references-libraries-title">Libraries</span>
        {libraryElements}
      </div>
    </div>
  );
};

export default References;
