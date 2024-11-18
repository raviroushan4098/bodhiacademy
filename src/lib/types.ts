export type UserRole = 'student' | 'teacher' | 'principal' | 'parent';

export interface User {
  id: string;
  role: UserRole;
  name: string;
  phoneNo: string;
  profileImage?: string;
  email: string;
}

export interface Student extends User {
  registrationNo: string;
  class: string;
  section: string;
  rollNo: string;
}

export interface Teacher extends User {
  uid: string;
  subjects: string[];
  assignedClasses: {
    class: string;
    section: string;
  }[];
}

export interface Principal extends User {
  username: string;
}

export interface Parent extends User {
  studentRegistrationNo: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  createdBy: string;
  targetRoles: UserRole[];
}

export interface Attendance {
  id: string;
  date: Date;
  studentId: string;
  subject: string;
  teacherId: string;
  present: boolean;
}

export interface Mark {
  id: string;
  studentId: string;
  subject: string;
  examType: string;
  score: number;
  totalMarks: number;
  date: Date;
}

export interface TimeTableSlot {
  subject: string;
  teacherId: string;
  startTime: string;
  endTime: string;
}

export interface TimeTable {
  id: string;
  class: string;
  section: string;
  daySchedule: {
    [key: string]: TimeTableSlot[];
  };
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: Date;
  read: boolean;
}