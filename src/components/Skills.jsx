export default function Skills() {
  return (
    <div id="skill" className="mb-4">
      <span className="flex justify-center font-bold text-4xl py-3">
        Skills
      </span>
      <div className="flex justify-evenly flex-wrap">
        <div className="flex flex-col w-1/2 md:w-1/4 justify-center mx-2">
          <span className="flex justify-center font-bold text-2xl text-white relative my-2">
            Front End
          </span>
          <div className="flex flex-col justify-center items-center rounded-[50%] aspect-square bg-white">
            <span className="text-sm xs:text-md sm:text-xl my-1">React</span>
            <span className="text-sm xs:text-md sm:text-xl my-1">
              Javascript
            </span>
            <span className="text-sm xs:text-md sm:text-xl my-1">Node.js</span>
            <span className="text-sm xs:text-md sm:text-xl my-1">HTML/CSS</span>
          </div>
        </div>
        <div className="flex flex-col w-1/2 md:w-1/4 justify-center mx-2 my-2">
          <span className="flex justify-center font-bold text-2xl text-white relative my-2">
            Back end
          </span>
          <div className="flex flex-col justify-center items-center rounded-[50%] aspect-square bg-white">
            <span className="text-sm xs:text-md sm:text-xl my-1">Express</span>
            <span className="text-sm xs:text-md sm:text-xl my-1">Flask</span>
            <span className="text-sm xs:text-md sm:text-xl my-1">MySQL</span>
            <span className="text-sm xs:text-md sm:text-xl my-1">MongoDB</span>
          </div>
        </div>
        <div className="flex flex-col w-1/2 md:w-1/4 justify-center mx-2">
          <span className="flex justify-center font-bold text-2xl text-white relative my-2">
            Others
          </span>
          <div className="flex flex-col justify-center items-center  rounded-[50%] aspect-square bg-white">
            <span className="text-sm xs:text-md sm:text-xl my-1">
              Google Cloud Platform
            </span>
            <span className="text-sm xs:text-md sm:text-xl my-1">
              Git/Github
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
