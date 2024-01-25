
import type { Meta } from '@storybook/react'
import { SortableTable } from './SortableTable';
import { fantasy as fantasyMock, salary as salaryMock } from './SortableTable.mock';

export const fantasy = () => {
    return <SortableTable {...fantasyMock()} />
}

export const salary = () => {
    return <SortableTable {...salaryMock()} />
}

export default {
    title: 'Components/SortableTable',
    component: SortableTable,
  } as Meta<typeof SortableTable>