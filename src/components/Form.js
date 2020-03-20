import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    }, () => console.log(this.state.lastName))
  }

  handleSubmit = event => {
    event.preventDefault()
    let submitted = {lastName: this.state.lastName, firstName: this.state.firstName}
    this.setState(prevState => {
      return {submittedData: prevState.submittedData.concat(submitted)}
    })
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => <p>{data.firstName} {data.lastName}</p>)
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={this.handleLastNameChange} value={this.state.lastName} />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;