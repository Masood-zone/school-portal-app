import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";

function Payments() {
  const { student } = useSelector((state) => state.student);

  return (
    <div className="flex flex-col p-4">
      {/* Text */}
      <h1 className="text-2xl font-bold p-4">Payments</h1>
      {/* Table */}
      <div className="w-full bg-[#FFFFFF] flex flex-col px-5 py-5">
        {/* Student Details */}
        <div className="flex flex-col gap-5">
          <h2 className="py-3 border-b border-b-black text-[24px] font-[500] max-[399px]:text-[18px]">
            Student details
          </h2>
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
              <span className="font-bold">Department:</span>
              <span className="px-2">
                {student ? student?.department : "No data available"}
              </span>
            </div>
          </div>
        </div>
        {/* Payment Info */}
        <div className="flex flex-col gap-5 mt-16">
          <h2 className="py-3 border-b border-b-black text-[24px] font-[500] max-[399px]:text-[18px]">
            Payment info
          </h2>
          <div className="">
            <table className="w-full border-collapse">
              <thead className="">
                <tr className="bg-[#E8E8E8]">
                  <th className="font-bold text-left p-1 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                    Payment Type
                  </th>
                  <th className="font-bold text-left p-1 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                    Amount
                  </th>
                  <th className="font-bold text-left p-1 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                    Amount (GHS)
                  </th>
                  <th className="font-bold text-left p-1 text-[20px] max-[399px]:text-[15px] max-[399px]:font-normal">
                    Balance (GHS)
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {/* Payment */}
                {student?.payments?.map((payment) => (
                  <tr key={payment.id} className="p-2 border border-black">
                    <td className="text-[16px] p-2 max-[399px]:text-[14px] max-[399px]:font-normal">
                      {payment.paymentType}
                    </td>
                    <td className="text-[16px] p-2 max-[399px]:text-[14px] max-[399px]:font-normal">
                      {moment(payment.date).format("LL")}
                    </td>
                    <td className="text-[16px] p-2 max-[399px]:text-[14px] max-[399px]:font-normal">
                      {payment.amount}
                    </td>
                    <td className="text-[16px] p-2 max-[399px]:text-[14px] max-[399px]:font-normal">
                      {payment.balance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
