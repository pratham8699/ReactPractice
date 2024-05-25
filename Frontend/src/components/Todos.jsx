export function Todos({ todos }) {
  return (
    <>
      <div>
        {todos.map((todo) => {
          return (
            <div className="flex-row-reverse gap-5">
              <h1>{todo.title}</h1>
              <h1>{todo.description}</h1>
              <button>
                {todo.completed == true ? "Completed" : "Mark as Completed"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
