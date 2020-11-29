import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import "../styles/ContactPage.css";

class ContactPage extends Component {
  state = {
    value: "",
    isEmpty: true,
  };

  handleChange = (e) => {
    if (e.target.value > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false,
      });
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: true,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      isEmpty: true,
    });
  };

  render() {
    return (
      <div className="contact">
        <h3>Napisz do nas</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość..."
          ></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={!this.state.isEmpty}
          message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić stronę"
        />
      </div>
    );
  }
}
export default ContactPage;
