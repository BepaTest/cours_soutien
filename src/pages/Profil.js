import React, { Component } from "react";
import CvCard from "../components/CvCard";
import Form from '../components/Form';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Wildeuse',
    }
  }

  updateName = (newName) => {
    this.setState({ name: newName })
  }

  render() {
    return (
      <div>
        <CvCard name={this.state.name} />
        <Form changeName={this.updateName} />
      </div>
    )
  }
}

export default Profil;
