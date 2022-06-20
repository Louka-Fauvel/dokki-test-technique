import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      users: [],
    };

  }

  componentDidMount() {

    fetch('https://dummyjson.com/users').then((response) => {

      return response.json();

    }).then((json) => {

      this.setState({
        users: json.users,
      });
    });
  }

  render() {
    const {users} = this.state;

    return (
        <div className = "App">
        {
          users.map((user: {
            id: React.Key; firstName: string; lastName: string; maidenName: string; username: string; email: string; birthDate: string; gender:string, height: number; weight: number; address: any; city: string; postalCode: string}) => (
              <ol key = {user.id} >
                firstName: {user.firstName},
                lastName: {user.lastName},
                maidenName: {user.maidenName},
                username: {user.username},
                email: {user.email},
                birthDate: {user.birthDate},
                gender: {user.gender},
                height: {user.height},
                weight: {user.weight},
                address adress: {user.address.address},
                address city: {user.address.city},
                address postalCode: {user.address.postalCode},
              </ol>
          ))
        }
        </div>
    );
  }

}

function aze() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
