
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Don't render anything if not authenticated
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">About PKStudy</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-pkblue">Our Mission</h2>
                <p className="mb-6">
                  PKStudy is dedicated to providing high-quality education to students across India. We believe in empowering students with knowledge and skills that will help them succeed in their academic and professional endeavors. Our mission is to make learning accessible, engaging, and effective for all students.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-pkblue">Our Vision</h2>
                <p className="mb-6">
                  To become the leading educational platform that transforms the way students learn and acquire knowledge. We envision a future where every student has access to personalized, high-quality education that helps them achieve their full potential.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-pkblue">Our Values</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Excellence:</strong> We strive for excellence in everything we do, from our teaching methodologies to our learning materials.</li>
                  <li><strong>Innovation:</strong> We continuously innovate to improve the learning experience for our students.</li>
                  <li><strong>Inclusivity:</strong> We believe that education should be accessible to all, regardless of their background or circumstances.</li>
                  <li><strong>Integrity:</strong> We maintain the highest standards of integrity and ethics in our operations.</li>
                  <li><strong>Student-Centric:</strong> Our students are at the heart of everything we do, and their success is our priority.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-3 text-pkblue">Contact Information</h2>
                <Separator className="mb-3" />
                <div className="space-y-3">
                  <p><strong>Address:</strong> 123 Education Road, Knowledge City, India - 110001</p>
                  <p><strong>Email:</strong> info@pkstudy.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Office Hours:</strong> Monday-Saturday, 9 AM - 6 PM</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-3 text-pkblue">Key Statistics</h2>
                <Separator className="mb-3" />
                <div className="space-y-3">
                  <p><strong>Founded:</strong> 2010</p>
                  <p><strong>Students Enrolled:</strong> 10,000+</p>
                  <p><strong>Courses Offered:</strong> 50+</p>
                  <p><strong>Expert Faculty:</strong> 75+</p>
                  <p><strong>Success Rate:</strong> 95%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Card className="mt-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-pkblue">Our Team</h2>
            <p className="text-center mb-6">
              We have a team of highly qualified professors and education experts who are passionate about teaching and dedicated to student success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-pkblue-light flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-pkblue">RS</span>
                </div>
                <h3 className="font-semibold">Prof. Raj Sharma</h3>
                <p className="text-sm text-gray-600">Director</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-pkblue-light flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-pkblue">MP</span>
                </div>
                <h3 className="font-semibold">Dr. Meena Patel</h3>
                <p className="text-sm text-gray-600">Academic Head</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-pkblue-light flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-pkblue">AK</span>
                </div>
                <h3 className="font-semibold">Prof. Ajay Kumar</h3>
                <p className="text-sm text-gray-600">Technology Head</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-pkblue-light flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-pkblue">SG</span>
                </div>
                <h3 className="font-semibold">Dr. Sunita Gupta</h3>
                <p className="text-sm text-gray-600">Research Director</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
