import { useEffect } from "react";
import { formLogo } from "../../assets/images";
import { Form, NoticeMessage } from "../../components/form";
import { DATA, schema } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../reduxApp/slices/student/studentFxn";
import { toast } from "react-toastify";
import { reset } from "../../reduxApp/slices/student/studentSlice";
import { useNavigate } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.student);

  const onSubmit = (data) => {
    const studentData = {
      fullname: data.fullname,
      indexNumber: data.indexNumber,
      password: data.password,
    };
    dispatch(register(studentData));
    console.log(studentData);
  };

  useEffect(() => {
    dispatch(reset());
    if (!loading && success) {
      toast.success("Registration successful", { position: "top-right" });
      navigate("/login");
    }
    if (error) {
      toast.error(error, { position: "top-right" });
      console.log(error);
    }
  }, [loading, error, success, dispatch, navigate]);

  return (
    <section className="w-screen h-screen flex overflow-hidden">
      {/* Signup content */}
      <div className="w-[55%] bg-[#901AD8] flex flex-col items-center justify-center px-16 max-[999px]:hidden">
        <h1 className="w-full text-white text-[50px] font-extrabold">
          Begin your academic{" "}
          <span className="block text-[36px] font-[500]">journey today!</span>
        </h1>
        <div className="mt-16 w-full">
          <img src={formLogo} alt="form-logo" />
        </div>
      </div>
      {/* Signup section */}
      <div className="w-[45%] h-auto bg-[#1D1D1D] text-white flex items-center justify-center flex-col overflow-y-scroll max-[999px]:w-full max-[999px]:justify-start max-[999px]:pt-5 ">
        <h1 className="text-5xl font-[600] mb-10">Sign Up</h1>
        <div className="w-96 max-[399px]:w-full max-[399px]:px-2  flex flex-col py-2 overflow-hidden h-auto">
          <Form
            schema={schema}
            data={DATA}
            onSubmit={onSubmit}
            title="Sign up"
            loading={loading}
            login={false}
          />
          <div className="mt-10">
            <NoticeMessage
              message=" Already have an account?"
              link="/login"
              linkText="Login"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
