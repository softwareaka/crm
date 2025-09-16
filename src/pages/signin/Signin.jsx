import { NavLink } from "react-router-dom";
import projectLogo from "../../assets/project-logo.svg";
import signinImg from "../../assets/signin-img.png";
import rightIcon from "../../assets/right-icon.svg";
import eyeIcon from "../../assets/eye-icon.svg";
import { useState } from "react";

function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-[770px] flex">
      <div className="w-[50%] h-full flex flex-col gap-10 bg-[#3F8CFF] py-16 px-24">
        <div className="flex items-center gap-8">
          <img src={projectLogo} alt="project logo image" />
          <p className="text-white text-3xl font-bold">Woorkroom</p>
        </div>

        <h1 className="text-[40px] text-white font-bold">
          Your place to work <br /> Plan. Create. Control.
        </h1>

        <img src={signinImg} alt="Sign in image" />
      </div>
      <div className="w-[50%] flex flex-col items-center gap-5 py-28 px-36">
        <h2 className="text-[20px] font-bold">Sign In to Woorkroom</h2>

        <form className="w-full flex flex-col gap-7">
          <label className="flex flex-col gap-1.5">
            <span className="text-[0.9rem] text-[#7D8592] font-bold">
              Email Address
            </span>
            <input
              className="border rounded-2xl border-[#D8E0F0] text-[#7D8592] outline-none py-3 px-4"
              type="text"
              placeholder="youremail@gmail.com"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-[0.9rem] text-[#7D8592] font-bold">
              Password
            </span>
            <div className="flex justify-between border rounded-2xl py-3 px-4 border-[#D8E0F0] text-[#7D8592]">
              <input
                className="border-none w-[70%] outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="brave&khoji0708"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={showPassword ? eyeIcon : eyeIcon}
                  alt="Toggle password visibility"
                  className="cursor-pointer w-5 h-5"
                />
              </button>
            </div>
          </label>

          <div className="flex justify-between">
            <label className="flex items-center gap-3.5">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400"
              />
              <span className="text-[#7D8592]">Remember me</span>
            </label>

            <NavLink className="text-[#7D8592]" to={"forgotpassword"}>
              Forgot Password?
            </NavLink>
          </div>

          <div className="flex flex-col items-center gap-8">
            <button className="flex items-center gap-1.5 rounded-2xl py-3.5 px-11 bg-[#3F8CFF] text-white font-bold">
              Sign In <img src={rightIcon} alt="Right icon image" />
            </button>

            <NavLink className="text-[#3F8CFF] font-[600]" to={"createAccount"}>
              Don’t have an account?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
