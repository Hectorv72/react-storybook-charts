import React, { useRef } from 'react'
import { indicadores_tasas } from '../../../utils/exampleDatasets';
import GraphContainer from '../../../components/GraphContainer';

interface SimpleBarProps {
  shadow?: boolean;
  borderRadius?: number;
  dataset?: any[];
  dimension?: string;
  metric?: string;
  title?: string;
}

const SimpleBar: React.FC<SimpleBarProps> = (props) => {
  const chartRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div style={{ width: 500, height: 500, }}>
        <GraphContainer echart={{
          renderer: 'canvas',
          legend: {},
          tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
          },
          dataset: {
            dimensions: [props.dimension, props.metric],
            source: props.dataset,
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {},
          series: [
            { type: 'bar' }
          ]
        }} borderRadius={props.borderRadius} shadow={props.shadow} title={props.title} />
      </div>
    </>
  )
}

export default SimpleBar