import React from 'react';
import { useAuthStore } from '@/lib/store';
import { Card } from '../ui/Card';
import { Calendar } from 'react-calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';

export function StudentDashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="marks">Marks</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Attendance Overview</h3>
                <div className="text-3xl font-bold">85%</div>
                <p className="text-sm text-gray-500">This Month</p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Latest Marks</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Mathematics</span>
                    <span className="font-semibold">92/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Science</span>
                    <span className="font-semibold">88/100</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Upcoming Exams</h3>
                <ul className="space-y-2">
                  <li>Mathematics - Next Monday</li>
                  <li>Science - Next Wednesday</li>
                </ul>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="attendance">
          <Card>
            <div className="p-6">
              <Calendar className="w-full" />
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Attendance Log</h3>
                {/* Attendance log would be populated from the database */}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="marks">
          <Card>
            <div className="p-6">
              <h3 className="font-semibold mb-4">Academic Performance</h3>
              {/* Marks table would be populated from the database */}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="announcements">
          <Card>
            <div className="p-6">
              <h3 className="font-semibold mb-4">Latest Announcements</h3>
              {/* Announcements would be populated from the database */}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}