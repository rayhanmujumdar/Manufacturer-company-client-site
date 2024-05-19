import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import Footer from '../../Shared/Footer/Footer';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import ScrollToTop from '../../Shared/ScrollToTop';
import Business from './Business';
import CustomerReviews from './CustomerReviews';
import HeroSection from './HeroSection';
import HomeProduct from './HomeProduct';
import HomeReviews from './HomeReviews';

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <div className="container mx-auto">
                <ScrollToTop></ScrollToTop>
                <PageTitle title={'Home'}></PageTitle>
                {/* <Banner></Banner> */}
                <HeroSection />
                <HomeProduct></HomeProduct>
                <CustomerReviews></CustomerReviews>
                <Business></Business>
                {user && <HomeReviews></HomeReviews>}
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;
