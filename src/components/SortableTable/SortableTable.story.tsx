
import type { Meta } from '@storybook/react'
import { SortableTable } from './SortableTable';
import { standard } from './SortableTable.mock';

export const generated = () => {
    return <SortableTable {...standard()} />
}

export default {
    title: 'Components/SortableTable',
    component: SortableTable,
  } as Meta<typeof SortableTable>