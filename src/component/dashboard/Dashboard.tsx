import React from 'react';
import { Image } from 'antd';


import dashboard from '../../../public/images/illustration-dashboard.png';



const Dashboard: React.FC = () => {

    return (
        <>
            <Image
                width={700}
                src={dashboard}
                preview={false}
            />
        </>
    );
};

export default Dashboard;