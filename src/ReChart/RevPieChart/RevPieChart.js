import React from 'react';
import { Pie, PieChart } from 'recharts';
import useChartData from '../../hooks/useChartData';

const RevPieChart = () => {
    const [data] = useChartData();
    const data1 = data.revenue;

    return (
        <div>
            <h4 className='text-xl text-center font-semibold my-5'>Investment vs Revenue</h4>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <PieChart width={400} height={400}>
                <Pie data={data1} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data1} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
            {/* </ResponsiveContainer> */}

        </div>
    );
};

export default RevPieChart;