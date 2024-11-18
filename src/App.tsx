import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { TeacherDashboard } from './components/dashboard/TeacherDashboard';
import { PrincipalDashboard } from './components/dashboard/PrincipalDashboard';
import { useAuthStore } from './lib/store';
import { Layout } from './components/Layout';

function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          !user ? <LoginForm /> : <Navigate to="/dashboard" />
        } />
        <Route path="/signup" element={
          !user ? <SignupForm /> : <Navigate to="/dashboard" />
        } />
        
        <Route path="/dashboard" element={
          user ? (
            <Layout>
              {user.role === 'student' && <StudentDashboard />}
              {user.role === 'teacher' && <TeacherDashboard />}
              {user.role === 'principal' && <PrincipalDashboard />}
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        } />
        
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;