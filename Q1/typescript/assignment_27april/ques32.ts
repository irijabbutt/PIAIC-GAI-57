// 32- Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
const notCompleted = (arr: { completed: boolean; task: string }[]) => {
  const incompleteTasks: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].completed) {
      incompleteTasks.push(arr[i].task);
    }
  }
  return incompleteTasks;
};

const toDoList = [
  { completed: false, task: 'Wash the dishes' },
  { completed: true, task: 'Buy groceries' },
  { completed: false, task: 'Do laundry' },
];

console.log(notCompleted(toDoList))