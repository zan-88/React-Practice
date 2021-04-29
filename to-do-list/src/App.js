import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Donctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    }
  ])


  const deleteTask = (id) => {
    console.log('delete', id);
  }

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
