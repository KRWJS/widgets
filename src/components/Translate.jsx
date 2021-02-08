import React, { Fragment, useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <Fragment>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value="text" onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown label="Select a language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage} />
    </Fragment>
  );
};
 
export default Translate;