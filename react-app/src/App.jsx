// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from './components/Avatar'; // Import the Avatar component
import './App.css';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/visionmedia/repos');
        // Limit the number of repositories to 12
        setRepos(response.data.slice(0, 12));
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false); // Update loading state after fetching repos
      }
    };

    fetchRepos();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this repo?')) {
      // Filter out the deleted repo
      setRepos(repos.filter(repo => repo.id !== id));
    }
  };

  return (
    <div className="app-container">
      {loading && <div className="loading-overlay"></div>}
      <h1 className="title">GitHub Repositories</h1>
      <div className="repos-container">
        {repos.map(repo => (
          <div className="repo-card" key={repo.id}>
            <Avatar repo={repo} onDelete={() => handleDelete(repo.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
