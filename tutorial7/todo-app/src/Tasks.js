import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const addTask = async () => {
    if (newTask.trim()) {
      try {
        await addDoc(collection(db, 'tasks'), {
          text: newTask,
          userId: auth.currentUser?.uid,
        });
        setNewTask('');
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(({ id, data }) => (
          <li key={id}>{data.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
