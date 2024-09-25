import { EChart, EChartProps } from '@kbox-labs/react-echarts'
import React, { useEffect, useId, useRef, useState } from 'react'
import { GraphStyledContainer } from '../style_components/GraphStyledContainer'

interface GraphContainerProps extends React.PropsWithChildren {
  shadow?: boolean
  borderRadius?: number
  dataset?: any[]
  echart?: EChartProps,
  echartStyle?: CSSStyleDeclaration
}

const GraphContainer: React.FC<GraphContainerProps> = (props) => {
  const chartRef = useRef<HTMLDivElement>(null)

  return (
    <GraphStyledContainer shadow={props.shadow} borderRadius={props.borderRadius} id={useId()} >
      <EChart
        {...props.echart}
        key={chartRef.current?.id}
        style={{
          ...props.echartStyle,
          height: chartRef.current?.style?.height || 300,
          width: chartRef.current?.style?.width || 500
        }}
      />
    </GraphStyledContainer>
  )
}

export default GraphContainer