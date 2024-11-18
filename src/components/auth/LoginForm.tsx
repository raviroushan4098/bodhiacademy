import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useAuthStore } from '@/lib/store';

const loginSchema = z.object({
  identifier: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
  role: z.enum(['student', 'teacher', 'principal', 'parent']),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: 'student',
    },
  });

  const role = watch('role');

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError('');
      
      if (data.role === 'principal' && data.identifier === 'Bodhi' && data.password === '123') {
        setUser({
          id: 'principal-1',
          role: 'principal',
          name: 'Principal',
          phoneNo: '',
          email: 'principal@bodhi.edu',
          username: 'Bodhi',
        });
        navigate('/dashboard');
        return;
      }

      // Here you would implement the actual authentication logic
      // For now, we'll simulate a successful login
      setUser({
        id: '1',
        role: data.role,
        name: 'Test User',
        phoneNo: '',
        email: 'test@bodhi.edu',
      });
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <select
          {...register('role')}
          className="w-full rounded-md border border-gray-300 p-2"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="principal">Principal</option>
          <option value="parent">Parent</option>
        </select>
      </div>

      <div>
        <Input
          type="text"
          placeholder={
            role === 'student' ? 'Registration No' :
            role === 'teacher' ? 'UID' :
            role === 'parent' ? 'Student Registration No' :
            'Username'
          }
          {...register('identifier')}
        />
        {errors.identifier && (
          <p className="text-red-500 text-sm mt-1">{errors.identifier.message}</p>
        )}
      </div>

      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <Button type="submit" className="w-full">
        Login
      </Button>

      <p className="text-center text-sm">
        Don't have an account?{' '}
        <a
          href="/signup"
          className="text-blue-600 hover:text-blue-800"
          onClick={(e) => {
            e.preventDefault();
            navigate('/signup');
          }}
        >
          Sign up
        </a>
      </p>
    </form>
  );
}