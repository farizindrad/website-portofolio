export default function MediaIcon({ href, iconPath }) {
  const path = Array.isArray(iconPath) ? iconPath : [iconPath];

  return (
    <li className="mt-4 flex">
      <a
        className="group flex font-medium transition hover:text-white"
        href={href}
        target="_blank"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-10 w-10 flex-none fill-black transition group-hover:fill-white"
        >
          {path.map((path, index) => (
            <path key={index} d={path}></path>
          ))}
        </svg>
      </a>
    </li>
  );
}
