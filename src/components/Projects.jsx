function Projects() {
  const projects = [
    "RFID Smart Trolley",
    "Anti-Drone System",
    "Portfolio Website"
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project}</h3>
        </div>
      ))}
    </section>
  );
}

export default Projects;