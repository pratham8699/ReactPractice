// const zod = require("zod");
import z from "zod";
// const createTodo = zod.object({
//   title: zod.string(),
//   description: zod.string(),
// });

// const updateTodo = zod.object({
//   id: zod.string(),
// });

// module.exports = {
//   createTodo: createTodo,
//   updateTodo: updateTodo,
// };
export const createTodo = z.object({
  title: z.string(),
  description: z.string(),
});

export const updateTodo = z.object({
  id: z.string(),
});
