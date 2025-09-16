import { NavLink } from "react-router-dom";
import projectLogo from "../../assets/project-logo.svg";
import signinImg from "../../assets/signin-img.png";

function Signin() {
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
      <div>
        <h2>Sign In to Woorkroom</h2>

        <form>
          <label>
            <span>Email Address</span>
            <input type="text" placeholder="youremail@gmail.com" />
          </label>

          <label>
            <span>Password</span>
            <input type="password" />
          </label>

          <div>
            <input type="checkbox" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
