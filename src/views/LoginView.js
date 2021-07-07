import React, { Component } from 'react'
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";

const styles = {
    form: {
        width: "320",
    },
    label: {
        display: "flex",
        flexDirection: "column",
        margiBotoom: 15,
    },
};

class LoginView extends Component {
    state = {
        email: "",
        password: "",
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onLogin(this.state);
      this.setState({ email: "", password: "" });
    }

    render() {
        const { email, password } = this.state;
        return (
          <div>
            <h1> Login Page</h1>
            <form
              onSubmit={this.handleSubmit}
              style={styles.form}
              autoComplete="off"
            >
              <label style={styles.label}>
                Email
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
              <label style={styles.label}>
                Password
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Enter</button>
            </form>
          </div>
        );
    }
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);