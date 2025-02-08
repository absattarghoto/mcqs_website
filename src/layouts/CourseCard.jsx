import React from 'react';

const CourseCard = ({ courses }) => {
  return (
    <>
      <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(({ id, title, description, videoUrl }) => (
          <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe className="w-full h-48" src={videoUrl} title={title} frameBorder="0" allowFullScreen></iframe>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <p className="text-gray-600 text-sm mt-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='justify-self-center mt-14'>
      <button className=" bg-secondary hover:bg-black text-white px-4 py-2 rounded-md">
            See More
          </button>
      </div>
    </section> 
    </>
  );
}

export default CourseCard;
