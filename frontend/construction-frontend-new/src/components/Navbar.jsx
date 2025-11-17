export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-semibold text-gray-800">
        Construction AI Q&amp;A
      </div>

      <div className="space-x-6 text-sm text-gray-600">
        <a href="/" className="hover:text-blue-600">
          Home
        </a>
        <a href="#about" className="hover:text-blue-600">
          About
        </a>
        <a href="#team" className="hover:text-blue-600">
          Team
        </a>
      </div>
    </nav>
  );
}
