import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const useGlobalReducer = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobalReducer must be used within a GlobalProvider");
  return context;
};

export default useGlobalReducer;