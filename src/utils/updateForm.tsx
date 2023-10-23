import { type Dispatch, type SetStateAction } from "react";

type FormState = {
  [key: string]: string;
};

type SetForm = Dispatch<SetStateAction<FormState>>;

/**
 * Updates the form state with the new value of the input field.
 * @param key - The key of the input field to update in the form state.
 * @param setForm - The state setter function for the form state.
 * @returns A function that updates the form state with the new value of the input field.
 */
export default function updateForm(
  key: string,
  setForm: SetForm
): (e: React.ChangeEvent<HTMLInputElement>) => void {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev: FormState) => ({ ...prev, [key]: e.target.value }));
  };
}
