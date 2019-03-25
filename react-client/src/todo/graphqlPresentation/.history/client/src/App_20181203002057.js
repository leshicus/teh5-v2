import React, { Component } from 'react';
import axios from 'axios';

// import winston from "winston";
// const console = new winston.transports.Console();
// winston.add(console);
// const options = {
//   host: "localhost",
//   port: 3003,
//   path: "graphql"
// };
// winston.add(new winston.transports.Http(options));

const styles = {
  horizontal: {
    display: 'flex',
  },
  rightPanel: {
    marginLeft: '10px',
  },
  error: {
    marginLeft: '10px',
    color: 'red',
  },
  send: {
    marginBottom: '5px',
    marginLeft: '5px',
  },
  back: {
    marginBottom: '5px',
  },
  next: {
    marginBottom: '5px',
    marginLeft: '5px',
  },
};

class App extends Component {
  state = {
    page: null,
    maxSlideNumber: 11,
    requestString: '',
    responseString: '',
    param: '',
    error: '',
  };

  componentDidMount() {
    this.setState({
      page: 0,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      switch (this.state.page) {
        case 0:
          this.setState({
            param: 'start',
            error: '',
          });
          break;
        case 1:
          this.setState({
            error: '',
            param: 10,
            requestString: `query OperationName($param: Int!){
  double(param: $param),
}`,
          });
          break;
        case 2:
          this.setState({
            error: '',
            param: 'Alex',
            requestString: `query OperationName($param: Int){
  double(param: $param),
}`,
          });
          break;
        case 3:
          this.setState({
            error: '',
            param: 'Alex',
            requestString: `query OperationName($param: Int){
  greet(param: $param)
}`,
          });
          break;
        case 4:
          this.setState({
            error: '',
            param: 'Alex',
            requestString: `query OperationName($param: String){
  greet(param: $param)
}`,
          });
          break;
        case 5:
          this.setState({
            error: '',
            param: '',
            requestString: `
query OperationName{
  sports{
    id
    description
  }
}`,
          });
          break;
        case 6:
          break;
        case 7:
          break;
        default:
          break;
      }
    }
  }

  onChangeTextArea = ({ target: { value } }) => {
    this.setState({
      requestString: value,
    });
  };

  onClickSend = async () => {
    winston.log('info', 'Hi');

    this.setState({
      error: '',
    });

    try {
      const { data: { data } } = await axios.post('/graphql', {
        query: this.state.requestString,
        variables: { param: this.state.param },
        // operationName: "OperationName"
      });

      console.log(data);

      this.setState({
        responseString: JSON.stringify(data, null, ' '),
      });
    } catch ({ response: { data: { errors } } }) {
      this.setState({
        responseString: JSON.stringify(errors, null, ' '),
        error: 'Ошибка',
      });
    }
  };

  onChangeInput = ({ target: { value } }) => {
    this.setState({
      param: value,
    });
  };

  onClickNext = () => {
    this.setState(
      prevState =>
        prevState.page < this.state.maxSlideNumber
          ? { page: prevState.page + 1 }
          : null
    );
  };
  onClickBack = () => {
    this.setState(
      prevState => (prevState.page ? { page: prevState.page - 1 } : null)
    );
  };

  render() {
    return (
      <div>
        <div>
          <button
            style={styles.back}
            onClick={this.onClickBack}
            disabled={this.state.page === 0}
          >
            {`\u21e6`}
          </button>
          <button
            style={styles.next}
            onClick={this.onClickNext}
            disabled={this.state.page === this.state.maxSlideNumber}
          >
            {`\u21e8`}
          </button>
          <button onClick={this.onClickSend} style={styles.send}>
            Send
          </button>
          <span style={styles.error}>{this.state.error}</span>
        </div>
        <div style={styles.horizontal}>
          <div>
            <div>
              <textarea
                cols={37}
                rows={12}
                onChange={this.onChangeTextArea}
                value={this.state.requestString}
              />
            </div>
            <span>Parameter: </span>
            <input
              type="text"
              onChange={this.onChangeInput}
              value={this.state.param}
            />
          </div>
          <div style={styles.rightPanel}>
            <pre>{this.state.responseString}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
