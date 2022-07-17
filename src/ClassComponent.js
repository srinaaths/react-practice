import React from 'react'

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.addCount = this.addCount.bind(this);
    }
    addCount() {
        this.setState({
            count: this.state.count + 1
        })
    }
    // constructor(props){ 
    //     super(props) 
            
    //     // Set initial state 
    //     this.state = {greeting : 
    //           'Click the button to receive greetings'} 
            
    //     // Binding this keyword 
    //     this.updateState = this.updateState.bind(this) 
    //   } 
        
    //   updateState(){ 
    //     // Changing state 
    //     this.setState({greeting : 
    //                  'GeeksForGeeks welcomes you !!'}) 
    //   } 
    render() {
        return (
            <div>
                <button onClick={this.addCount}>click to add</button>
                hello the count is {this.state.count}
            </div>
        )
    }
}