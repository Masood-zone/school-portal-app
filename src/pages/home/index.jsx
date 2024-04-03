import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/banner";
import { reset } from "../../reduxApp/slices/student/studentSlice";
import { paid, payable } from "../../assets/svgs";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { student } = useSelector((state) => state.student);

  const payments = student?.payments;
  const totalPayable = payments?.reduce(
    (acc, payment) => acc + parseInt(payment.amount),
    0
  );
  const totalPaid = payments?.reduce(
    (acc, payment) => acc + parseInt(payment.balance),
    0
  );
  console.table(totalPaid, totalPayable);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <section className="px-5 py-2 pt-0 max-[999px]:px-5 max-[999px]:pt-4">
      {/* Student Info Section */}
      <div className="">
        <Banner data={student} />
      </div>
      {/* Analytics */}
      <div className="pt-5 max-[499px]:p-1">
        <h1 className="text-2xl font-bold py-5 max-[499px]:text-lg max-[499px]:py-1">
          Payments
        </h1>
        <div className="flex items-center justify-start gap-5 max-[499px]:flex-col max-[499px]:items-start max-[499px]:justify-start">
          {/* Cards */}
          <div className="rounded-xl flex flex-col items-center justify-center w-56 h-56 border-2 border-[#A1A1A1] bg-white">
            <img src={payable} alt="amount-payable" className="w-28 h-28" />
            <p className="text-[20px] py-2 font-bold">GHS{totalPayable}</p>
            <p className="text-[15px] font-semibold">Total Payable</p>
          </div>
          <div className="rounded-xl flex flex-col items-center justify-center w-56 h-56 border-2 border-[#A1A1A1] bg-white">
            <img src={paid} alt="amount-paid" className="w-28 h-28" />
            <p className="text-[20px] py-2 font-bold">GHS{totalPaid}</p>
            <p className="text-[15px] font-semibold">Total Paid</p>
          </div>
        </div>

        {/* Courses */}
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold py-5 max-[499px]:text-lg max-[499px]:py-1">
              Enrolled Courses
            </h1>
            <button
              onClick={() => navigate("/courses")}
              className="px-4 py-1 text-base text-center font-bold rounded-full flex-0"
            >
              See all
            </button>
          </div>
          <div className="flex flex-wrap gap-5 max-[499px]:flex-col">
            {student?.courses?.slice(0, 3).map((course, index) => (
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
      </div>
    </section>
  );
}

export default Home;
