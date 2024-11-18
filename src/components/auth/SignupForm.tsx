import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserRole } from '@/lib/types';

const studentSchema = z.object({
  role: z.literal('student'),
  registrationNo: z.string().min(1, 'Required'),
  name: z.string().min(1, 'Required'),
  class: z.string().min(1, 'Required'),
  section: z.string().min(1, 'Required'),
  rollNo: z.string().min(1, 'Required'),
  phoneNo: z.string().min(10, 'Invalid phone number'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  profileImage: z.instanceof(FileList).optional(),
});

const teacherSchema = z.object({
  role: z.literal('teacher'),
  uid: z.string().min(1, 'Required'),
  name: z.string().min(1, 'Required'),
  subject: z.string().min(1, 'Required'),
  phoneNo: z.string().min(10, 'Invalid phone number'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  profileImage: z.instanceof(FileList).optional(),
});

const signupSchema = z.discriminatedUnion('role', [
  studentSchema,
  teacherSchema,
]);

type SignupFormData = z.infer<typeof signupSchema>;

export function SignupForm() {
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors }, watch } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: 'student',
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      setError('');
      // Here you would typically make an API call to create the user
      console.log('Form data:', data);
      
      // Handle file upload if present
      const profileImage = data.profileImage?.[0];
      if (profileImage) {
        // Handle image upload
      }
      
    } catch (err) {
      setError('Failed to create account');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <select
          {...register('role')}
          onChange={(e) => setRole(e.target.value as 'student' | 'teacher')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>

      {role === 'student' ? (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">Registration Number</label>
            <input
              type="text"
              {...register('registrationNo')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.registrationNo && (
              <p className="mt-1 text-sm text-red-600">{errors.registrationNo.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Class</label>
            <input
              type="text"
              {...register('class')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.class && (
              <p className="mt-1 text-sm text-red-600">{errors.class.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Section</label>
            <input
              type="text"
              {...register('section')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.section && (
              <p className="mt-1 text-sm text-red-600">{errors.section.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Roll Number</label>
            <input
              type="text"
              {...register('rollNo')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.rollNo && (
              <p className="mt-1 text-sm text-red-600">{errors.rollNo.message}</p>
            )}
          </div>
        </>
      ) : (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">UID</label>
            <input
              type="text"
              {...register('uid')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.uid && (
              <p className="mt-1 text-sm text-red-600">{errors.uid.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              {...register('subject')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
            )}
          </div>
        </>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          {...register('name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          {...register('phoneNo')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.phoneNo && (
          <p className="mt-1 text-sm text-red-600">{errors.phoneNo.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          {...register('password')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Profile Image</label>
        <input
          type="file"
          accept="image/*"
          {...register('profileImage')}
          className="mt-1 block w-full"
        />
      </div>

      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign Up
      </button>
    </form>
  );
}