import { useEffect, useState } from 'react';
import {
    useAuthState,
    useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import UpdateProfile from './UpdateProfile';

const Profile = () => {
    const [sendEmailVerification, error] = useSendEmailVerification(auth);
    useEffect(() => {
        if (error) {
            toast.error(error.message, {
                id: 'error',
            });
        }
    }, [error]);
    const [updateProfile, setUpdateProfile] = useState(false);
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading className="text-black"></Loading>;
    }
    const { displayName, email, emailVerified, photoURL } = user;
    const profile = (
        <div data-aos="zoom-in">
            <PageTitle title="Dashboard/My-Profile"></PageTitle>
            <h1 className="text-2xl text-center mb-3 text-stone-600 font-semibold">
                My Profile
            </h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                {photoURL ? (
                    <div className="avatar flex justify-center pt-6">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photoURL} alt={displayName} />
                        </div>
                    </div>
                ) : (
                    <div className="avatar flex justify-center placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                            <span className="text-3xl">
                                {displayName.slice(0, 1)}
                            </span>
                        </div>
                    </div>
                )}
                <div className="card-body">
                    <h2 className="card-title">{displayName}</h2>
                    <p className="font-semibold text-left">Email: {email}</p>
                    <div className="border border-gray-500 py-2 rounded-md">
                        {emailVerified ? (
                            <p className="text-xl text-green-500 text-center">
                                verified
                            </p>
                        ) : (
                            <div className="flex justify-center items-center gap-x-4">
                                <span className="text-xl text-red-500">
                                    No verify
                                </span>
                                <div
                                    onClick={async () => {
                                        const success =
                                            await sendEmailVerification();
                                        success &&
                                            toast.success('sent email', {
                                                id: 'success',
                                            });
                                    }}
                                >
                                    <i
                                        title="verify email send"
                                        className="fa-solid fa-right-from-bracket cursor-pointer hover:text-gray-500"
                                    ></i>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => setUpdateProfile(true)}
                            className="btn btn-primary mx-auto"
                        >
                            update Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    return updateProfile ? (
        <UpdateProfile
            userName={displayName}
            photoURL={photoURL}
            setUpdateProfile={setUpdateProfile}
        ></UpdateProfile>
    ) : (
        profile
    );
};

export default Profile;
