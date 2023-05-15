
export default class Counter extends React.Component{
  constructor(props){
    super(props)

  this.state = {
    counter: 0
     }
     this.increment = () => this.setState({counter: this.setState.counter + 1});
     this.decrement = () => this.setState({counter: this.setState.counter - 1}); 
    }

    componentDidMount() {
      console.log('Component Did Mount')
      console.log('____________________')
    }

    render() {
      console.log('Render')
      return <div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <div className="counter">
          Counter: {this.state.counter}
        </div>
      </div>
    }
   componentDidUpdate(prevProps, prevState, snapshot) {
     console.log('Component Did Update')
     console.log('____________________')
  }
}

