import { Employee } from ".";

const EmployeeDetails = ({ employee }: { employee: Employee }) => {
  return (
    <>
      <h2>{employee.name}</h2>
      <p>Роль: {employee.role}</p>
      <p>Телефон: {employee.phone}</p>
      <p>Дата рождения: {employee.birthday}</p>
      <p>В архиве: {employee.isArchive ? "Да" : "Нет"}</p>
    </>
  );
};

export default EmployeeDetails;
