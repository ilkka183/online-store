import { ClientAddress } from "../../api/clientAddressApi";

const data: ClientAddress[] = [
  {
    id: 1,
    clientId: 1,
    fullName: "John Smith",
    addressLine1: "Pine street 1",
    addressLine2: "",
    city: "Seattle",
    postalCode: "98101",
    country: "USA",
    phoneNumber: "555 1234"
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
    phoneNumber: "555 1234"
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
    phoneNumber: "555 1234"
  }
];

export default data;
