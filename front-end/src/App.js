import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Find A Senpai!</h1>
        <form>
          <p>Would you like to teach or learn?</p>
          <select name="teachOrLearn">
            <option value="Select" selected>- Select -</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="JavaScript">JavaScript</option>
            <option value="MuicTheory">Music Theory</option>
          </select>
          <br />
          <p>Would you like to teach or learn?</p>
          <select name="subject">
            <option value="Select" selected>- Select -</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="JavaScript">JavaScript</option>
            <option value="MuicTheory">Music Theory</option>
          </select>
          <br />
          <p>Your Email Address</p>
          <input type="text" name="emailAddress" />
          <br />
          <br />
          <input type="submit" value="submit"/>
          <br />
        </form>
        <p>Find or become a senpai, a Japanese word broadly used for teacher.</p>
        <p>"Find A Senpai!" connects you with someone who will teach you or will be open to learn from you!</p>
        <p>When your student or Senpai is ready for you, you will receive an email with their email. From there the 
          Senpai will lead the student through lessons via a communication meidum that is agreed upon.</p>
      </div>
    );
  }
}

export default App;
