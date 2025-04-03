
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If already authenticated, redirect to home page
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pkblue-light via-white to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-pkblue-dark">PKStudy</div>
        <div>
          <Button
            variant="outline"
            onClick={() => navigate('/login')}
            className="mr-2 border-pkblue text-pkblue hover:bg-pkblue hover:text-white"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate('/signup')}
            className="bg-pkblue hover:bg-pkblue-dark text-white"
          >
            Sign Up
          </Button>
        </div>
      </header>

      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-pkblue-dark">
              Welcome to PKStudy Learning Portal
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              An innovative online education platform designed to help students excel in their academic journey.
              Join our community of learners and access high-quality educational resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigate('/signup')}
                className="bg-pkblue hover:bg-pkblue-dark text-white text-lg py-6 px-8 rounded-lg flex items-center justify-center"
                size="lg"
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/login')}
                className="border-pkblue text-pkblue hover:bg-pkblue hover:text-white text-lg py-6 px-8 rounded-lg"
                size="lg"
              >
                Login to Account
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-pkblue-light rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-pkblue rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pkblue-dark rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=600&auto=format&fit=crop"
                  alt="Students learning"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} PKStudy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
