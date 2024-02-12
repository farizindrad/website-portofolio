export default function Button({ githubUrl }) {
  const handleButtonClick = () => {
    window.open(githubUrl, "_blank");
  };

  return (
    <button
      className="button w-fit text-sm sm:text-xl my-2 p-1 bg-yellow-200 rounded-md"
      onClick={handleButtonClick}
    >
      Learn more
    </button>
  );
}
