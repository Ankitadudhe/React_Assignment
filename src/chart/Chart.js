import React from 'react';
import './chart.css';
import ChartBar from './ChartBar'
const Chart =(props)=>{
    const dataPointValue=props.dataPoint.map(dataPoint=>dataPoint.value);
    const totalmax=Math.max(...dataPointValue);
    return(
<div className="chart">
    {props.dataPoint.map((dataPoint)=> <ChartBar 
    key={dataPoint.label}
    value={dataPoint.value} maxValue={totalmax}
    label={dataPoint.label}
    />)}

</div>
    )
}
export default Chart;