import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { textArray: [], sentences: [], numberE: [], commas: [] };

  render() {
    // const characters = this.state.textArray.length;
    // const sentences = this.state.sentences.length;
    // const es = this.state.numberE.length;
    // const commas = this.state.
    const handleSubmit = e => {
      e.preventDefault();
      console.log(e.target.text.value);
      let text = e.target.text.value;
      let newArray = [];
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== " ") {
          newArray.push(text[i]);
        }
      }
      let sentences = newArray.filter(
        chara => chara === "." || chara === "?" || chara === "!"
      );
      let es = newArray.filter(chara => chara === "e");
      let commas = newArray.filter(chara => chara === ",");
      this.setState({
        textArray: newArray,
        sentences: sentences,
        numberE: es,
        commas: commas
      });
    };

    return (
      <div className="App">
        <h1 className="title">Text Stats</h1>
        <p className="subtitle">
          Type or paste your text here for some vital statistics on your
          writing!
        </p>
        <form action="submit" className="text" onSubmit={handleSubmit}>
          <textarea type="textarea" className="text__input" name="text" />
          <button className="text__submit" type="submit">
            Get Stats
          </button>
        </form>

        <section className="stats">
          <div className="stats__box">
            There are {this.state.textArray.length} characters in your text
          </div>
          <div>
            There are {this.state.sentences.length} sentences in your text
          </div>
          <div>
            You have used the letter E {this.state.numberE.length} times
          </div>
          <div>You used {this.state.commas.length} commas</div>
        </section>
      </div>
    );
  }
}

export default App;
