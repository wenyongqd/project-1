import { Suspense } from 'react';
import AboutLoading from './loading';

export default function AboutPage() {
  return (
    <Suspense fallback={<AboutLoading />}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="mb-4">
          Welcome to our company! We are a team of passionate developers dedicated to creating
          innovative solutions for modern web applications.
        </p>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">John Doe</h4>
              <p className="text-sm text-gray-600">Lead Developer</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">Jane Smith</h4>
              <p className="text-sm text-gray-600">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
