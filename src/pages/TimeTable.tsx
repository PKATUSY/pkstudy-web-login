
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from '@/components/ui/card';

const TimeTable = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Sample timetable data
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const timeSlots = ["9:00 AM - 10:00 AM", "10:15 AM - 11:15 AM", "11:30 AM - 12:30 PM", "1:30 PM - 2:30 PM", "2:45 PM - 3:45 PM"];
  
  const timetableData = {
    "Monday": [
      { subject: "Mathematics", teacher: "Prof. Sharma" },
      { subject: "Physics", teacher: "Dr. Patel" },
      { subject: "Computer Science", teacher: "Prof. Kumar" },
      { subject: "English", teacher: "Mrs. Singh" },
      { subject: "Chemistry Lab", teacher: "Dr. Gupta" }
    ],
    "Tuesday": [
      { subject: "Physics", teacher: "Dr. Patel" },
      { subject: "Chemistry", teacher: "Dr. Gupta" },
      { subject: "Mathematics", teacher: "Prof. Sharma" },
      { subject: "Computer Lab", teacher: "Prof. Kumar" },
      { subject: "Hindi", teacher: "Mr. Verma" }
    ],
    "Wednesday": [
      { subject: "Computer Science", teacher: "Prof. Kumar" },
      { subject: "Physics Lab", teacher: "Dr. Patel" },
      { subject: "Mathematics", teacher: "Prof. Sharma" },
      { subject: "English", teacher: "Mrs. Singh" },
      { subject: "Chemistry", teacher: "Dr. Gupta" }
    ],
    "Thursday": [
      { subject: "Chemistry", teacher: "Dr. Gupta" },
      { subject: "Mathematics", teacher: "Prof. Sharma" },
      { subject: "Physics", teacher: "Dr. Patel" },
      { subject: "Hindi", teacher: "Mr. Verma" },
      { subject: "Computer Science", teacher: "Prof. Kumar" }
    ],
    "Friday": [
      { subject: "Mathematics Lab", teacher: "Prof. Sharma" },
      { subject: "Physics", teacher: "Dr. Patel" },
      { subject: "Chemistry", teacher: "Dr. Gupta" },
      { subject: "English", teacher: "Mrs. Singh" },
      { subject: "Computer Science", teacher: "Prof. Kumar" }
    ],
    "Saturday": [
      { subject: "Computer Lab", teacher: "Prof. Kumar" },
      { subject: "Mathematics", teacher: "Prof. Sharma" },
      { subject: "Physics", teacher: "Dr. Patel" },
      { subject: "Chemistry", teacher: "Dr. Gupta" },
      { subject: "Hindi", teacher: "Mr. Verma" }
    ]
  };

  if (!isAuthenticated) {
    return null; // Don't render anything if not authenticated
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Class Time Table</h1>
        
        <Card className="overflow-x-auto">
          <Table>
            <TableCaption>Your weekly class schedule</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Time</TableHead>
                {weekdays.map((day) => (
                  <TableHead key={day} className="text-center">{day}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {timeSlots.map((timeSlot, index) => (
                <TableRow key={timeSlot}>
                  <TableCell className="font-medium">{timeSlot}</TableCell>
                  {weekdays.map((day) => {
                    const classInfo = timetableData[day][index];
                    return (
                      <TableCell key={day} className="text-center">
                        <div className="font-medium">{classInfo.subject}</div>
                        <div className="text-xs text-gray-500">{classInfo.teacher}</div>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default TimeTable;
