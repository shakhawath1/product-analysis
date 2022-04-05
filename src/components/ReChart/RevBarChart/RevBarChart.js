import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../../hooks/useChartData';

const RevBarChart = () => {
    const [data] = useChartData();
    return (
        <div>
            <h4 className='text-2xl text-center font-semibold my-5 text-sky-600'>Investment vs Revenue</h4>
            <BarChart
                width={630}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default RevBarChart;