import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <TextField
        label="Новая задача"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Добавить задачу
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <Card>
              <CardContent>
                <ListItemText primary={task} />
                <IconButton onClick={() => handleDeleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
