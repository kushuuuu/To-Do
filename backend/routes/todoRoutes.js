import { Router } from "express";
import {
  getTodos,
  addTodos,
  updateTodo,
  deleteTodo
} from "../controllers/todoController.js";

const router = Router();

router.get("/", getTodos);
router.post("/", addTodos);
router.patch("/:todoId", updateTodo);
router.delete("/:todoId", deleteTodo);

export default router;
