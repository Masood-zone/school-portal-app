import React, { useEffect } from "react";
import { Form, NoticeMessage } from "../../components/form";
import { formLogo } from "../../assets/images";
import { DATA, schema } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { loginStudent } from "../../reduxApp/slices/student/studentFxn";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { reset } from "../../reduxApp/slices/student/studentSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.student);

  const onSubmit = (data) => {
    const loginData = {
      indexNumber: data.indexNumber,
      password: data.password,
    };
    dispatch(loginStudent(loginData));
    console.log(loginData);
  };

  useEffect(() => {
    dispatch(reset());
    if (!loading && success) {
      toast.success("Login successful", { position: "top-right" });
      navigate("/dashboard");
    }
    if (error) {
      toast.error(error, { position: "top-right" });
      console.log(error);
    }
  }, [loading, error, success, navigate, dispatch]);

  return (
    <section className="w-screen h-screen flex overflow-hidden flex-row-reverse">
      {/* Login content */}
      <div className="w-[55%] bg-[#901AD8] flex flex-col items-start justify-center px-16 max-[999px]:hidden">
        <div className="flex items-start justify-start flex-col">
          <h1 className="w-full text-white text-[50px] font-extrabold">
            Welcome to{" "}
            <span className="block text-[36px] font-[500]">student portal</span>
          </h1>
          <p className="text-xs font-[500] text-white">
            Login to access your account
          </p>
        </div>
        <div className="mt-16 w-full">
          <img src={formLogo} alt="form-logo" />
        </div>
      </div>
      {/* Login section */}
      <div className="w-[45%] h-auto bg-[#1D1D1D] text-white flex items-center justify-center flex-col overflow-y-scroll max-[999px]:w-full max-[999px]:justify-start max-[999px]:pt-5">
        <h1 className="text-5xl font-[600] mb-10">Log in</h1>
        <div className="w-96 max-[399px]:w-full max-[399px]:px-2  flex flex-col mb-16 overflow-hidden h-auto py-2">
          <Form
            schema={schema}
            data={DATA}
            onSubmit={onSubmit}
            title="Log in"
            loading={loading}
            login
          />
          <div className="mt-10">
            <NoticeMessage
              message=" Don't have an account?"
              link="/signup"
              linkText="Sign up"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
