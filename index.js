function markAsDone(todos) {
  let i = 0;
  while (i < todos.length) {
    todos [i] = 'done - ' + todos [i];
    i++;
  }
  return todos;
}


//should create a function named markAsDone that takes an array of todos and returns the modified array
/should loop through the todos, using a while loop, and prepend the string 'done - ' to each todo description
