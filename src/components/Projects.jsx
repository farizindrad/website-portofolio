import Button from "./Button";

export default function Projects() {
  return (
    <div id="project">
      <span className="text-2xl md:text-4xl font-bold flex justify-center">
        My Projects
      </span>
      <div className="flex justify-evenly py-2 flex-wrap sm:px-8 md:px-0">
        <div className="flex flex-col justify-center items-center border-4 border-solid border-white max-w-[90%] md:max-w-[40%] my-2">
          <div className="group relative overflow-hidden m-4">
            <img
              src="./src/assets/tic-tac-toe.jpeg"
              alt="Tic-tac-toe"
              className="rounded-2xl group-hover:blur-[2.4]"
            />
            <div className="absolute rounded-2xl h-full w-full bg-white bg-opacity-40 flex flex-col px-4 justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-sm sm:text-xl md:text-md lg:text-xl">
                This project aims to create an interactive Tic-Tac-Toe game
                using React that can be played through a website.
              </span>
              <Button githubUrl="https://github.com/farizindrad/React-tic-tac-toe" />
            </div>
          </div>
          <div className="flex my-2 flex-wrap">
            <span className="mx-2 bg-white rounded-[20px] px-2 mb-1">
              JavaScript
            </span>
            <span className="mx-2 bg-white rounded-[20px] px-2 mb-1">
              HTML/CSS
            </span>
            <span className="mx-2 bg-white rounded-[20px] px-2 mb-1">
              React
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-4 border-solid border-white max-w-[90%] md:max-w-[40%]">
          <div className="group relative overflow-hidden m-4">
            <img
              src="./src/assets/backend-notes-app.png"
              alt="Notes-App"
              className="rounded-2xl group-hover:blur-[2.4]"
            />
            <div className="absolute rounded-2xl h-full w-full bg-white bg-opacity-40 flex flex-col px-4 justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-sm sm:text-xl md:text-md lg:text-xl">
                Developed a RESTful API using the hapi framework to provide a
                simple note-taking application.
              </span>
              <Button githubUrl="https://github.com/farizindrad/React-tic-tac-toe" />
            </div>
          </div>
          <div className="flex my-2 sm:text-md flex-wrap">
            <span className="mx-2 bg-white rounded-[20px] px-2 mb-1">
              JavaScript
            </span>
            <span className="mx-2 bg-white rounded-[20px] px-2 mb-1">
              Node.js
            </span>
            <span className="mx-2 bg-white rounded-[20px] px-2 mb-1">hapi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
