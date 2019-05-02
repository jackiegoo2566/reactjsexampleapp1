import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskControl from './components/TaskControl';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isFormDisplayed: false,
      edittingTask: null
    }
  }

  // componentWillMount () { // before react mounting components
  //   if (localStorage && localStorage.getItem('tasks')){
  //     var tasks = JSON.parse(localStorage.getItem('tasks'));
  //     this.setState({
  //       tasks: tasks
  //     });
  //   }
  // }

  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateId(),
        name: "C++",
        status: false
      },
      {
        id: this.generateId(),
        name: "Java",
        status: true
      },
      {
        id: this.generateId(),
        name: "SQL",
        status: false
      },
      {
        id: this.generateId(),
        name: "C#",
        status: true
      },
    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  openForm = () => {
    if (this.state.isFormDisplayed && this.state.edittingTask !== null) {
      this.setState({
        isFormDisplayed: true,
        edittingTask: null
      });
    } else {
      this.setState({
        isFormDisplayed: !this.state.isFormDisplayed,
        edittingTask: null
      });

    }
    // if (this.state.edittingTask != null) {
    // } else {
    //   this.setState({
    //     isFormDisplayed: true,
    //     edittingTask: null
    //   });
    // }
  }

  onClosingForm = () => {
    this.setState({
      isFormDisplayed: false
    });
  }

  onSubmit = (id, name, status) => {
    var tasks = this.state.tasks;
    var isEditing = id !== '';
    var task = {
      id: isEditing ? id : this.generateId(),
      name: name,
      status: status
    };
    if (isEditing) {
      var edittingTaskIndex = this.findTask(tasks, id);
      tasks[edittingTaskIndex] = task;
    } else {
      tasks.push(task);
    }

    this.setState({
      tasks: tasks,
      edittingTask: null
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  findTask = (tasks, taskId) => {
    var taskIndex = -1;
    tasks.forEach((task, index) => {
      if (task.id === taskId){
        taskIndex = index;
      }
    });

    return taskIndex; 
  }

  onUpdateStatus = (taskId) => {
    var { tasks } = this.state;
    var taskIndex = this.findTask(tasks, taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex].status = !tasks[taskIndex].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  onDeleteItem = (taskId) => {
    var { tasks } = this.state;
    var taskIndex = this.findTask(tasks, taskId);
    if (taskIndex !== -1){
      tasks.splice(taskIndex, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onClosingForm();
  }

  onEditTask = (taskId) => {
    var { tasks } = this.state;
    var taskIndex = this.findTask(tasks, taskId);
    if (taskIndex !== -1) {
      var taskEditting = tasks[taskIndex];
      this.setState({
        edittingTask: taskEditting
      });
      this.openForm();
    }
  }

  render() {
    var { isFormDisplayed, edittingTask } = this.state;
    var taskFormElement = isFormDisplayed 
                          ?  <TaskForm  onSubmit={this.onSubmit} 
                                        isFormDisplayed={isFormDisplayed} 
                                        onClosing={this.onClosingForm }
                                        edittingTask={edittingTask} /> 
                          : '';
    return (
      <div className="container">
        <div className="text-center">
          <h2>Manage tasks</h2>
        </div>
        <div className="row">
          <div className="col-xs-4 col-md-4 col-lg-4">
              { taskFormElement } 
            </div>          
            <div className={isFormDisplayed ? "col-xs-8 col-md-8 col-lg-8" : "col-xs-12 col-md-12 col-lg-12"}>
              <div className="padding-bottom-10">
                <button className="btn btn-primary" onClick={this.openForm}>Add new task</button>
              </div>
              {/* <button className="btn btn-danger" onClick={ this.onGenerateData }>Generate Data</button> */}
              <TaskControl />
              <TaskList 
                        onUpdateStatus={ this.onUpdateStatus }
                        onDeleteItem={this.onDeleteItem} 
                        onEditTask={this.onEditTask}
                        />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
