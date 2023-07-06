import PageTitle from "../../Shared/PageTitle/PageTitle";
// import profile from "../../../image/Me/Profile.png";

const skills = [
  {
    id: 1,
    name: "bootstrap",
    value: 70,
  },
  {
    id: 2,
    name: "tailwind",
    value: 70,
  },
  {
    id: 3,
    name: "React",
    value: 80,
  },
  {
    id: 4,
    name: "redux",
    value: 90,
  },
  {
    id: 5,
    name: "Rtk query",
    value: 90,
  },
  {
    id: 6,
    name: "react query",
    value: 60,
  },
  {
    id: 7,
    name: "firebase",
    value: 70,
  },
  {
    id: 8,
    name: "Node.js",
    value: 70,
  },
  {
    id: 7,
    name: "express.js",
    value: 80,
  },
  {
    id: 7,
    name: "mongodb database",
    value: 70,
  },
];

const socialLink = [
  {
    id: 1,
    name: "My portfolio",
    link: "https://ephemeral-mermaid-0897f4.netlify.app/",
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/rayhanmujumdar",
  },
  {
    id: 3,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rayhanmujumdar/",
  },
];
const MyPortfolio = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      // style={{
      //   background:
      //     "url(http://demo2.themelexus.com/allegro/wp-content/uploads/2015/01/bg-products.jpg)",
      // }}
    >
      <PageTitle title="MyPortfolio"></PageTitle>
      <div>
        <h1 className="mt-2 text-4xl relative text-stone-700 font-bold inline-block before:w-full before:h-1 before:bg-black  before:absolute before:-bottom-3">
          My Portfolio
        </h1>
        <div className="hero min-h-[90vh] mt-5">
          <div className="hero-content p-0 flex-col lg:flex-row-reverse lg:items-start">
            {/* <div className="avatar md:w-[400px] w-[350px] bg-gray-500 h-[400px] flex justify-center items-center rounded-md">
              <div className="rounded-xl p-2.5 flex mx-auto">
                <img src={profile} alt="" />
              </div>
            </div> */}
            <div className="text-left md:w-3/4 md:my-0 m-2">
              <h1 className="md:text-5xl text-3xl font-bold">
                Hello There,
                <p className="pt-1">Welcome to our website</p>
              </h1>
              <p className="py-4 text-xl">
                My Email Address:{" "}
                <span className="font-bold text-lg text-orange-500">
                  rayhanmujumdar0177@gmail.com
                </span>
              </p>
              <div className="border-2 border-gray-400 p-2 rounded-md md:mx-0 mx-2">
                <h1 className="uppercase font-semibold text-2xl text-gray-600">
                  About:
                </h1>
                <p className="text-xl">
                  Hello, My name is Rayhan Mojumdar, Passionate about crafting
                  immersive and user-centric web experiences, I am a dedicated
                  web developer with expertise in front-end technologies. With a
                  keen eye for aesthetics and a focus on delivering exceptional
                  user experiences, I thrive on translating design concepts into
                  fully functional websites that captivate and engage audiences
                </p>
                <div className="text-xl pt-10">
                  <p className="text-xl pb-3">⭐Technical Proficiencies</p>
                  <ol className="list-disc pl-10">
                    <li>Frontend Development: ReactJS, Redux</li>
                    <li>
                      Backend Development: Node.js, Express.js,
                      Mongodb(database), Mongoose(ODM)
                    </li>
                    <li>
                      Responsive Web Design: Mobile-first approach, Bootstrap,
                      tailwind css, Media Queries
                    </li>
                    <li>Version Control: Git, GitHub</li>
                  </ol>
                </div>
                <div className="text-xl pt-10">
                  <p className="text-xl pb-3">⭐Highlights</p>
                  <ol className="list-disc pl-10">
                    <li>
                      Collaborative mindset, adept at working in
                      cross-functional teams to achieve project objectives
                    </li>
                    <li>
                      Strong problem-solving skills, capable of debugging and
                      optimizing code for performance
                    </li>
                    <li>
                      Detail-oriented approach, ensuring high-quality code that
                      follows industry best practices
                    </li>
                    <li>
                      Continuously learning and adapting to new technologies and
                      emerging trends in web development
                    </li>
                    <li>a</li>
                    <li>
                      Proven track record of successfully delivering projects
                      within scope, budget, and timelines
                    </li>
                  </ol>
                  <div className="pt-5">
                    <strong>Contact email:</strong>
                    <p className="text-sm">rayhanmujumdar0177@gmail.com</p>
                  </div>
                </div>
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
                    <span className="font-bold text-xl text-gray-500">
                      Progress
                    </span>
                  </li>

                  {skills.map((skill) => (
                    <li
                      key={skill.id}
                      className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 items-center"
                    >
                      <span className="font-semibold">{skill.name}</span>
                      <progress
                        className="progress progress-success w-36 h-3"
                        value={skill.value}
                        max="100"
                      ></progress>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col py-20">
        <h1 className="mt-2 lg:text-4xl text-3xl relative text-stone-700 font-bold inline-block before:w-full before:h-1 before:bg-black  before:absolute before:-bottom-3">
          My Portfolio website link
        </h1>
        <div className="overflow-x-auto mt-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>platform</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {socialLink.map((social) => (
                <tr key={social.id}>
                  <td className="font-bold">{social.name}</td>
                  <td>
                    <a
                      className="link-hover"
                      href="https://ephemeral-mermaid-0897f4.netlify.app/"
                    >
                      {social.link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
