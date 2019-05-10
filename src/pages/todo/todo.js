import React from 'react';
import Axios from 'axios';

import queryString from 'query-string';

const URL = 'https://jsonplaceholder.typicode.com/todos';

function TodoList(props) {

    const tableRows = props.data.map(
        (task) => {
            return (
                // identification unique de chaque tr avec id
                <tr key={task.id}>
                    <td>{task.id}</td>
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
                    <th>id</th>
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
        todoList: [],
        nbreOfPages: 0
    }

    //debut de page
    correntPage = 1;

    //Nbre d'element par page
    nberOfItemPerPage = 10;



    //Apple asynchrone avec la biblio axios
    constructor(props) {
        super(props);

        Axios.get(URL).then(
            (response) => {
                console.log(response.data);

                //recuperation des données dans un tableau
                //Avec this.setState
                //Initilaisation de state
                let state = {
                    todoList: response.data,
                    nbreOfPages: Math.ceil(response.data.length /
                        this.nberOfItemPerPage)
                }
                this.setState(state);
            }
        );
        //this.props.location.search: Permet de recuperer la clef et la valeur de notre 
        // chaine de catarcter traiter par queryString.parse(); exemple: /page=5(clef=page/ valeur=5)
        let values = queryString.parse(this.props.location.search);
        this.currentPage = values.pages || 1;
    }
    render() {
        return (
            <div>
                <h1>Liste des tâches</h1>

                <TodoList data={this.state.todoList.slice(
                    (this.currentPage - 1) * this.nberOfItemPerPage,
                    this.currentPage * this.nberOfItemPerPage)}
                />

                <Pagination nbreOfPages={this.state.nbreOfPages} />
            </div>
        );
    }

}

//Fonction pour l'affichage des bottons avec numero des pages
function Pagination(props) {
    let pages = new Array(props.nbreOfPages);

    const buttons = pages.map(
        (item, index) => {
            return(
            <li key={index} className="page-item">
                <a className="page-link">{index + 1}</a>
            </li>
        );
}
    );

    console.log(buttons);
return (
    <ul className="pagination"></ul>
);
 }

export default Todo

