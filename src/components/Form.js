import React, { Component } from 'react';

const names = ["toto", "tata", "riri", "fifi"]

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
    }
  }

  componentWillMount() {
    this.changeNameEverySeconds()
  }

  getRandomName = () => {
    let name = ''
    const indexRandom = Math.floor(Math.random() * names.length)
    name = names[indexRandom]
    this.setState({name}, () => this.props.changeName(this.state.name))
  }

  changeNameEverySeconds = () => {
    setInterval(this.getRandomName, 1000);
  } 

  render() {    
    return ( 
       <div>
         Dans Form je vaux {this.state.name}
       </div>
    );
  }
}

export default Form;