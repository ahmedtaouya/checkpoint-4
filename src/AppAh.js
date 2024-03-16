import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        person: {
            fullName: "LIONEL MESSI",
            bio: "The goat ",
            imgSrc: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/09/26/3792476-77139448-2560-1440.jpg",
            profession: "Footballeur"
          },
          shows: false
          
        };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }


  componentWillUnmount() {
    clearInterval(this.intervalId);
  }


  render() {
    const { person } = this.state.person;
    const { shows , interval}
    return (
      <div>
       <button onClick={this.handleClick}>
          {shows ? 'Masquer le profil' : 'Afficher le profil'} Person
        </button>
        <h1>{person.fullName}</h1>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt=""></img>
          <p>{person.profession}</p>
      </div>
    );
  }
}

export default App;