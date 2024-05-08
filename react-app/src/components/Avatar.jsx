// Avatar.js
import React, { useState } from 'react';

const Avatar = ({ repo, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const confirmDelete = () => {
    if (window.confirm('Are you sure you want to delete this repo?')) {
      onDelete();
    }
  };

  return (
    <div className="card">
      <img className="avatar" src={repo.owner.avatar_url} alt="Avatar" />
      <div className="content">
        <p className="repo-name">{repo.name}</p>
        <p className="description">{repo.description}</p>
        <div className="actions">
          <button className="btn toggle-button" onClick={toggleExpand}>
            {expanded ? 'Hide More' : 'Show More'}
          </button>
          <button className="btn delete-button" onClick={confirmDelete}>
            Delete
          </button>
        </div>
        {expanded && (
          <div className="details">
            <p>Watchers: {repo.watchers}</p>
            <p>Forks: {repo.forks}</p>
            <p>Language: {repo.language}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
