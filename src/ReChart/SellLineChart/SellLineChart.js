import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const SellLineChart = () => {
    const [data] = useChartData();


    return (
        <div>
            <h4 className='text-xl text-center font-semibold my-5'>MONTH WISE SELL</h4>
            <LineChart width={630} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        </div>
    );
};

export default SellLineChart;