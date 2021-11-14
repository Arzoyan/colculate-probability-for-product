import React, { useMemo } from "react";
import { TextField, Button, Paper } from "@material-ui/core/";

import styles from "./addProduct.module.css";
import useAddProduct from "./useAddProduct";
import { itemValues } from "./constants";

export default function AddProduct() {
  const {
    errors,
    values,
    handleSubmit,
    handleReset,
    handleAddNewItem,
    handleChangeField,
    handleRemoveItem,
    touched,
  } = useAddProduct();

  const fieldList = useMemo(() => values, [values]);

  return (
    <div className={styles.itemCont}>
      <Paper elevation={3} className={styles.paper}>
        <>
          {fieldList.map((itemValue, index) => {
            return (
              <div className={styles.card} key={index}>
                {itemValues.map((item) => (
                  <TextField
                    className={styles.input}
                    fullWidth
                    key={item.label}
                    name={item.label}
                    type={item.type}
                    value={itemValue[item.label]}
                    error={
                      touched[index] &&
                      errors[index] &&
                      !!errors[index][item.label]
                    }
                    helperText={
                      touched[index] &&
                      errors[index] &&
                      errors[index][item.label]
                    }
                    onChange={(e) =>
                      handleChangeField(
                        {
                          [item.label]: e.target.value,
                        },
                        index
                      )
                    }
                    variant="outlined"
                    label={item.label}
                    InputLabelProps={{ shrink: true }}
                    placeholder={item.placeholder || ""}
                  />
                ))}
                <Button
                  fullWidth
                  onClick={() => {
                    handleRemoveItem(itemValue.id);
                  }}
                  variant="outlined"
                  color="secondary"
                  disabled={!index}
                >
                  Remove item
                </Button>
              </div>
            );
          })}
        </>

        <div className={styles.btnCont}>
          <Button
            fullWidth
            onClick={handleAddNewItem}
            variant="outlined"
            color="primary"
          >
          Add Item
          </Button>
        </div>
        <div className={styles.btnCont}>
          <Button
            fullWidth
            onClick={handleReset}
            variant="outlined"
            color="secondary"
          >
            Reset
          </Button>
          <Button
            fullWidth
            onClick={handleSubmit}
            variant="outlined"
            color="primary"
          >
            Save
          </Button>
        </div>
      </Paper>
    </div>
  );
}
