import { Employee } from "../EmployeeList";

export type EmployeeFormProps = {
  employee: Employee;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
};
