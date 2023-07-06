import bg1 from "../../../image/bg1.jpg";
import bannerImg from "../../../image/bannerImg2.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero min-h-screen md:my-0 my-3">
          <div className="hero-content p-0 flex-col lg:flex-row gap-x-11">
            <div data-aos="fade-right">
              <img
                src={bannerImg}
                className="max-w-sm rounded-lg shadow-2xl"
                alt="graphics card"
              />
            </div>
            <div data-aos="fade-left" className="text-white text-left p-4">
              <h1 className="text-5xl font-bold">
                MSI GeForce RTX 3080 Gaming X Trio 10G
              </h1>
              <p className="py-6">
                The latest iteration of MSI’s iconic GAMING series once again
                brings performance, low-noise efficiency, and aesthetics that
                hardcore gamers have come to recognize and trust.
              </p>
              <button
                onClick={() => navigate("/products")}
                className="btn btn-primary"
              >
                Get purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
