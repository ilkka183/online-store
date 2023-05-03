import { useState } from "react";

interface Field {
  name: string;
  type: "string" | "number";
  value?: string;
}

export default function useFields(fields: Field[]) {

  for (const field of fields) {
    if (field.value === undefined)
      field.value = "";
  }

  const [data, setData] = useState(fields);

  let errors: any = {};

  for (const field of fields) {
    errors[field.name] = "";
  }

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
        console.log(newData);
        setData(newData);
      } 
    }
  }

  const validate = () => {
  }

  return {
    errors,
    getData,
    properties,
    validate,
  }
}
