import axios from 'axios';
import { useEffect, useState } from 'react';

const useChartData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("data.json").then((data) => {
            const loadedData = data.data;

            const chartData = loadedData.map((data) => {
                // console.log(data.investment);
                const dt = {
                    month: data.month,
                    investment: data.investment,
                    sell: data.sell,
                    revenue: data.revenue,
                };
                return dt;
            });
            setData(chartData);
        });
    }, []);
    return [data, setData];
};


export default useChartData;