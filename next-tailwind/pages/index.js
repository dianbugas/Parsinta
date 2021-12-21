import React from 'react'

export default function Home() {
  return (
    <div className="max-w-xl">
      <div className="overflow-hidden bg-white border rounded-lg shadow-sm shadow">
        <header className="border-b px-4 py-2.5 bg-gray-50/50 flex items-center justify-between">
          <div>
            <h1 className="font-medium">
              Card title
            </h1>
            <span className="text-gray-500">Lorem ipsum dolor sit amet consectetur.</span>
          </div>
          <a href="#" className="bg-pink-500 hover:bg-pink-700 transition duration-300 focus:outline-none focus:ring focus:ring-pink-200 text-white px-5 py-2.5 rounded-lg font-semibold text-sm">News Task</a>
        </header>
        <section className="px-4 py-2.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, assumenda? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, repudiandae accusantium id soluta nulla veniam molestias. Nemo molestiae illo sunt.
        </section>
        <footer className="px-4 py-2.5 border-t text-gray-500 bg-gray-50/50">Lorem ipsum dolor sit amet consectetur adipisicing elit.</footer>
      </div>
    </div>
  )
}