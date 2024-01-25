import { Center, Group, ScrollArea, Table, Text, TextInput, UnstyledButton, keys, rem } from "@mantine/core";
import { IconChevronDown, IconChevronUp, IconSearch, IconSelector } from "@tabler/icons-react";
import { useState } from "react";
import classes from './SortableTable.module.css';

export interface SortableTableProps {
    columns: { key: string, label: string }[]
    data: any[]
}

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <Table.Th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group justify="space-between">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData(data: any[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key: keyof typeof item) => item[key].toString().toLowerCase().includes(query))
    );
}

function sortData(data: any[], payload: { sortBy: keyof any | null; reversed: boolean; search: string; }) {
    const { sortBy } = payload;

    if (!sortBy)
        return filterData(data, payload.search);

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return typeof a[sortBy] === 'string' ? b[sortBy].localeCompare(a[sortBy]) : (b[sortBy] > a[sortBy] ? -1 : 1);
            }
            return typeof a[sortBy] === 'string' ? a[sortBy].localeCompare(b[sortBy]) : (a[sortBy] > b[sortBy] ? -1 : 1);
        }),
        payload.search
    )
}

export const SortableTable: React.FC<SortableTableProps> = ({ columns, data }: SortableTableProps) => {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof any | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: keyof any) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }))
    };

    const rows = sortedData.map((row) => {
        return (
            <Table.Tr key={Object.keys(row)[0]}>
                {columns.map(({ key }) => <Table.Td key={key}>{row[key]}</Table.Td>)}
            </Table.Tr>
        )
    });

    return (
        <ScrollArea>
            <TextInput
                placeholder="Search..."
                mb="md"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
                <Table.Thead>
                    <Table.Tr>
                        {columns.map(({ key, label }) => (
                            <Th
                                sorted={sortBy === key}
                                reversed={reverseSortDirection}
                                onSort={() => setSorting(key)}
                            >
                                {label}
                            </Th>
                        ))}
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    )
}