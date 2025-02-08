import React from "react";

const Home = () => {
  return (
    <>
      <section className="full-screen px-4 py-8 bg-gray-100">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column (60% width) */}
          <div className="col-span-2 p-6 rounded-lg space-y-6">
            <h1 className="text-3xl font-semibold text-gray-900">
              General Knowledge Quiz Online Test – GK Quiz
            </h1>
            <h2 className="text-xl font-medium text-gray-800">
              General Knowledge Quiz
            </h2>
            <p className="text-base text-gray-700">
              General Knowledge Quiz online Test. These MCQs questions are taken
              from our General Knowledge MCQs section, so you can take the Quiz
              and check your memory. It consists of World Geography, Atmosphere,
              Science & Literature, Events MCQs, Current Affairs MCQs, Pakistan
              Affairs MCQs, and International Organizations. Latest general
              knowledge Quizzes will be shown on top.
            </p>
            <p className="text-base text-gray-700">
              All quizzes are linked with each other. After completing a quiz,
              the next quiz link will be shown at the results of the quiz. We
              guarantee that after clearing all of our Online Quizzes tests, you
              will be able to pass your exam/test with good grades/marks in the
              GK portion of tests conducted by Federal Public Service Commission
              (FPSC), Khyber Pakhtunkhwa Public Service Commission (KPPSC),
              Punjab Public Service Commission (PPSC), Sindh Public Service
              Commission (SPSC), Balochistan Public Service Commission (BPSC),
              Azad Jammu & Kashmir (AJKPSC), National Testing Service of
              Pakistan (NTS), Pak Army, Navy, PAF, ISSB, and other
              organizations. With a good command over General Knowledge, you
              will be able to secure good marks in the GK section of these
              exams.
            </p>
            <p className="text-base text-gray-700 font-semibold">
              Wish you best of luck!
            </p>

            <div className=" p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Quiz Instructions:
              </h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  There will be 10 multiple-choice questions in each test.
                </li>
                <li>
                  Answers will change randomly each time you start the test.
                </li>
                <li>
                  Practice each quiz test at least 3 times if you want to secure
                  high marks.
                </li>
                <li>
                  At the end of the test, you can see your score and rating.
                </li>
                <li>
                  All quizzes are linked with each other, and a new quiz link is
                  given in the result section.
                </li>
                <li>
                  If any answer looks wrong, simply click on the question and
                  comment below it so that we can update it.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column (30% width) */}
          <div className="col-span-1 p-6 space-y-4 border-l-2">
            <h3 className="text-xl font-semibold text-gray-800">
              Available MCQs Categories
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#" className="hover:text-gray-900">
                  English Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Maths Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  General Knowledge MCQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Pakistan Current Affairs MCQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  World Current Affairs MCQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Pak Study Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Islamic Studies Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Computer Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Everyday Science Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Physics Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Chemistry Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Biology Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Pedagogy Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  URDU Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Management Sciences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Finance Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  HRM Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Marketing Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Accounting Mcqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Auditing Mcqs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center pt-6">
  <svg className="animate-bounce w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
</div>

      </section>
    </>
  );
};

export default Home;
