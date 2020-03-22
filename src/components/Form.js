import React from 'react';
 
class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}
 
export default Form;


// import React from 'react';

// class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry",
//     submittedData: []
//   }

//   // event.target.value = we get whatever content is present when the event fired
//   // that would be a combination of whatever this.state.firstName is equal to plus the last key stroke. If you pressed 's', event.target.value would equal "Johns".
//   handleFirstNameChange = event => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }

//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }

//   // event.preventDefault() stops browser from opening a new window
//   // let formData, puttig together the current form data using values stored in state
//   // this.sendFormDataSomewhere, a form needs to send data somewhere - code that sends our data off
//   handleSubmit = event => {
//     event.preventDefault()
//     let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
//     let dataArray = this.state.submittedData.concat(formData)
//     this.setState({submittedData: dataArray})
//   }

//   listOfSubmissions = () => {
//     return this.state.submittedData.map(data => {
//       return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
//     })
//   }

//   // setState initiates a state change, but we need to fire it
//   // onChange is our event listener we'll use to fire upon changes
//   render() {
//     return (
//       <div>
//         <form onSubmit={event => this.handleSubmit(event)}>
//           <input
//             type="text"
//             onChange={event => this.handleFirstNameChange(event)}
//             value={this.state.firstName}
//           />
//           <input
//             type="text"
//             onChange={event => this.handleLastNameChange(event)}
//             value={this.state.lastName}
//           />
//           <input type="submit"/>
//         </form>
//         {this.listOfSubmissions()}
//       </div>
//     )
//   }
// }

// export default Form;