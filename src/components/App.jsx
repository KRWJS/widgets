import React from 'react';
// import Accordion from './Accordion';
import Dropdown from './Dropdown';
// import Search from './Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const options = [
  {
    label: 'The colour of red',
    value: 'red'
  },
  {
    label: 'The colour of green',
    value: 'green'
  },
  {
    label: 'The colour of blue',
    value: 'blue'
  }
];

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Dropdown options={options} />
      {/* <Search /> */}
    </div>
  );
};