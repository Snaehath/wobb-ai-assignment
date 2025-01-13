const Navbar = () => {
  const handleClick = (pageName) => {
    if (pageName === "Dashboard" || pageName === "Profile") {
      window.alert("Comming Soon...");
    } else if (pageName === "Campaigns") {
      window.alert("Your are in right page");
    }
  };
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-800">Wobb</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => handleClick("Dashboard")}
            >
              Dashboard
            </button>
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => handleClick("Campaigns")}
            >
              Campaigns
            </button>
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => handleClick("Profile")}
            >
              Profile
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
