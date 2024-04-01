import React, { useEffect } from "react";
import Avatar from "../../components/avatar";
import SearchBar from "../../components/searchbar";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../components/notification";
import { resetData, reset } from "../../reduxApp/slices/student/studentSlice";
import Banner from "../../components/banner";

function Home() {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const onResetData = () => {
    dispatch(resetData());
  };
  return (
    <section className="px-5 pt-0 max-[999px]:px-5 max-[999px]:pt-4">
      {/* Top section */}
      <div className="flex justify-between items-center py-1 px-2 rounded-lg max-[999px]:rounded-none">
        {/* Search bar */}
        <SearchBar />
        <div className="flex items-center gap-5 flex-row-reverse">
          {/* Avatar icon */}
          <Avatar data={student} onLogout={onResetData} />
          {/* Notification icon */}
          <Notification />
        </div>
      </div>
      {/* Student Info Section */}
      <div className="">
        <Banner data={student} />
      </div>
      {/* Analytics */}
      <div className=""></div>
    </section>
  );
}

export default Home;
