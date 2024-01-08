import { useContext } from "react";

import { FormContext } from "../context/FormContext";

export const useFormContext = () => {
    const context = useContext(FormContext);
    return context;
}