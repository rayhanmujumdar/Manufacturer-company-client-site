import React from 'react';

const Loading = ({className}) => {
    return (
        <div>
            <button className={`btn bg-transparent  border-0 loading ${className}`}></button>
        </div>
    );
};

export default Loading;