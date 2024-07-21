import React from "react";
import { removeToDo } from "../features/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Container,
  List,
  TextField,
  Typography,
} from "@mui/material";
function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <Typography
        sx={{
          display: "flex",
          fontSize: "25px",
          justifyContent: "center",
          my: "25px",
        }}
      >
        Todos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          height: "auto",
          width: "auto",
          mx: "100px",
          alignContent: "space-around",
        }}
      >
        {todos.map((todo) => (
          <List
            key={todo.id}
            sx={{
              display: "flex",
              border: 1,
              borderRadius: 2,
              justifyContent: "space-between",
              px: "30px",
              my: "5px",
              backgroundColor: "plum",
              textAlign: "center",
              color: "purple",
              borderColor: "black",
              fontSize: "20px",
            }}
          >
            {todo.text}
            <Button
              variant="contained"
              endIcon="delete"
              sx={{ height: "auto", margin: "-5px" }}
              onClick={() => {
                dispatch(removeToDo(todo.id));
              }}
            >
              X
            </Button>
          </List>
        ))}
      </Box>
    </>
  );
}

export default Todos;
