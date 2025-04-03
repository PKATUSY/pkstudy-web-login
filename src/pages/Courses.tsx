
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Book, Clock, Users, ArrowRight } from 'lucide-react';

const Courses = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Sample courses data
  const coursesData = [
    {
      id: 1,
      title: "Mathematics - Advanced Calculus",
      description: "Learn advanced calculus techniques including derivatives, integrals, and differential equations",
      instructor: "Prof. Sharma",
      duration: "4 months",
      students: 120,
      level: "Advanced",
      tags: ["Mathematics", "Calculus"]
    },
    {
      id: 2,
      title: "Physics - Mechanics & Thermodynamics",
      description: "Comprehensive study of classical mechanics and thermodynamic principles",
      instructor: "Dr. Patel",
      duration: "3 months",
      students: 85,
      level: "Intermediate",
      tags: ["Physics", "Mechanics"]
    },
    {
      id: 3,
      title: "Computer Science - Data Structures",
      description: "Introduction to fundamental data structures and algorithms with practical applications",
      instructor: "Prof. Kumar",
      duration: "5 months",
      students: 150,
      level: "Beginner",
      tags: ["Computer Science", "Algorithms"]
    },
    {
      id: 4,
      title: "Chemistry - Organic Chemistry",
      description: "Study of structure, properties, and reactions of organic compounds and materials",
      instructor: "Dr. Gupta",
      duration: "4 months",
      students: 75,
      level: "Intermediate",
      tags: ["Chemistry", "Organic"]
    },
    {
      id: 5,
      title: "English Literature",
      description: "Explore classic and contemporary works of fiction, poetry, and drama",
      instructor: "Mrs. Singh",
      duration: "3 months",
      students: 60,
      level: "All Levels",
      tags: ["English", "Literature"]
    },
    {
      id: 6,
      title: "Hindi Language & Literature",
      description: "Comprehensive study of Hindi language, grammar, and classic literary works",
      instructor: "Mr. Verma",
      duration: "4 months",
      students: 45,
      level: "All Levels",
      tags: ["Hindi", "Literature"]
    }
  ];

  if (!isAuthenticated) {
    return null; // Don't render anything if not authenticated
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Available Courses</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <Badge variant="outline" className="bg-pkblue text-white">
                    {course.level}
                  </Badge>
                </div>
                <CardDescription className="pt-2">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">Instructor: {course.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Book className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">{course.students} students enrolled</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-0">
                {course.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-pkblue-light text-pkblue-dark">
                    {tag}
                  </Badge>
                ))}
                <Button className="w-full mt-4 bg-pkblue hover:bg-pkblue-dark flex items-center justify-center">
                  View Course Details <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
