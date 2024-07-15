import { Link } from "react-router-dom";
import React, { FC } from "react";
import { SortField, MenuProps } from ".";

import "./Menu.style.scss";

const Menu: FC<MenuProps> = ({
  filter,
  handleFilterChange,
  handleSortChange,
  sortField,
  sortOrder,
}) => {
  return (
    <div className="menu">
      <select
        className="select"
        name="role"
        value={filter.role}
        onChange={handleFilterChange}
      >
        <option value="">Все сотрудники</option>
        <option value="waiter">Официант</option>
        <option value="cook">Повар</option>
        <option value="driver">Водитель</option>
      </select>
      <button>
        <label>
          <input
            type="checkbox"
            name="isArchive"
            checked={filter.isArchive}
            onChange={handleFilterChange}
          />
          В архиве
        </label>
      </button>

      <button onClick={() => handleSortChange(SortField.name)}>
        Сортировать по имени
        {sortField === SortField.name && (sortOrder === "asc" ? "▼" : "▲")}
      </button>
      <button onClick={() => handleSortChange(SortField.birthday)}>
        Сортировать по дате рождения
        {sortField === SortField.birthday && (sortOrder === "asc" ? "▲" : "▼")}
      </button>
      <button>
        <Link to="/add-employee">+ Добавить сотрудника</Link>
      </button>
    </div>
  );
};

export default React.memo(Menu);
