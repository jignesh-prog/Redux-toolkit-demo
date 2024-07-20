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
          display: "block",
          textAlign: "center",
          position: "relative",
          backgroundColor: "plum",
          margin: "auto",
          justifyItems: "center",
        }}
      >
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <Button
              variant="contained"
              endIcon="delete"
              sx={{ position: "absolute", right: "50px", mb: "10px" }}
              onClick={() => {
                dispatch(removeToDo(todo.id));
              }}
            >
              X
            </Button>
          </li>
        ))}
      </Box>
    </>
  );
}

export default Todos;
