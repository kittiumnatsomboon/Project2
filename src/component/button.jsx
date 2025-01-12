import '../css/border.css'
import React,{Component} from 'react'
export class Personal extends Component{
    constructor(props) {
        super(props);
        this.state = {
          message: 'Hello, World!'
        };
    }
    render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
          </div>
        );
      }
}

