import React from 'react';
import { useAuthStore } from '@/lib/store';
import { Card } from '../ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { Button } from '../ui/Button';

export function TeacherDashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="attendance">Mark Attendance</TabsTrigger>
          <TabsTrigger value="marks">Manage Marks</TabsTrigger>
          <TabsTrigger value="timetable">Timetable</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Today's Classes</h3>
                <ul className="space-y-2">
                  <li>Class 10-A (Mathematics) - 9:00 AM</li>
                  <li>Class 9-B (Mathematics) - 11:00 AM</li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Pending Tasks</h3>
                <ul className="space-y-2">
                  <li>Mark Class 10-A Test Papers</li>
                  <li>Update Class 9-B Attendance</li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Quick Actions</h3>
                <div className="space-y-2">
                  <Button className="w-full">Create Announcement</Button>
                  <Button className="w-full" variant="outline">Send Message to Parents</Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="attendance">
          <Card>
            <div className="p-6">
              <h3 className="font-semibold mb-4">Mark Attendance</h3>
              {/* Attendance marking interface would go here */}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="marks">
          <Card>
            <div className="p-6">
              <h3 className="font-semibold mb-4">Manage Student Marks</h3>
              {/* Marks management interface would go here */}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="timetable">
          <Card>
            <div className="p-6">
              <h3 className="font-semibold mb-4">Your Timetable</h3>
              {/* Timetable view would go here */}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <div className="p-6">
              <h3 className="font-semibold mb-4">Messages</h3>
              {/* Messaging interface would go here */}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}