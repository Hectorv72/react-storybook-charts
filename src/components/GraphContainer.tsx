import { EChart, EChartProps } from '@kbox-labs/react-echarts'
import React, { useEffect, useId, useRef, useState } from 'react'
import { GraphStyledContainer } from '../style_components/GraphStyledContainer'

interface GraphContainerProps extends React.PropsWithChildren {
  shadow?: boolean
  borderRadius?: number
  dataset?: any[]
  dimension?: string;
  metric?: string;
  echart?: EChartProps;
  echartStyle?: CSSStyleDeclaration;
  title?: string
}

const GraphContainer: React.FC<GraphContainerProps> = (props) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(100)

  useEffect(() => {
    if (chartRef.current) {
      const height = chartRef.current.getBoundingClientRect().height;
      setHeight(height)
    }
  }, [chartRef.current])

  return (
    <GraphStyledContainer shadow={props.shadow} borderRadius={props.borderRadius} id={useId()} >
      {/* {
        (props.title && props.title !== '') &&
        (<>
          <div style={{ textAlign: 'center', fontWeight: 'bolder' }}>{props.title}</div>
          <br />
        </>)
      } */}
      <div ref={chartRef} style={{ height: '95%' }}>
        {
          <EChart
            {...props.echart}
            key={chartRef.current?.id}
            style={{
              ...props.echartStyle,
              height: height || 100,
            }}
          />
        }
      </div>
    </GraphStyledContainer>
  )
}

export default GraphContainer