import React, { useState } from 'react';

const AboutUs = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h2>About Us</h2>
      <p>This is the About Us page content.</p>

      <div>
        <label htmlFor="query">Query:</label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={handleQueryChange}
        />
        <button onClick={() => alert(`Query submitted: ${query}`)}>
          Submit Query
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
