import { useCallback, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateEmployee } from "../../redux/employeesSlice";
import EmployeeForm from "../../components/EmployeeForm";
import { Employee } from "../../components/EmployeeList";

const EditEmployee: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const employee: Employee | undefined = useSelector(
    (state: { employees: Employee[] }) =>
      state.employees.find((emp: Employee) => emp.id === parseInt(id as string))
  );

  const [formData, setFormData] = useState<Employee>(employee as Employee);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value, type, checked } = e.target as HTMLInputElement;
      setFormData((prevFormData: Employee) => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent): void => {
      e.preventDefault();
      dispatch(
        updateEmployee({
          id: parseInt(id as string),
          updatedEmployee: formData,
        })
      );
      navigate("/");
    },
    [dispatch, formData, id, navigate]
  );

  return (
    <>
      <h1>Редактировать сотрудника</h1>
      <EmployeeForm
        employee={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default EditEmployee;
