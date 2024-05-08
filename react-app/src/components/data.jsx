import React, { useEffect, useState } from 'react';
import axios from 'axios';

const data = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/visionmedia/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>GitHub Repositories</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
