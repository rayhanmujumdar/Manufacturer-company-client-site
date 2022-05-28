import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import profile from "../../../image/Me/Profile.jpg";

const MyPortfolio = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        background:
          "url(http://demo2.themelexus.com/allegro/wp-content/uploads/2015/01/bg-products.jpg)",
      }}
    >
      <PageTitle title="MyPortfolio"></PageTitle>
      <div>
        <h1 className="mt-2 text-4xl relative text-stone-700 font-bold inline-block before:w-full before:h-1 before:bg-black  before:absolute before:-bottom-3">
          My Portfolio
        </h1>
        <div className="hero min-h-[90vh] mt-5">
          <div className="hero-content p-0 flex-col lg:flex-row-reverse lg:items-start">
            <div className="avatar md:w-[400px] w-[350px] bg-gray-500 h-[400px] flex justify-center items-center rounded-md">
              <div className="rounded-xl p-2.5 flex mx-auto">
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="text-left md:w-3/4 md:my-0 m-2">
              <h1 className="md:text-5xl text-3xl font-bold">
                Hello Brother, My Name is Rayhan Mojumdar
              </h1>
              <p className="py-4 text-xl">
                My Email Address:{" "}
                <span className="font-bold text-lg text-orange-500">
                  rayhanmujumdar0177@gmail.com
                </span>
              </p>
              <div className="border-2 border-gray-400 p-2 rounded-md md:mx-0 mx-2">
                <h1 className="uppercase font-semibold text-2xl text-gray-600">
                  Education details:
                </h1>
                <p className="text-xl">
                  Running Eduction:{" "}
                  <span className="font-bold text-lg text-orange-500 uppercase">
                    Honors (2nd year)
                  </span>
                </p>
                <p className="text-xl">
                  Subject:{" "}
                  <span className="font-bold text-lg text-orange-500 uppercase">
                    Political science
                  </span>
                </p>
                <p className="text-xl">
                  College Name:{" "}
                  <span className="font-bold text-lg text-orange-500 uppercase">
                    Chandpur Puran Bazar Degree College and university
                  </span>
                </p>
              </div>
              <div className="border-2 border-gray-400 p-2 rounded-md mt-2 md:mx-0 mx-2">
                <h1 className="uppercase font-semibold text-2xl text-gray-600">
                  My web development Skill:
                </h1>
                <ul className="uppercase">
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2">
                    <span className="font-bold text-xl text-gray-500">
                      Skill:
                    </span>
                    <span className="font-bold text-xl text-gray-500 lg:block hidden">
                      icon
                    </span>
                    <span className="font-bold text-xl text-gray-500">
                      Progress
                    </span>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">html</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-brands fa-html5"></i>
                    </span>
                    <progress
                      className="progress progress-success w-36 h-3"
                      value="80"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">css</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-brands fa-css3-alt"></i>
                    </span>
                    <progress
                      className="progress progress-success w-36 h-3"
                      value="70"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">bootstrap</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-brands fa-bootstrap"></i>
                    </span>
                    <progress
                      className="progress progress-success w-36 h-3"
                      value="70"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">tailwind</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-solid fa-image-landscape"></i>
                    </span>
                    <progress
                      className="progress progress-success w-36 h-3"
                      value="85"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">javascript</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-brands fa-js"></i>
                    </span>
                    <progress
                      className="progress progress-warning w-36 h-3"
                      value="65"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">github</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-brands fa-github"></i>
                    </span>
                    <progress
                      className="progress progress-success w-36 h-3"
                      value="75"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">js es6</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-brands fa-js"></i>
                    </span>
                    <progress
                      className="progress progress-success w-36 h-3"
                      value="85"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">api</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-solid fa-image-landscape"></i>
                    </span>
                    <progress
                      className="progress progress-success w-36 h-3"
                      value="90"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">error handling</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-solid fa-image-landscape"></i>
                    </span>
                    <progress
                      className="progress progress-success w-36 h-3"
                      value="80"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">react</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-brands fa-react"></i>
                    </span>
                    <progress
                      className="progress progress-success w-36 h-3"
                      value="85"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">React Query</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-brands fa-react"></i>
                    </span>
                    <progress
                      className="progress progress-warning w-36 h-3"
                      value="60"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">React router dom</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-brands fa-react"></i>
                    </span>
                    <progress
                      className="progress progress-success w-36 h-3"
                      value="70"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">axios</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-solid fa-image-landscape"></i>
                    </span>
                    <progress
                      className="progress progress-warning w-36 h-3"
                      value="65"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">firebase</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-solid fa-image-landscape"></i>
                    </span>
                    <progress
                      className="progress progress-success w-36 h-3"
                      value="90"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">Node js (Learning)</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-brands fa-node-js"></i>
                    </span>
                    <progress
                      className="progress progress-error w-36 h-3"
                      value="45"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">express js (Learning)</span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-solid fa-image-landscape"></i>
                    </span>
                    <progress
                      className="progress progress-warning w-36 h-3"
                      value="60"
                      max="100"
                    ></progress>
                  </li>
                  <li className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center">
                    <span className="font-semibold">
                      Mongodb database (Learning)
                    </span>
                    <span className="text-xl lg:block hidden">
                      <i className="fa-solid fa-image-landscape"></i>
                    </span>
                    <progress
                      className="progress progress-warning w-36 h-3"
                      value="65"
                      max="100"
                    ></progress>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[60vh]">
        <h1 className="mt-2 lg:text-4xl text-3xl relative text-stone-700 font-bold inline-block before:w-full before:h-1 before:bg-black  before:absolute before:-bottom-3">
          My Best simple React Project Live Link
        </h1>
        <div className="mt-5 container mx-auto">
          <p className="text-xl">
            project-1:{" "}
            <a
              href="https://my-gym-center.web.app/home"
              target="_blank"
              className="underline text-blue-500"
            >
              MUSCLES MARCO PERSONAL TRAINER
            </a>
          </p>
          <p className="text-xl">
            project-2:{" "}
            <a
              href="https://assignment-11-wirehouse.web.app/home"
              target="_blank"
              className="underline text-blue-500"
            >
              My Choose House
            </a>
          </p>
          <p className="text-xl">
            project-3:{" "}
            <a
              href="https://task-manager-c5f2a.web.app/home"
              className="underline text-blue-500"
              target="_blank"
            >
              Task Manager (simple TODO App)
            </a>
          </p>
          <p className="text-xl">
            project-4:{" "}
            <a
              href="https://assignment-12-full-stack.web.app/home"
              className="underline text-blue-500"
              target="_blank"
            >
              Computer Market (Full Stack Website)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
