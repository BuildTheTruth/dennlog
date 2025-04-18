'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const FIELD_PRIORITY = ['시계', '성배', '왕관', '공격력', '원마', '원충', '치확/치피'];

interface Props {
  stats: CharacterStat[];
}

const StatsTable = ({ stats }: Props) => {
  const heads = Array.from(
    stats.reduce((acc, stat) => {
      Object.keys(stat.fields).forEach(field => {
        acc.add(field);
      });

      return acc;
    }, new Set<string>()),
  );

  const sortedHeads = heads.sort((a, b) => {
    const aIndex = FIELD_PRIORITY.indexOf(a);
    const bIndex = FIELD_PRIORITY.indexOf(b);
    return aIndex - bIndex;
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          {sortedHeads.map(head => (
            <TableHead key={head}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {stats.map(stat => (
          <TableRow key={stat.id}>
            <TableCell>{stat.type}</TableCell>
            {heads.map(head => (
              <TableCell key={head}>{stat.fields[head]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StatsTable;
