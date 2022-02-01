import React from 'react';
import Button from './components/Button';
import App from '../layouts/App';
export default function Home() {
  return (
    <div className="space-x-2">
      <Button>Primary 2</Button>
      <Button className="bg-pink-600 focus:ring-pink-200 hover:bg-pink-700">Secondary</Button>
      <Button className="text-black bg-white border-gray-500 focus:ring-gray-500 hover:bg-gray-500">White</Button>
    </div>
  )
}

Home.getLayout = page => <App children={page} />;