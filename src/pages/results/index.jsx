import React from "react";
import { useSelector } from "react-redux";
import { notice } from "../../assets/svgs";

function Results() {
  const { student } = useSelector((state) => state.student);

  // Total credit hours
  const totalCreditHours = student?.courses?.reduce((acc, course) => {
    const intValue = parseInt(course.creditHours);
    return acc + intValue;
  }, 0);

  // GPA calculation
  const gradeToPoints = {
    A: 4,
    B: 3,
    C: 2,
    D: 1,
    F: 0,
  };
  const calculateGPA = () => {
    if (totalCreditHours === 0) return 0;

    const totalGradePoints = student?.courses?.reduce((acc, course) => {
      const gradePoint = gradeToPoints[course.grade] || 0;
      const creditHours = parseInt(course.creditHours);
      return acc + (gradePoint + creditHours);
    }, 0);
    return (totalGradePoints / totalCreditHours).toFixed(2);
  };
  const gpa = calculateGPA();
  return (
    <div className="flex flex-col p-4">
      {/* Text */}
      <h1 className="text-2xl font-bold p-4">Results Check List</h1>
      {/* Results details */}
      <div className="w-full bg-[#FFFFFF] flex flex-col px-5 py-5">
        {/* Details */}
        <div className="flex flex-col gap-5">
          {/* Details */}
          <div className="bg-[#E8E8E8] grid grid-cols-2 max-[899px]:grid-cols-1 gap-5 max-w-5xl h-auto p-5 ">
            {/* Name */}
            <div className="text-[18px] max-[399px]:text-[15px] max-[399px]:p-1 py-4 px-2">
              <span className="font-bold">Name of Student:</span>
              <span className="px-2">
                {student ? student?.fullname : "No data available"}
              </span>
            </div>
            {/* Program */}
            <div className="text-[18px] max-[399px]:text-[15px] max-[399px]:p-1 py-4 px-2">
              <span className="font-bold">Program Of Study:</span>
              <span className="px-2">
                {student ? student?.programOfStudy : "No data available"}
              </span>
            </div>
            {/* Index Number */}
            <div className="text-[18px] max-[399px]:text-[15px] max-[399px]:p-1 py-4 px-2">
              <span className="font-bold">Index Number:</span>
              <span className="px-2">
                {student ? student?.indexNumber : "No data available"}
              </span>
            </div>
            {/* Department */}
            <div className="text-[18px] max-[399px]:text-[15px] max-[399px]:p-1 py-4 px-2">
              <span className="font-bold">Level:</span>
              <span className="px-2">
                {student ? student?.level : "No data available"}
              </span>
            </div>
          </div>
        </div>
        {/* Note */}
        <div>
          <p className="text-[18px] flex items-center gap-2 my-3">
            <span>
              <img src={notice} alt="notice-icon" className="" />
            </span>
            <span className="font-bold">NOTE:</span>
            ONLY previous or just ended semester's results is seen.
          </p>
        </div>
        {/* Table */}
        <div className="mt-5">
          <table className="w-full border-collapse">
            <thead className="">
              <tr className="bg-[#E8E8E8] py-5">
                <th className="font-[500] text-left p-1 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                  Course Code
                </th>
                <th className="font-[500] text-left p-1 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                  Course Name
                </th>
                <th className="font-[500] text-left p-1 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                  Credit Hours
                </th>
                <th className="font-[500] text-left p-1 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody className="">
              {student?.courses?.map((student) => (
                <tr key={student.id} className="p-2 border">
                  <td className="text-[16px] p-4 max-[399px]:text-[14px] max-[399px]:font-normal">
                    {student.courseCode}
                  </td>
                  <td className="text-[16px] p-4 max-[399px]:text-[14px] max-[399px]:font-normal">
                    {student.courseTitle}
                  </td>
                  <td className="text-[16px] p-4 max-[399px]:text-[14px] max-[399px]:font-normal">
                    {student.creditHours}
                  </td>
                  <td className="text-[16px] p-4 max-[399px]:text-[14px] max-[399px]:font-normal">
                    {student.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Results Totals */}
          <div className="bg-[#E8E8E8] w-full flex items-center justify-between mt-5">
            <div className="p-4">
              <span className="font-bold">Total Credit Hours:</span>
              <span className="px-2">{totalCreditHours}</span>
            </div>
            <div className="p-4">
              <span className="font-bold">Grade Points Average:</span>
              <span className="px-2">{gpa}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
