import express from "express";
import { addTodo } from "../middleware/add.midleware.js";
import { updateTodo } from "../middleware/update.middleware.js";
import { markAsCompleted as validateMarkAsCompleted } from "../middleware/markAsCompleted.middleware.js";
import { deleteTodo } from "../middleware/delete.middleware.js";
import { getTodo } from "../middleware/get.middleware.js";

import { addtodo } from "../services/add.services.js";
import { gettodo } from "../services/get.services.js";
import { updatetodo } from "../services/update.services.js";
import { markAsCompleted } from "../services/markAsCompleted.services.js";
import { deletetodo } from "../services/delete.services.js";

const router = express.Router();

router.post("/", addTodo, addtodo);
router.get("/", gettodo);
router.put("/:id", updateTodo, updatetodo);
router.patch("/:id/complete", validateMarkAsCompleted, markAsCompleted);
router.delete("/:id", deleteTodo, deletetodo);

export default router;