import React from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'This is the first project',
    imageUrl: 'https://example.com/project1.png',
  },
  {
    title: 'Project 2',
    description: 'This is the second project',
    imageUrl: 'https://example.com/project2.png',
  },
  // Add more projects as needed
];

const Portfolio: React.FC = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;