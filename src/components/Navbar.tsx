
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {isAuthenticated && (
            <Link to="/profile" className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.profile_pic || ''} alt={user?.name || 'User'} />
                <AvatarFallback className="bg-pkblue-light text-pkblue-dark">
                  {user?.name?.charAt(0) || <User size={16} />}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-gray-800 hidden sm:inline">{user?.name || 'User'}</span>
            </Link>
          )}
          
          <Link to="/" className="text-xl font-bold text-pkblue-dark">
            PKStudy
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/home" className="text-gray-600 hover:text-pkblue">Home</Link>
          <Link to="/timetable" className="text-gray-600 hover:text-pkblue">Time Table</Link>
          <Link to="/courses" className="text-gray-600 hover:text-pkblue">Courses</Link>
          <Link to="/about" className="text-gray-600 hover:text-pkblue">About</Link>
          
          {isAuthenticated ? (
            <Button 
              variant="outline" 
              onClick={logout}
              className="border-pkblue text-pkblue hover:bg-pkblue hover:text-white"
            >
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button 
                variant="default" 
                className="bg-pkblue hover:bg-pkblue-dark text-white"
              >
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu} 
          className="md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg absolute top-16 left-0 right-0 z-50">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/home" 
              className="text-gray-600 hover:text-pkblue py-2 px-4 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/timetable" 
              className="text-gray-600 hover:text-pkblue py-2 px-4 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Time Table
            </Link>
            <Link 
              to="/courses" 
              className="text-gray-600 hover:text-pkblue py-2 px-4 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-pkblue py-2 px-4 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {isAuthenticated ? (
              <Button 
                variant="outline" 
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="border-pkblue text-pkblue hover:bg-pkblue hover:text-white w-full"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="default" 
                  className="bg-pkblue hover:bg-pkblue-dark text-white w-full"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
