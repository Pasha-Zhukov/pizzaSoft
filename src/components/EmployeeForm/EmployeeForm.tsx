import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import { EmployeeFormProps } from ".";

const phoneNumberMask = [
  "+",
  "7",
  " ",
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const dateMask = [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];

const EmployeeForm: React.FC<EmployeeFormProps> = ({
  employee,
  onChange,
  onSubmit,
}) => {
  const [phoneError, setPhoneError] = useState("");
  const [dateError, setDateError] = useState("");

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const unmaskedValue = value.replace(/\D/g, "");
      if (unmaskedValue.length < 11) {
        setPhoneError("Телефон должен содержать 11 цифр.");
      } else {
        setPhoneError("");
      }
    }

    if (name === "birthday") {
      const unmaskedValue = value.replace(/\D/g, "");
      if (unmaskedValue.length < 8) {
        setDateError("Дата рождения должна содержать 8 цифр.");
      } else {
        setDateError("");
      }
    }

    onChange(e);
  };

  return (
    <form onSubmit={onSubmit} className="employee-form" role="form">
      <input
        required
        placeholder="Имя"
        type="text"
        name="name"
        value={employee.name}
        onChange={onChange}
        className="form-control"
      />
      <MaskedInput
        required
        mask={phoneNumberMask}
        placeholder="Телефон"
        type="text"
        name="phone"
        value={employee.phone}
        onChange={handleValidation}
        className="form-control"
      />
      {phoneError && <span className="error">{phoneError}</span>}
      <MaskedInput
        required
        mask={dateMask}
        placeholder="Дата рождения"
        type="text"
        name="birthday"
        value={employee.birthday}
        onChange={handleValidation}
        className="form-control"
      />
      {dateError && <span className="error">{dateError}</span>}
      <select name="role" value={employee.role} onChange={onChange} required>
        <option defaultValue="" hidden>
          Выберите должность
        </option>
        <option value="waiter">Официант</option>
        <option value="cook">Повар</option>
        <option value="driver">Водитель</option>
      </select>
      <button>
        <label>
          <input
            type="checkbox"
            name="isArchive"
            checked={employee.isArchive}
            onChange={onChange}
            className="form-check-input"
          />
          В архиве
        </label>
      </button>
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default React.memo(EmployeeForm);
