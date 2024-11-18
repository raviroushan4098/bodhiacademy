import React from 'react';
import { useAuthStore } from '@/lib/store';
import { Card } from '../ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { Button } from '../ui/Button';

export function PrincipalDashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, Principal</h1>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="timetable">Timetable</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="p-6">
                <h3 className="font-semibold mb-2">School Statistics</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total Students</span>
                    <span className="font-semibold">1200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Teachers</span>
                    <span className="font-semibold">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Classes</span>
                    <span className="font-semibold">30</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Quick Actions</h3>
                <div className="space-y-2">
                  <Button className="w-full">Create Announcement</Button>
                  <Button className="w-full" variant="outline">Manage Timetable</Button>
                  <Button className="w-full" variant="outline">View Reports</Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Recent Activities</h3>
                <ul className="space-y-2">
                  <li>New teacher joined - Mathematics Department</li>
                  <li>Updated Class 10 timetable</li>
                  <li>Sent announcement to all parents</li>
                </ul>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="teachers">
          <Card>
            <div className="p-6">
              <h3 className="font-semibold mb-4">Manage Teachers</h3>
              {/* Teacher management interface would go here */}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="students">
          <Card>
            <div className="p-6">
              <h3 className="font-semibold mb-4">Student Records</h3>
              {/* Student management interface would go here */}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="timetable">
          <Card>
            <div className="p-6">
              <h3 className="font-semibold mb-4">Manage Timetables</h3>
              {/* Timetable management interface would go here */}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="announcements">
          <Card>
            <div className="p-6">
              <h3 className="font-semibold mb-4">Manage Announcements</h3>
              {/* Announcements management interface would go here */}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}