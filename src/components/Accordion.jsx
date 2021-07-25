import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });

  return (
    <div className="ui fluid styled accordion">
      {renderedItems}
    </div>
  );

};

export default Accordion;
