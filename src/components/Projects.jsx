import projects from "../data/projects";

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button
            onClick={() => window.open(project.link)}
          >
            View Project
          </button>
        </div>
      ))}
    </div>
  );
}

export default Projects;