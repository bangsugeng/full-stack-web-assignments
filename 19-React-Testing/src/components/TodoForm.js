import React from 'react';

const TodoForm = ({ currentTodo, handleOnChangeInput, handleSubmit }) => {
  return (
    <form>
      <input type="text" focus="true" value={currentTodo} onChange={handleOnChangeInput} />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

export default TodoForm;