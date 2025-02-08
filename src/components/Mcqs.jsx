import React from 'react';

const Mcqs = () => {
  return (
    <>
     <section className="bg-white px-4 py-16 ">
  <div className="max-w-screen-xl mx-auto ">
    {/* Left Column (60% width) */}
    <div className="p-6 rounded-lg space-y-6">
      <h1 className="text-3xl font-semibold text-gray-900">PakMcqs</h1>

      <p className="text-base text-gray-700">
        With Pak Mcqs Quiz App you can prepare yourself for: Fpsc Test
        Preparation 2020, FIA Test preparation, FIA Sub Inspector test
        preparation, NTS test preparation 2020, PPSC Test Preparation 2020,
        KKPSC test preparation, SPSC test preparation 2020, Bpsc Test, Ots test
        preparation, UTS test preparation, PTS test preparation, CTS test book
        2020, Ats Test, ETEA test mcqs 2020, etea mcqs, medical test
        preparation, entry test preparation for medical, entry test preparation
        for engineering, aptitude test preparation 2020, and other testing
        agencies of Pakistan.
      </p>
      <p className="text-base text-gray-700">
        PakMcqs.com is the Pakistan’s Largest Mcqs website, where you can find
        Mcqs of all Subjects, You can also Submit Mcqs of your recent test and
        with the help of this app its now possible for all our members to take
        quiz while you prepare the Mcqs Section.
      </p>
      <p className="text-base text-gray-700">
        PakMcqs Quiz contain a variety of questions based on various topics like
        general knowledge, Pakistan Studies, Pakistan current affairs,
        Islamiyat, Everyday Science etc and too many other fields such as
        engineering, Mangemnet sciences, Medicals etc are also covered in this
        App.
      </p>

      <div className=" p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">
          FEATURES OF PAKMCQS QUIZ APP:
        </h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>This PakMcqs quiz app contains 40+ Categories</li>
          <li>Category wise selection</li>
          <li>
            A wide range of Multiple Choice Questions and Quiz to test your
            knowledge and Prepare your Self
          </li>
          <li>You can prepare for Mcqs and take the Quiz in same Mcqs.</li>
          <li>check your Progress after completion of any Quiz.</li>
          <li>Practice Quiz of Latest and newly added Questions.</li>
          <li>
            you can Share our App with your Friends this App is free of cost.
          </li>
          <li>You can Use this app only in online mode</li>
          <li>This PakMcqs quiz app has a user-friendly interface</li>
        </ul>
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
</section>;
 
    </>
  );
}

export default Mcqs;
