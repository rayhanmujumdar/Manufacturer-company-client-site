import { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';

export default function ForgetPassword() {
    const [sendPasswordResetEmail, sending, resetError] =
        useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (resetError) {
            toast.error(resetError.message, {
                id: 'error',
            });
        }
    }, [resetError]);
    const handleResetPassword = async e => {
        e.preventDefault();
        await sendPasswordResetEmail(email);
        if (resetError) {
            toast.error('Sent not email', {
                id: 'error',
            });
        } else {
            toast.success('Sent email', {
                id: 'success',
            });
            navigate('/login', { replace: true });
        }
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="join">
                        <h1 className="text-2xl font-bold pb-3">
                            Reset password mail
                        </h1>
                        <form
                            onSubmit={handleResetPassword}
                            className="flex justify-center items-center"
                        >
                            <input
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                className="input join-item w-96"
                                placeholder="Email"
                            />
                            <button
                                disabled={sending}
                                type="submit"
                                className="btn join-item rounded-r-full"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
