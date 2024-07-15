import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Employee, Role, useSortedData } from ".";
import { SortField } from "../Menu";

import Menu from "../Menu/Menu";

import "./EmployeeList.style.scss";

const roleDictionary: { [key: string]: Role } = {
  waiter: Role.waiter,
  cook: Role.cook,
  driver: Role.driver,
};

const EmployeeList: React.FC = () => {
  const employees = useSelector(
    (state: { employees: Employee[] }) => state.employees
  );

  const [filter, setFilter] = useState<{ role: string; isArchive: boolean }>({
    role: "",
    isArchive: false,
  });
  const [sortField, setSortField] = useState<SortField>(SortField.empty);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value, type, checked } = e.target as HTMLInputElement;

      if (type === "checkbox") {
        setFilter((prev: { role: string; isArchive: boolean }) => ({
          ...prev,
          [name]: checked,
        }));
      } else {
        setFilter((prev: { role: string; isArchive: boolean }) => ({
          ...prev,
          [name]: value as Role,
        }));
      }
    },
    []
  );

  const handleSortChange = useCallback((field: SortField): void => {
    setSortField(field);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  }, []);

  const sortedEmployees = useSortedData(
    sortField,
    sortOrder,
    employees,
    filter
  );
  return (
    <>
      <Menu
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleSortChange={handleSortChange}
        sortField={sortField}
        sortOrder={sortOrder}
      />

      <ul className="employee-list">
        {sortedEmployees.map((employee: Employee) => (
          <Link key={employee.id} to={`/edit/${employee.id}`}>
            <li className="employee-item">
              <h2 className="name">{employee.name}</h2>
              <p>Должность: {roleDictionary[employee.role]}</p>
              <p>Телефон: {employee.phone}</p>
              <p>Дата рождения: {employee.birthday}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default EmployeeList;
