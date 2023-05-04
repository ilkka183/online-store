import { useState } from "react";

interface Field {
  name: string;
  value?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
} 

export default function useForm<T>(fields: Field[]) {

  const [validated, setValidated] = useState(false);

  for (const field of fields) {
    if (field.value === undefined)
      field.value = "";
  }

  const [data, setData] = useState(fields);

  const getErrors = (validate: boolean) => {
    let isValid: boolean = true;
    const errors: any = {};
  
    for (const field of data) {
      errors[field.name] = "";
  
      if (validate) {
        if (field.required && field.value === "") {
          errors[field.name] = "Field is required";
          isValid = false;
          continue;
        }
  
        if (field.minLength && field.value && field.value.length < field.minLength ) {
          errors[field.name] = `Field minimum length is ${field.minLength} characters`;
          isValid = false;
          continue;
        }
  
        if (field.maxLength && field.value && field.value.length > field.maxLength ) {
          errors[field.name] = `Field maximum length is ${field.maxLength} characters`;
          isValid = false;
          continue;
        }
      }
    }

    return { isValid, errors }
  }

  const result = getErrors(validated);
  const errors = result.errors;

  const getData: any = () => {
    let values: any = {};

    for (const field of data) {
      values[field.name] = field.value;
    }
  
    return values;
  }

  const properties = (name: string) => {
    const field = data.find(item => item.name === name);

    return {
      value: field?.value,
      onChange: (event:  React.ChangeEvent<HTMLInputElement>) => {
        const newData = data.map(field => field.name === name ? {...field, value: event.target.value} : field);
        setData(newData);
      } 
    }
  }

  const validate = (): boolean => {
    setValidated(true);

    const { isValid } = getErrors(true);

    return isValid;
  }

  const handleSubmit = (onSubmit: (data: T) => void) => {
    if (validate()) {
      const data = getData();
      onSubmit(data);
    }
  }

  return {
    errors,
    handleSubmit,
    properties
  }
}
