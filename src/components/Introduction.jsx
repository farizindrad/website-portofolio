export default function Introduction() {
  return (
    <div
      id="home"
      className="flex flex-wrap justify-around items-center min-h-screen"
    >
      <div className="flex flex-col items-center md:items-start md:w-1/2 md:px-4 pt-20">
        <Greet text="Hi!" />
        <Greet text="I'm Fariz Indra" />
        <p className="text-md md:text-3xl font-semibold md:py-2">
          Backend Developer
        </p>
        <a
          className="w-fit text-sm md:text-3xl bg-white rounded-lg p-1 hover:bg-black hover:text-white"
          href="./resume/Resume.pdf"
          // href="https://drive.google.com/file/d/1Ji241TH-4kIf4Y2q24iVl5sy_Sa9J3Pu/view?usp=sharing"
          target="_blank"
        >
          <button className="resume">Resume</button>
        </a>
      </div>
      <div className="flex justify-center w-full md:w-1/3 px-16 py-2 md:p-0">
        <img src="./img/Glow-remove.png" alt="profile" />
      </div>
    </div>
  );
}

function Greet({ text }) {
  return (
    <>
      <h1
        className="text-3xl md:text-5xl font-bold content-title md:py-2"
        style={{ textShadow: "3px 3px 3px white" }}
      >
        {text}
      </h1>
    </>
  );
}
