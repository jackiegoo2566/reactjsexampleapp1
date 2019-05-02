import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';

class TaskForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
        id: '',
        name: '',
        status: false
    };
  }

  componentWillMount () {
    if (this.props.edittingTask != null) {
      var edittingTask = this.props.edittingTask;
      this.setState({
        id: edittingTask.id,
        name: edittingTask.name,
        status: edittingTask.status
      });
    } else {
      this.setState({
        id: '',
        name: '',
        status: false
      });
    }
  }

  componentWillReceiveProps (prop) {
    console.log(prop);
    if (prop && prop.edittingTask) {
      var edittingTask = prop.edittingTask;
      this.setState({
        id: edittingTask.id,
        name: edittingTask.name,
        status: edittingTask.status
      });
    } else if (!prop.edittingTask) {
      this.setState({
        id: '',
        name: '',
        status: false
      });
    }
  }

  onClosing = () => {
    this.props.onClosing();
  }

  onHandleChange = (event) => {
    var target = event.target;
    this.setState({
        [target.name]: target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    // this.props.onSubmit(this.state.id, this.state.name, this.state.status === 'true');
    var newTask = {
      id: this.state.id,
      name: this.state.name,
      status: this.state.status
    };
    this.props.onAddTask(newTask);

    this.onClear();
    this.onClosing();
  }

  onClear = () => {
    this.setState({
        name: '',
        status: false

    })
  }

  render () {
    if(!this.props.isFormDisplayed) return null;
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    {/* { !this.state.id ? 'Thêm Công Việc' : 'Cập Nhật Công Việc' } */}
                    { this.state.id === '' ? 'Create new Task' :'Update Task'}
                    <span
                        className="fa fa-times-circle text-right"
                        onClick={this.onClosing}
                    >x</span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label>Tên:</label>
                        <input  type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={ this.onHandleChange }
                        />
                    </div>
                    <label>Trạng Thái:</label>
                    <select className="form-control"
                            value={this.state.status}
                            onChange={this.onHandleChange}
                            name="status"
                    >
                        <option value={true}>Quất</option>
                        <option value={false}>Từ từ rồi quất</option>
                    </select><br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">
                            <span className="fa fa-plus mr-5"></span>Lưu Lại
                        </button>&nbsp;
                        <button type="button" onClick={ this.onClear } className="btn btn-danger">
                            <span className="fa fa-close mr-5"></span>Hủy Bỏ
                        </button>
                    </div>
                </form>
            </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (task) => {
      dispatch(action.addTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
