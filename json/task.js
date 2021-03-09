const task = {
  todo: [
    { title: "wash plate", done: true },
    { title: "clean house", done: false },
    { title: "wash car", done: false },
  ],
  getTaskTodo: () => task.todo.filter((e) => e.done === false),
};

console.log(task.getTaskTodo());
