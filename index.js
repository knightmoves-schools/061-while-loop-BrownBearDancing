function markAsDone(todos) {
  let i = 0;
  while(i < todos.length) {
    todos[i] = "done - " + todos [i];
    i++;
  }
  return todos;
}
const tasks = ["wash dishes", "clean room", "switch laundry"];
const updated = markAsDone(tasks);

console.log(updated);

//should create a function named markAsDone that takes an array of todos and returns the modified array
//should loop through the todos, using a while loop, and prepend the string 'done - ' to each todo description



