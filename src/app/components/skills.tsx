export default function Skills() {
  return (
    <section id="section-three" className="skills-section">
      <div className="skills-container">
        {/* Section Heading */}
        <div className="skills-heading">
          <h1>
            My <span className="highlighted-text">Skills</span>
          </h1>
        </div>

        {/* Skills Box */}
        <div className="skills-box">
          {[
            { name: "HTML", percent: "90%" },
            { name: "CSS", percent: "75%" },
            { name: "Tailwind CSS", percent: "85%" },
            { name: "TypeScript", percent: "75%" },
            { name: "JavaScript", percent: "70%" },
            { name: "Python", percent: "75%" },
            { name: "GitHub", percent: "65%" },
          ].map((skill, index) => (
            <div key={index} className="skill-item">
              <p className="skill-name">{skill.name}</p>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: skill.percent }}
                ></div>
              </div>
              <p className="skill-percent">{skill.percent}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
