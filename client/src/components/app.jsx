import React from 'react';
import 'babel-polyfill';
import queryBR from '../../../server/mlQueries';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      search: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.queryML = this.queryML.bind(this);
  }

  async queryML() {
    const data = await queryBR(this.state.value);
    this.setState({
      search: data[0].price,
      value: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.queryML();
  }

  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome do produto:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Pesquisar" />
      </form>
      <div>{this.state.search || null}</div>
      </div>
    );
  }
}

export default App;
