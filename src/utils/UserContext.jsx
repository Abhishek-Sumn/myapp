import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Dummy Dummies", email: "dummy@dummy.com" },
});
export default UserContext;
