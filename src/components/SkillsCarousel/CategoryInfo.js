import React from 'react';

const CategoryInfo = ({ category, description }) => {
  return (
    <div className="category-info">
      <h3>{category}</h3>
      <p className="category-description">{description}</p>
    </div>
  );
};

export default React.memo(CategoryInfo); 