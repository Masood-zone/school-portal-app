import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();
  const { student } = useSelector((state) => state.student);

  return (
    <section className="p-4">
      {/* Courses */}
      <h1 className="text-2xl font-medium py-5">Courses Enrolled</h1>
      <div>
        <div className="flex flex-wrap gap-5 max-[499px]:flex-col max-[499px]:w-full">
          {student?.courses?.map((course, index) => (
            <div
              key={index}
              className="rounded-xl border-2 border-[#A1A1A1] bg-[#E8D4F5] p-4 w-[318px] max-[499px]:w-full h-[180px] flex flex-col"
            >
              <p className="text-xl font-bold flex-1">{course.courseTitle}</p>
              <button
                onClick={() => navigate("/courses")}
                className="px-4 py-1 text-base text-center font-bold text-white bg-[#901AD8] w-20 h-10 rounded-full flex-0"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
