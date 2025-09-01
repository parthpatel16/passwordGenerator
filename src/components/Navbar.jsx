import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-indigo-400">PassGenerator.in</h1>
        <ul className="flex gap-6 text-white">
          {["Home", "Profile", "Logout", "Docs"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
