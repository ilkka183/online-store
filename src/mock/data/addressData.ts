import { Address } from "../../api/addressApi";

const data: Address[] = [
  {
    id: 1,
    clientId: 1,
    fullName: "John Smith",
    addressLine1: "Pine street 1",
    addressLine2: "",
    city: "Seattle",
    postalCode: "98101",
    country: "USA",
    phoneNumber: "555 1234",
    isDefault: true
  },
  {
    id: 2,
    clientId: 1,
    fullName: "John Smith",
    addressLine1: "Rock street 1",
    addressLine2: "",
    city: "Denver",
    postalCode: "80014",
    country: "USA",
    phoneNumber: "555 1234",
    isDefault: false
  },
  {
    id: 3,
    clientId: 1,
    fullName: "John Smith",
    addressLine1: "North street 1",
    addressLine2: "",
    city: "Chicago",
    postalCode: "60007",
    country: "USA",
    phoneNumber: "555 1234",
    isDefault: false
  }
];

export default data;
