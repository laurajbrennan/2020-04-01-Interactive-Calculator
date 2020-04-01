import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { textArray: [], sentences: [], numberE: [], commas: [] };

  render() {
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
        <div className="App__container">
          <h1 className="App__title">Text Stats</h1>
          <p className="App__subtitle">
            Type or paste your text here for some vital statistics on your
            writing!
          </p>
          <form action="submit" className="App__text" onSubmit={handleSubmit}>
            <textarea type="textarea" className="App__text-input" name="text" />
            <button className="App__text-submit" type="submit">
              Get Stats
            </button>
          </form>

          <section className="App__stats">
            <div className="App__stats-box">
              There are {this.state.textArray.length} characters in your text
            </div>
            <div className="App__stats-box">
              There are {this.state.sentences.length} sentences in your text
            </div>
            <div className="App__stats-box">
              You have used the letter E {this.state.numberE.length} times
            </div>
            <div className="App__stats-box">
              You used {this.state.commas.length} commas
            </div>
          </section>
        </div>
        <footer className="App__footer">
          Background: Photo by Kelly Sikkema on Unsplash
        </footer>
      </div>
    );
  }
}

export default App;
