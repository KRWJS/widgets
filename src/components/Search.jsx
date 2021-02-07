import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('Front end developer');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500)

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });      
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResuls = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Read</a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">Enter search term</label>
          <input id="search" 
                 className="input" 
                 type="text" 
                 value={term}
                 onChange={e => setTerm(e.target.value)} />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResuls}
      </div>      
    </div>
  );
}
 
export default Search;