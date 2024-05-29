import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre:
          <input
            name="name"
            type="text"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Correo electrónico:
          <input
            name="email"
            type="email"
            required
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Mensaje:
          <textarea
            name="message"
            required
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default ContactForm;