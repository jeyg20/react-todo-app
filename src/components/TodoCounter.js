import React from "react";
import "../styles/todoCounter.scss";

function TodoCounter({ total, completed }) {
  return (
    <div class="todo-counter">
      {completed === total ? (
        <>
          <h1>You have completed all your {total} todos</h1>
          <span>🎉</span>
        </>
      ) : (
        <h1>
          You have completed {completed} of {total} todos
        </h1>
      )}
    </div>
  );
}

export { TodoCounter };
