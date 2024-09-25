import React, { useRef } from 'react'
import { indicadores_tasas } from '../../../utils/exampleDatasets';
import GraphContainer from '../../../components/GraphContainer';

interface SimpleBarProps {
  shadow?: boolean;
  chartName?: string;
  borderRadius?: number
}

const SimpleBar: React.FC<SimpleBarProps> = (props) => {
  const chartRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div style={{ width: 500, height: 300, }}>
        <GraphContainer echart={{
          key: chartRef.current?.id,
          title: { text: props.chartName },
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
            dimensions: Object.keys(indicadores_tasas[0]),
            source: indicadores_tasas.sort((a, b) => a.AÑO - b.AÑO),
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {},
          series: [
            { type: 'bar' },
            { type: 'bar' },
            { type: 'bar' },
          ]
        }} borderRadius={props.borderRadius} shadow={props.shadow} />
      </div>
    </>
  )
}

export default SimpleBar