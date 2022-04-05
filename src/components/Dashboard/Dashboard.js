import React from 'react';
import RevAreaChart from '../ReChart/RevAreaChart/RevAreaChart';
import RevBarChart from '../ReChart/RevBarChart/RevBarChart';
import RevPieChart from '../ReChart/RevPieChart/RevPieChart';
import SellLineChart from '../ReChart/SellLineChart/SellLineChart';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-2 gap-20 my-20'>
            <SellLineChart></SellLineChart>
            <RevAreaChart></RevAreaChart>
            <RevBarChart></RevBarChart>
            <RevPieChart></RevPieChart>
        </div>
    );
};

export default Dashboard;