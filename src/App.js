import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    // .then(res => this.setState({todos: json})
    .then(response => this.setState({todos:response}))
    .catch(({error}) => alert('OOPS!'))
  }
render() {
  const {todos} = this.state

  return(
    <>
    {this.state.todos.map(item => console.log(item))}
    </>
    // <div className = "App">
    //   <h1> To Do List </h1>
    //   { todos? (
    //   <table>
    //     <thead>
    //       {
    //         // <xRow data= {Object.keys(todos[0])} type= "head" />
    //       }  
    //     </thead>
    //     <tbody>
    //       {
    //         todos.map(
    //           (obj,i) => < xRow data={Object.values(obj)} type = "body" key ={i} />
    //         )
    //       }
    //     </tbody>
    //   </table>
    //   ): null  
    //   }
    // </div>
  )
}
}

// function xRow ({data, type}) {
//   return (
//     <tr>
//       {
//         data.map((text,i) => {
//           text = text.toString()
//           return type === "head" ? <th key = {i}>{text}</th> : <td key = {i}>{text}</td>
//         })
//       }
//     </tr>
//   )
// }


export default App;
