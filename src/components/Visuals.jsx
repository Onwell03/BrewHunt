import React, {Component} from "react";
import { 
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line
} from 'recharts';

const Visuals = ({data}) => {
    const stateCounts = data.reduce((acc, brew) => {
        const state = brew.state_province;
        if (!acc[state]){
            acc[state] = 1
        }else{
            acc[state] ++;
        }
        return acc;
    }, {});

    const stateArray = Object.entries(stateCounts).map(([state, count]) => ({
        name:state,
        states:count
    }));

    const typeCounts = data.reduce((acc, brew) => {
        const types = brew.brewery_type;
        if (!acc[types]){
            acc[types] = 1
        }else{
            acc[types] ++;
        }
        return acc;
    }, {});

    const typeArray = Object.entries(typeCounts).map(([type, count]) => ({
        name:type,
        breweryType:count
    }));

    // console.log(stateArray);
    // console.log(typeArray);


    return (
        <div className="charts">
            <div className="bar-chart">
                <BarChart
                    width={600}
                    height={300}
                    data={stateArray}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="states" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            </div>
            <div className="line-chart">
                <LineChart
                    width={600}
                    height={300}
                    data={typeArray}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="breweryType" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        </div>
    )
};

export default Visuals;
