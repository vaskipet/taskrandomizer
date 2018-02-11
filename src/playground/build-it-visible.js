class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

handleToggleVisibility () {
  this.setState((prevState)=>{
    return {
      visibility: !prevState.visibility
    }
  })
}

  render() {
    return (
      <div>
        <h1>VisibilityToggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'} </button>
        {this.state.visibility && (
                  <div>
                    <p>Hey you see this!</p>
                  </div>
                )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




// const app = {
//   title: 'Visibility Toggler',
//   details: ['Now you see this']
// };

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
  
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'} </button>
//       {visibility && (
//         <div>
//           <p>Hey you see this!</p>
//         </div>
//       )}
//     </div>
//   );
  
//   ReactDOM.render(template, appRoot);
// }
// render();