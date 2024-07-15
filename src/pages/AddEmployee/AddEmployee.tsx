import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employeesSlice";
import EmployeeForm from "../../components/EmployeeForm";

const AddEmployee: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    phone: "",
    birthday: "",
    role: "",
    isArchive: false,
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.birthday && formData.role) {
      dispatch(addEmployee(formData));
      navigate("/");
    } else {
      alert("Заполните обязательные поля!");
    }
  };

  return (
    <>
      <h1>Добавить сотрудника</h1>
      <EmployeeForm
        employee={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddEmployee;
