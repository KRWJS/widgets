import React, { useState } from 'react';
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

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
        <Dropdown onSelectedChange={setSelected}
                  selected={selected}
                  options={options} />
      {/* <Search /> */}
    </div>
  );
};

export default App;
