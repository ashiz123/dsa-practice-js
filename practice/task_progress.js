function taskProgress(subtasks){
    let total = subtasks.length;
    let completed = subtasks.filter(s => s.completed).length;

   
  let progress = 0?0: Math.round(completed/total * 100);
    return {
        total: total,
        completed: completed,
        progress: progress
    }
}

// Example usage
let subtasks = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: true }
];
let progress = taskProgress(subtasks);
console.log(`Total: ${progress.total}, Completed: ${progress.completed}, Progress: ${progress.progress}%`);
