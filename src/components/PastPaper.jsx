import React from "react";

const PastPaper = () => {
  const pdfFiles = [
    { name: "General Knowledge Quiz", url: "/docs/Pdf_one.pdf" },
    { name: "PAK Study MCQs Quiz", url: "/docs/Pdf_two.pdf" },
    { name: "Islamic Studies Quiz", url: "/docs/Pdf_three.pdf" },
    { name: "Everyday Science Quiz", url: "/docs/Pdf_four.pdf" },
  ];

  return (
    <>
      <section className="bg-gray-100 px-4 py-16 ">
        <div className="max-w-screen-xl mx-auto ">
          {/* Left Column (60% width) */}
          <div className="p-6 rounded-lg space-y-6">
            <h1 className="text-3xl font-semibold text-gray-900">
              PAST PAPERS
            </h1>

            <p className="text-base text-gray-700">
              Prepare yourself from the recent PAST PAPERS. Here you will find
              Important Past Papers of Fpsc, Nts, Kppsc, Ppsc, Spsc, Bpsc, Ots,
              Uts, Pts, Cts, Sts, Ats, etea, Motorway Poice and other testing
              agencies of Pakistan.
            </p>
            <p className="text-base text-gray-700">
              Past papers helps you to get the best marks in the test. Past
              papers often reveal a database of questions commonly used by test
              makers, who frequently shuffle these questions across different
              exams. With the help of previous papers, you can find challenging
              questions and get an idea of how you can improve your weakness.
              Past papers also give an idea of the framework of the question and
              how much time required for one question at the exam time.
            </p>

            <div className=" p-6 space-y-4">
              
              <div className=" bg-gray-100 ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                  Download Important Past Papers
                </h2>
                <div className="grid grid-cols-1  gap-4">
                  {pdfFiles.map((file, index) => (
                    <a
                      key={index}
                      href={file.url}
                      download
                      className=" text-secondary font-medium  hover:text-primary transition duration-300"
                    >
                      {file.name}
                    </a>
                  ))}
                  <div className=" text-gray-600">
                More Past Paper will be added soon
              </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (30% width) */}
          <div className="  p-6 space-y-4"></div>
        </div>
        <div className="justify-self-center">
          <button className=" bg-secondary hover:bg-black text-white px-4 py-2 rounded-md">
            See More
          </button>
        </div>
      </section>
      ;
    </>
  );
};

export default PastPaper;
