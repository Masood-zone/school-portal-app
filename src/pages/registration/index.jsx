import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RiDeleteBinFill } from "react-icons/ri";

function Registration() {
  const { student } = useSelector((state) => state.student);
  console.log(student.courses);
  const [courses, setCourses] = useState(student.courses);

  const handleRemoveCourse = (courseCode) => {
    console.log(courseCode);
    const newCourses = courses.filter(
      (course) => course.courseCode !== courseCode
    );
    setCourses(newCourses);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="p-4 h-full">
      <div className="flex flex-col items-start justify-between">
        <h1 className="text-[28px] font-medium mb-4">Courses Registered</h1>
        <p className="font-medium text-[22px]">
          Program of Study:{" "}
          <span className="font-light">{student?.programOfStudy}</span>
        </p>
      </div>
      <div className="bg-white mt-5">
        <table className="w-full border-collapse ">
          <thead className="">
            <tr className="bg-white py-6">
              <th className="font-[500] text-left p-3 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                Course Code
              </th>
              <th className="font-[500] text-left p-3 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                Course Name
              </th>
              <th className="font-[500] text-left p-3 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                Credit Hours
              </th>
              <th className="font-[500] text-left p-3 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                Remove
              </th>
            </tr>
          </thead>
          <tbody className="">
            {student?.courses?.map((student) => (
              <tr key={student.id} className="p-2 ">
                <td className="text-[16px] p-4 max-[399px]:text-[14px] max-[399px]:font-normal">
                  {student.courseCode}
                </td>
                <td className="text-[16px] p-4 max-[399px]:text-[14px] max-[399px]:font-normal">
                  {student.courseTitle}
                </td>
                <td className="text-[16px] p-4 max-[399px]:text-[14px] text-center max-[399px]:font-normal">
                  {student.creditHours}
                </td>
                <td className="text-[16px] p-4 max-[399px]:text-[14px]  max-[399px]:font-normal ">
                  <button
                    className="text-[#c31408]"
                    onClick={() => handleRemoveCourse(student.courseCode)}
                  >
                    <RiDeleteBinFill className="w-6 h-6 " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Print and Back to Registration section */}
        <div className="flex items-center justify-center gap-3 py-5">
          <button
            className="bg-[#747474] py-[8px] px-[35px] text-white rounded-md"
            onClick={() => {
              handlePrint();
            }}
          >
            Print
          </button>
          <button className="bg-[#7C08C3] py-[8px] px-[35px] text-white rounded-md">
            Back to Registration
          </button>
        </div>
      </div>
    </section>
  );
}

export default Registration;
