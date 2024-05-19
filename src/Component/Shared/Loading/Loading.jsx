import { Spinner } from 'keep-react';

const Loading = ({ className }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Spinner color="failure" size="lg" className={className} />
        </div>
    );
};

export default Loading;
