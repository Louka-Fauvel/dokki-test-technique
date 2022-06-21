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
        <div className ="mx-5 my-2 row row-cols-1 row-cols-md-4 g-4 App">
          {
            users.map((user: {
              id: React.Key; image: string; firstName: string; lastName: string; maidenName: string; username: string; email: string; birthDate: string; gender:string, height: number; weight: number; address: any; city: string; postalCode: string}) => (
                <div className="col" key={user.id}>
                  <div className="card">
                    <img src={user.image} className="border border-5 shadow-sm image-card-user"/>
                    <div className="card-body">
                      <h5 className="card-title">{user.firstName}</h5>
                      <h5 className="card-title">{user.lastName}</h5>
                      <h5 className="card-title">({user.maidenName})</h5>
                      <p className="card-text"><small className="text-muted">@{user.username}<br/>
                        {user.email}</small></p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><small className="text-muted">{user.birthDate}<br/>
                        {user.gender}<br/>
                        {user.height}cm / {user.weight}kg</small></li>
                    </ul>
                    <div className="card-footer">
                      <h6 className="card-title fw-semibold"><small className="text-muted">{user.address.address},<br/>
                        {user.address.city}</small></h6>
                      <p className="card-text"><small className="text-muted">{user.address.city}, {user.address.postalCode}</small></p>
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
    );
  }

}

export default App;
