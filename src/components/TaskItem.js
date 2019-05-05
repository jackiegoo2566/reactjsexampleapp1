import React, { Component } from 'react';

class TaskItem extends Component {
  updateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  }

  onDeleteItem = () => {
    this.props.onDeleteItem(this.props.task.id);
  }

  onEditTask = () => {
    this.props.onEditTask(this.props.task.id);
  }

  render () {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{ task.taskName }</td>
        <td className="text-center">
            {/* { this.showStatusElement() } */}
              <span className={ task.isCompleted ? 'label label-success' : 'label label-danger'}
                    onClick={this.updateStatus}>
                { task.isCompleted ? 'Quất' : 'Từ từ rồi quất' }
              </span>
        </td>
        <td className="text-center">
            <button
                type="button"
                className="btn btn-primary"
                onClick={ this.onEditTask }>
                <span className="fa fa-pencil mr-5"></span>Sửa
            </button>
            &nbsp;
            <button
                type="button" className="btn btn-danger"
                onClick={ this.onDeleteItem }>
                <span className="fa fa-trash mr-5"></span>Xóa
            </button>
        </td>
    </tr>
    )
  }
}

export default TaskItem;
