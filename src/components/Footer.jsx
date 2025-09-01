import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 py-6 text-center text-gray-400">
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-400"
        >
          LinkedIn
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-indigo-400"
        >
          Email
        </a>
      </div>

      {/* Copyright */}
      <p>© {new Date().getFullYear()} Parth Patel. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
