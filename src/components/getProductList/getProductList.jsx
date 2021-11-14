import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Paper,
} from "@material-ui/core/";
import styles from "./getProductList.module.css";
import useGetProductList from "./useGetProductList";

export default function GetItemList() {
  const { selectedItems, allItemsCount, handleRefresh } = useGetProductList();

  return (
    <div className={styles.container}>
      <Paper elevation={3}>
        {allItemsCount >= 5 ? (
          <>
            <div className={styles.cardsContainer}>
              {selectedItems.map((item,index) => (
                <div key={`${Date.now()}__${index}`} className={styles.cardCont}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography color="textSecondary">
                        price: {item.price}
                      </Typography>
                      <Typography color="textSecondary">
                        weight: {item.weight}
                      </Typography>
                      <Typography color="primary" component="p">
                        probability: {item.probability}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <Button
              className={styles.refreshBtn}
              fullWidth
              onClick={handleRefresh}
              variant="outlined"
              color="primary"
              disabled={allItemsCount < 6}
            >
              Refresh
            </Button>
          </>
        ) : (
          <h2>
            {`must be at last ${5 - allItemsCount} items to show probabilities`}
          </h2>
        )}
      </Paper>
    </div>
  );
}
