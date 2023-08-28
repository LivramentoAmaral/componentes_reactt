import React from "react";
import { useState } from 'react';
import "./style.css"


const accordionItems = [
  { title: 'Item 1', content: 'Conteúdo do Item 1' },
  { title: 'Item 2', content: 'Conteúdo do Item 2' },
  { title: 'Item 3', content: 'Conteúdo do Item 3' },
];



function Accordion({items = accordionItems} ) {
  const [activeIndex, setActiveIndex] = useState(null);

  function onTitleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;
    return (
      <div key={index}>
        <div
          className={`accordion-title ${isActive ? 'active' : ''}`}
          onClick={() => onTitleClick(index)}
        >
          {item.title}
        </div>
        {isActive && <div className="accordion-content">{item.content}</div>}
      </div>
    );
  });

  return <div className="accordion">{renderedItems}</div>;
}

export default Accordion;