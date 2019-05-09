import React from 'react';
import Axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos';

function TodoList(props) {

    const tableRows = props.data.map(
        (task) => {
            return (
                <tr>
                    <td>{task.title}</td>
                    <td>{task.complited ? 'OUI' : 'NON'}</td>
                </tr>
            );
        }
    );
   

    return (
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>tâche</th>
                    <th>Fait</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
}



class Todo extends React.Component {

    state = {
        todoList: []
    }


    //Apple asynchrone avec la biblio axios
    constructor() {
        super();

        Axios.get(URL).then(
            (response) => {
                console.log(response.data);
                //recuperation des données dans un tableau
                //Avec this.setState
                this.setState({ todoList: response.data });
            }
        );
    }
    render() {
        return (
            <div>
                <h1>Liste des tâches</h1>

                <TodoList data={this.state.todoList} />
            </div>
        );
    }

}
export default Todo

