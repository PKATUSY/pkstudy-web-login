
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Clock, Users, GraduationCap } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  // Carousel data
  const carouselSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",
      title: "Expert Faculty",
      description: "Learn from the best instructors in the field"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
      title: "Interactive Learning",
      description: "Engage with peer-to-peer collaborative sessions"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
      title: "Modern Facilities",
      description: "Access to state-of-the-art labs and resources"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2000&auto=format&fit=crop",
      title: "Career Support",
      description: "Get placement assistance and career guidance"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2000&auto=format&fit=crop",
      title: "Research Opportunities",
      description: "Participate in cutting-edge research projects"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?q=80&w=2000&auto=format&fit=crop",
      title: "Certifications",
      description: "Earn industry-recognized certifications"
    }
  ];

  // Features data
  const features = [
    {
      title: "Courses",
      description: "Explore our wide range of courses designed to help you succeed",
      icon: Book,
      link: "/courses"
    },
    {
      title: "Time Table",
      description: "Check your personalized schedule and upcoming classes",
      icon: Clock,
      link: "/timetable"
    },
    {
      title: "About Us",
      description: "Learn more about PKStudy and our educational mission",
      icon: Users,
      link: "/about"
    },
    {
      title: "Profile",
      description: "Manage your personal information and preferences",
      icon: GraduationCap,
      link: "/profile"
    }
  ];

  if (!isAuthenticated) {
    return null; // Don't render anything if not authenticated
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Carousel */}
      <section className="w-full">
        <Carousel slides={carouselSlides} />
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Welcome to PKStudy Learning Portal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <feature.icon className="h-8 w-8 text-pkblue mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-pkblue text-pkblue hover:bg-pkblue hover:text-white"
                  onClick={() => navigate(feature.link)}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
