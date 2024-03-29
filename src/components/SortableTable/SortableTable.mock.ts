import { SortableTableProps} from  './SortableTable';

export const fantasy = () => ({
    columns: [
        { key: 'name', label: 'Player' },
        { key: 'team', label: 'Team' },
        { key: 'position', label: 'Position' },
        { key: 'value', label: 'Value' },
        { key: 'points', label: 'Points' },
        { key: 'bonusPoints', label: 'BP' },
        { key: 'bonusAttacking', label: 'BA' },
        { key: 'bonusDefending', label: 'BD' },
        { key: 'pointsPerGame', label: 'PPG' },
        { key: 'threeWeekAverage', label: '3WA' },
        { key: 'fiveWeekAverage', label: '5WA' },
        { key: 'selection', label: 'Selection %' },
        { key: 'minutes', label: 'Minutes' },
        { key: 'gamesPlayed', label: 'Games' },
        { key: 'goals', label: 'Goals' },
        { key: 'assists', label: 'Assists' },
    ],
    data: [
        {
            name: 'Carles Gil',
            team: 'New England Revolution',
            position: 'MID',
            value: 10.5,
            points: 100,
            bonusPoints: 50,
            bonusAttacking: 45,
            bonusDefending: 5,
            pointsPerGame: 10,
            threeWeekAverage: 10,
            fiveWeekAverage: 10,
            selection: 20.2,
            minutes: 860,
            gamesPlayed: 10,
            goals: 7,
            assists: 5,
        },
        {
            name: 'Cucho Hernandez',
            team: 'Columbus Crew',
            position: 'FWD',
            value: 10,
            points: 80,
            bonusPoints: 22,
            bonusAttacking: 19,
            bonusDefending: 3,
            pointsPerGame: 8,
            threeWeekAverage: 7.5,
            fiveWeekAverage: 8.33,
            selection: 9.7,
            minutes: 825,
            gamesPlayed: 10,
            goals: 9,
            assists: 3,
        },
    ]
}) satisfies SortableTableProps;

export const salary = () => ({
    columns: [
        { key: 'name', label: 'Player' },
        { key: 'team', label: 'Team' },
        { key: 'salary', label: 'Salary' },
    ],
    data: [
        {
            name: 'Carles Gil',
            team: 'New England Revolution',
            salary: 2000000,
        },
        {
            name: 'Cucho Hernandez',
            team: 'Columbus Crew',
            salary: 1000000,
        }
    ]
 }) satisfies SortableTableProps;