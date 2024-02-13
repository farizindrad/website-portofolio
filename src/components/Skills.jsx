export default function Skills() {
  return (
    <div id="skill" className="mb-4">
      <span className="flex justify-center font-bold text-4xl py-3">
        Skills
      </span>
      <div className="flex justify-evenly flex-wrap">
        <SkillCard
          title="Front End"
          skills={["React", "JavaScript", "Node.js", "HTML/CSS"]}
        />
        <SkillCard
          padding="my-2"
          title="Back End"
          skills={["Express", "Flask", "MySQL", "MongoDB"]}
        />
        <SkillCard
          title="Others"
          skills={["Google Cloud Platform", "Git/Github"]}
        />
      </div>
    </div>
  );
}

function SkillList({ skill }) {
  return <span className="text-sm xs:text-md sm:text-xl my-1">{skill}</span>;
}

function SkillCard({ padding = "", title, skills }) {
  const className = `flex flex-col w-1/2 md:w-1/4 justify-center mx-2 ${padding}`;
  return (
    <div className={className}>
      <span className="flex justify-center font-bold text-2xl text-white relative my-2">
        {title}
      </span>
      <div className="flex flex-col justify-center items-center  rounded-[50%] aspect-square bg-white">
        {skills.map((skill, index) => (
          <SkillList key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
