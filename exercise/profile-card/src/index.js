import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#c3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "Beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="imge/_LIO7273.jpg" alt="cynthia" className="avatar" />
    </div>
  );
}
function Intro() {
  return (
    <div className="intro">
      <h1>Kayitare Cynthia</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the portuguese sun at the beach.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObject={skill} key={skill.skill} />
      ))}
    </div>
  );
}
function Skill({ skillObject }) {
  return (
    <div className="skill" style={{ background: skillObject.color }}>
      <span>{skillObject.skill}</span>{" "}
      <span>
        {skillObject.level === "Beginner"
          ? "👶"
          : skillObject.level === "intermediate"
          ? "👍"
          : "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
