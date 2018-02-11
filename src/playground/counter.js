class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleReduceOne = this.handleReduceOne.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const number = localStorage.getItem('count');
    const count = parseInt(number, 10);

    if(!isNaN(count)) {
      this.setState(() => ({ count }))
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.count !== this.state.count) {
      // const num = parseInt(this.state.count);
      localStorage.setItem('count', this.state.count)
      
      console.log('update')
    }
  }
  handleAddOne (){
    this.setState((prevState) => {
      return {
        count: prevState.count +1
      }
    });
  }
  handleReduceOne (){
    this.setState((prevState) => {
      return {
        count: prevState.count -1
      }
    });
  }
  handleResetAll (){
    this.setState(() => {
      return {
        count: 0
      };
    });
    // this.setState({
    //   count: 0
    // });
    // this.setState({
    //   count: this.state.count +1
    // });
  }
  render() {
    return (
      <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={ this.handleAddOne }>+1</button>
      <button onClick={ this.handleReduceOne }>-1</button>
      <button onClick={ this.handleResetAll }>Reset All</button>
      </div>
    )
  }
}

// Counter.defaultProps = {
//   count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
//   count ++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count --;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }


// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();