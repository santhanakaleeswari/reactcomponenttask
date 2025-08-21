import React from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
}

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  return (
    <table className="border border-gray-300 w-full">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="border px-2 py-1">
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.key} className="border px-2 py-1">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
