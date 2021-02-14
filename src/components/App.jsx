import React, { useState } from 'react';
import Route from './Route';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Header from './Header';
import Translate from './Translate';
import Search from './Search';

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
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search-wikipedia">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select a colour" 
                  options={options} 
                  selected={selected} 
                  onSelectedChange={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
