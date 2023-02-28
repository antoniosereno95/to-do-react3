import React from "react";
import "./style.css";

class App extends React.Component{

    constructor(props){ //primeiro tem que construir o construtor
      super(props);
      this.state = { //depois definir estados
        newTask: "",
        tasks: []
      };
    }

    handleAddTask = () => { //depois cria uma funçao pra manegar os estados do app
        if(this.state.newTask == '') return;

        const newTasks = [... this.state.tasks, this.state.newTask];
        this.setState({
          newTask: '',
          tasks: newTasks
        });
    }

    handleDeleteTask = (index) => {
      const newTasks = [... this.state.tasks];
      newTasks.splice(index, 1);
      this.setState({
        tasks: newTasks
      })

    }

    render(){
      return (
        <div>

            <input type="text"
             placeholder="Nova Tarefa"
             value={this.state.newTask} 
             onChange={(event) => this.setState ({newTask: event.target.value})}>
             </input>

             <button
             className="add-task-button"
             onClick={this.handleAddTask}
             >
              Adicionar</button>

              <ul> {/*isso aqui é pra criar uma lista na tela(html basico) */}
               {this.state.tasks.map((task, index) => (
                 <li key={index}>
                   {task}
                   <button
                    onClick={() => this.handleDeleteTask(index)}
                    >
                     Excluir
                   </button>
                 </li>

               ) )}
             </ul>

        </div>
      );
    }

}

export default App;