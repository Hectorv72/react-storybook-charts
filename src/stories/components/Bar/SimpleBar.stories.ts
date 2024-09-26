import type { Meta, StoryObj } from '@storybook/react';

import SimpleBar from './SimpleBar';
import { indicadores_tasas } from '../../../utils/exampleDatasets';

const datasets = [
  { label: 'INDICADORES SALUD TASAS', dataset: indicadores_tasas },
]

const datasetMap = datasets.reduce((acc, item) => {
  acc[item.label] = item.dataset;
  return acc;
}, {} as Record<string, any>);

const meta = {
  title: 'Example/SimpleBar',
  component: SimpleBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shadow: { control: 'boolean' },
    borderRadius: { control: 'select', options: [1, 2, 3, 4, 5, 10, 15, 20, 30, 40, 50] },
    dataset: { control: 'select', options: datasets.map(item => item.label), mapping: datasetMap },
    dimension: { control: 'select', options: Object.keys(indicadores_tasas[0]) },
    metric: { control: 'select', options: Object.keys(indicadores_tasas[0]) }
  },
} satisfies Meta<typeof SimpleBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    shadow: false,
    borderRadius: 10,
    dataset: datasets[0].dataset,
    dimension: 'AÑO',
    metric: 'TASA DE NATALIDAD'
  },
};
