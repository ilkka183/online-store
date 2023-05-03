import { useState } from "react";

interface Field {
  name: string;
  type: "string" | "number";
  value?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
} 

export default function useFields(fields: Field[]) {

  const [validated, setValidated] = useState(false);

  for (const field of fields) {
    if (field.value === undefined)
      field.value = "";
  }

  const [data, setData] = useState(fields);

  const getErrors = (validated: boolean) => {
    let isValid: boolean = true;
    const errors: any = {};
  
    for (const field of data) {
      errors[field.name] = "";
  
      if (validated) {
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
  const isValid = result.isValid;
  const errors = result.errors;

  const getData = () => {
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
    const result = getErrors(true);
    setValidated(true);

    return result.isValid;
  }

  const handleSubmit = (onSubmit: (data: Object) => void) => {
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
