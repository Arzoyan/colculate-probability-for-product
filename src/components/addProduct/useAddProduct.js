import { useDispatch } from "react-redux";
import { addItem } from "../../redux/actions";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./constants";

export default function useAddItems() {
  const dispatch = useDispatch();

  const handleReset = () => {
    resetForm();
  };
  const handleSave = () => {
    dispatch(addItem(values));
    handleReset();
  };

  let {
    errors,
    touched,
    values,
    handleSubmit,
    handleChange,
    resetForm,
    setValues,
  } = useFormik({
    initialValues: [initialValues],
    validationSchema: validationSchema,
    validateOnBlur: false,
    onSubmit: () => {
      handleSave();
    },
  });

  const handleAddNewItem = () => {
    setValues([...values, { ...initialValues, id: Date.now() }]);
  };

  const handleChangeField = (value, index) => {
    values[index] = { ...values[index], ...value };
    setValues([...values]);
  };

  const handleRemoveItem = (id) => {
    values = values.filter((item) => item.id !== id);
    setValues(values);
  };

  return {
    errors,
    touched,
    values,
    handleSubmit,
    handleChange,
    handleReset,
    handleAddNewItem,
    handleChangeField,
    handleRemoveItem
  };
}
