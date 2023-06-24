import Footer from '../../Shared/Footer/Footer';
import HomeProduct from './HomeProduct';
import Banner from './Banner';
import Business from './Business';
import CustomerReviews from './CustomerReviews';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import HomeReviews from './HomeReviews';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <PageTitle title={"Home"}></PageTitle>
            <Banner></Banner>
            <HomeProduct></HomeProduct>
            <CustomerReviews></CustomerReviews>
            <Business></Business>
            {user && <HomeReviews></HomeReviews>}
            <Footer></Footer>
        </div>
    );
};

export default Home;