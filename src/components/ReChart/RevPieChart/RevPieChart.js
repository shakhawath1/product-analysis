import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import useChartData from '../../../hooks/useChartData';

const RevPieChart = () => {
    const [data] = useChartData();

    return (
        <div className='m-auto'>
            <h4 className='text-2xl text-center font-semibold my-5 text-sky-600'>Investment vs Revenue</h4>
            <PieChart width={400} height={350}>
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" />
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={110} outerRadius={130} fill="#82ca9d" label />
                <Tooltip />
            </PieChart>


        </div>
    );
};

export default RevPieChart;