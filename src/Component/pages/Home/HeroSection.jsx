import { useNavigate } from 'react-router-dom';
import bannerImage from '../../../image/bg1.jpg';
export default function HeroSection() {
    const navigate = useNavigate();
    return (
        <div
            style={{ backgroundImage: `url(${bannerImage})` }}
            className="py-4 rounded-lg p-4 md:p-12 min-h-[450px] bg-cover grid place-items-center grid-cols-12"
        >
            <div className="col-span-12 md:col-span-6">
                <h1 className="font-bold text-3xl md:text-5xl text-white">
                    MSI GeForce RTX 3080 Gaming X Trio 10G
                </h1>
                <p className="text-white my-4">
                    The latest iteration of MSI’s iconic GAMING series once
                    again brings performance, low-noise efficiency, and
                    aesthetics that hardcore gamers have come to recognize and
                    trust.
                </p>
                <button
                    onClick={() => navigate('/products')}
                    className="btn btn-primary bg-teal-600 border-none hover:bg-teal-400"
                >
                    Get purchase
                </button>
            </div>
        </div>
    );
}
