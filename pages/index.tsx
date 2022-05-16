import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../src/redux/hooks";
import styles from "../styles/Home.module.css";
import { Box, Button, Typography } from "@mui/material";
import { decrement, increment } from "../src/redux/features/counterSlice";

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  console.log(count);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography>{count}</Typography>
          <Button onClick={() => dispatch(increment())} variant="contained">
            +
          </Button>
          <Button onClick={() => dispatch(decrement())} variant="contained">
            -
          </Button>
        </Box>
      </main>
    </div>
  );
};

export default Home;
