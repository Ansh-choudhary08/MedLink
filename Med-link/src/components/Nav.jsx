import { NavbarMenu } from "../mockData/data";
import { Menu } from "lucide-react";
import logo from "../images/logo.png";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();   // ✅ correct way
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav className="w-full backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 ml-4">
            <img
              className="h-20 w-auto transition-transform duration-300 hover:scale-105"
              src={logo}
              alt="logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-700">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="group">
                  <Link
                    to={menu.link}
                    className="relative inline-block py-1 px-3 font-semibold transition-all duration-300 hover:text-primary"
                  >
                    {menu.title}
                    <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-primary rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Login / Logout Toggle */}
          {!user ? (
            <Link
              to="/login"
              className="shadow-[inset_0_0_0_2px_#616467] mr-2 px-6 py-2 text-primary rounded-full tracking-widest uppercase bg-green-100 font-semibold transition-all duration-300 hidden md:block hover:bg-primary hover:text-white hover:scale-110 hover:shadow-lg"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="mr-2 px-6 py-2 bg-white text-primary rounded-full font-semibold hover:bg-primary hover:text-white"
            >
              Logout
            </button>
          )}

          {/* Mobile Menu */}
          <div
            className="flex md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <Menu size={30} />
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Nav;
