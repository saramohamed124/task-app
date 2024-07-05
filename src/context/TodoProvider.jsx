import React, { createContext, useContext, useEffect, useState } from 'react';

const TaskContextApp = createContext();

export const useTasks = () => useContext(TaskContextApp);

function TodoProvider({children}) {
    const [todos,setTodo] = useState([]);
    const [editTask,setEditTask] = useState(null)
    const [currentTask, setCurrentTask] = useState("");
    const [filter,setFilter] = useState('all')

    // Get Data From Local Storage
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('Tasks'));
        if (storedTasks) {
            setTodo(storedTasks);
        }
    },[]);

    // Handle Add New Tasks 
    const handleAddnewTask = (todoName) => {
        const newTask = {
            id: Date.now(),
            name: todoName,
            compeleted: false,
        }
        const allTasks = [...todos,newTask]
        window.localStorage.setItem('Tasks', JSON.stringify(allTasks));
        setTodo(allTasks)
    }

    // Handle Delete Task 
    const handleDeleteTask = (taskId) => {
      const newTasks = todos.filter((task) => task.id !== taskId) // Filtering All Tasks its Id Not match Id of Task we need
      localStorage.setItem('Tasks', JSON.stringify(newTasks)); // setnew Tasks in local storage
      setTodo(newTasks);
    };

    // Handle Edit Task => Edit Task by Its Id 
    const handleEditTask = (TaskId) => {
      // Edit Tasks that its id equals to TaskId
      const FoundTasks = todos.find((task)=> task.id === TaskId)
      if(FoundTasks){
        setEditTask(TaskId); // SetEditTas by value of TaskId (id task)
        setCurrentTask(FoundTasks.name) // set Current Task by Task name we find it in FoundTasks
      }
    }
    // Handle Save Task  => After Enable Edit Task Make Save Task
    const handleSaveTask = () => {
      // Store Tasks After Edit Name of It
      const newTasks = todos.map((task) => 
        (task.id === editTask) ?
        { ...task,name : currentTask} // change name of Task and Save it and don't edit on id or compelted Tasks
        : task // if Not Current Element Not make any Changes on It
      );
      setTodo(newTasks); // Set Todo by new Tasks (editedTasks and Task)
      setEditTask(null) // Make Edit Task by null Instead of Id of Current Elemenet
      setCurrentTask('') // make Current Task value by  ''
      localStorage.setItem('Tasks', JSON.stringify(newTasks)); // Store it In Local Storage
    } 
    // handle Compeleted Tasks And Return New Tasks After Handling it
    const handleCompeleted = (TaskId) => {
        const newTasks = todos.map((task)=>(
          task.id === TaskId ? {...task, compeleted:!task.compeleted} : task
        ))
        setTodo(newTasks)
        localStorage.setItem('Tasks', JSON.stringify(newTasks));
    }
    // Store All Tasks After Filter it Compeleted or all
    const tasks = todos.filter((task) => (
      (filter === 'compeleted') ? task.compeleted : true
        ))
    return (
        <TaskContextApp.Provider value={{
          tasks:tasks,
          editTask:editTask,
          currentTask:currentTask,
          setCurrentTask:setCurrentTask,
          setFilter:setFilter,
          handleAddnewTask,
          handleDeleteTask,
          handleEditTask,
          handleSaveTask,
          handleCompeleted}}>{children}</TaskContextApp.Provider>
    );
}

export default TodoProvider;