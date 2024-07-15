export interface Employee {
  id: number;
  name: string;
  role: string;
  phone: string;
  birthday: string;
  isArchive: boolean;
}

export enum Role {
  waiter = "Официант",
  cook = "Повар",
  driver = "Водитель",
}
export interface Filter {
  role: string;
  isArchive: boolean;
}
