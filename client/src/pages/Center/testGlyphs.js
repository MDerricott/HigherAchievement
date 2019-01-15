import React from 'react';
import { Group } from '@vx/group';
import { GlyphDot } from '@vx/glyph';
import { LinePath } from '@vx/shape';
// import { genDateValue } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';
import { curveMonotoneX } from '@vx/curve';
import Tooltip from '@material-ui/core/Tooltip'

// const data = genDateValue(4);
// console.log(data)
// const data = {{data.props}}
// const data= [
//     {date: 3, value: 4-2},
//     {date: 2, value: 3},
//     {date: 1, value: 0},
//     {date: 0.1, value: 2},
    
// ]

// accessors
// const date = d => d.date;
// const value = d => d.value;

// // scales
// const xScale = scaleTime({
//   domain: [Math.min(...data.map(date)), Math.max(...data.map(date))]
// });
// const yScale = scaleLinear({
//   domain: [0, Math.max(...data.map(value))]
// });

// // positions
// const x = d => xScale(date(d));
// const y = d => yScale(value(d));

// // colors
// const primary = '#8921e0';
// const secondary = '#00f2ff';
// const contrast = '#ffffff';

export default ({ width, height, data}) => {
  // bounds
//   const xMax = width - margin.left - margin.right;
//   const yMax = height - margin.top - margin.bottom;

const date = d => d.date;
const value = d => d.value;

// scales
const xScale = scaleTime({
  domain:[ 1, 4]
});
const yScale = scaleLinear({
  domain: [0, 4]
});

// positions
const x = d => xScale(date(d));
const y = d => yScale(value(d));

// colors
const primary = '#8921e0';
const secondary = '#00f2ff';
const contrast = '#ffffff';

const xMax = width -20  ;
const yMax = height - 20 ;

  // update scale range to match bounds
  xScale.range([0, xMax]);
  yScale.range([yMax  , 10]);
 

  return (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill={secondary} rx={14} />
      <Group top={5}>
        {/* <LinePath
          data={data}
          x={x}
          y={y}
          stroke={primary}
          strokeWidth={2}
          strokeDasharray="2,2"
          curve={curveBasis}
        /> */}
         <LinePath
          data={data}
          x={x}
          y={y}
          stroke={primary}
          strokeWidth={3}
          curve={curveMonotoneX}
        />
        {data.map((d, i) => {
          const cx = x(d);
          const cy = y(d);
          return (
           <Tooltip
           title={d.value}
           key={i}>
           <g key={`line-point-${i}`}>
              <GlyphDot cx={cx} cy={cy} r={6} fill={contrast} stroke={secondary} strokeWidth={10} />
              <GlyphDot cx={cx} cy={cy} r={6} fill={secondary} stroke={primary} strokeWidth={3} />
              <GlyphDot cx={cx} cy={cy} r={4} fill={contrast} />
            </g>
            </Tooltip>
          );
        })}  */}
      </Group>
    </svg>
  );
};