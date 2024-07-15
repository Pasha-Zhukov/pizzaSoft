import { useMemo } from "react";
import { Employee, Filter } from ".";
import { SortField } from "../Menu";

export const useSortedData = (
  sortField: string,
  sortOrder: string,
  employees: Employee[],
  filter: Filter
): Employee[] => {
  const sortedData = useMemo(() => {
    const filteredData = employees.filter((employee: Employee) => {
      const roleMatch = !filter.role || employee.role === filter.role;
      const archiveMatch = filter.isArchive
        ? employee.isArchive === filter.isArchive
        : true;
      return roleMatch && archiveMatch;
    });

    return [...filteredData].sort((a: Employee, b: Employee) => {
      if (!sortField) return 0;
      if (sortField === SortField.name) {
        if (a.name < b.name) return sortOrder === "asc" ? -1 : 1;
        if (a.name > b.name) return sortOrder === "asc" ? 1 : -1;
        return 0;
      }
      if (sortField === SortField.birthday) {
        const [dayA, monthA, yearA] = a.birthday.split(".").map(Number);
        const [dayB, monthB, yearB] = b.birthday.split(".").map(Number);
        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);
        return sortOrder === "asc"
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      }
      return 0;
    });
  }, [sortField, sortOrder, employees, filter]);

  return sortedData;
};
