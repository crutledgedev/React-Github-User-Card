import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//import './styles.css';

class NewApp extends React.Component {
  // you actually don't need a constructor 🤯
  state = {
    doggos: [],
    doggoText: ''
  };

  componentDidMount() {
    //Using fetch:
    /*fetch("https://dog.ceo/api/breed/labrador/images")
      .then(res => res.json())
      .then(dogs => this.setState({ doggos: dogs.message }))
      .catch(err => console.log("no dogs"));
      */

    //Using axios:
    axios.get('https://dog.ceo/api/breed/husky/images').then(response => {
      this.setState({ doggos: response.data.message });
    });

    window.addEventListener('resize', this.handleResize); // can cause memory leak if not cleaned up
  }

  componentWillUnmount() {
    // cleanup method
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.doggos !== this.state.doggos) {
      console.log('new doggos state');
      if (this.state.doggoText === 'chihuahua') {
        axios.get(`https://dog.ceo/api/breed/husky/images`).then(response => {
          this.setState({
            doggos: response.data.message,
            doggoText: 'husky'
          });
        });
      }
    }
  }

  handleChanges = e => {
    this.setState({
      doggoText: e.target.value
    });
  };

  fetchDoggos = e => {
    e.preventDefault();
    axios
      .get(`https://dog.ceo/api/breed/${this.state.doggoText}/images`)
      .then(response => {
        this.setState({ doggos: response.data.message });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Doggos</h1>
        <input
          type="text"
          value={this.state.doggoText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchDoggos}>Fetch doggos</button>
        <div className="doggos">
          {this.state.doggos.map(doggo => (
            <img width="200" src={doggo} key={doggo} alt={doggo} />
          ))}
        </div>
      </div>
    );
  }
}
export default NewApp;
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);