import React, {Component, Fragment} from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry"

// Component LifeCycle Hooks
// Mounting: Start of the app [Rendering from start]
// Updating: Whenever the component is updated [Functions recieve new input]
// Unmounting: When a component is removed

// Props: Come from states [Parent tells the child the state and the child cannot change the state]
// Object that describes your application are called a state [Which is able to change realtime]
// State requires use of default class version of Components [Which lives in parent component]
// Smart components have class syntax and state variable
class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        // API Request
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots:users}))
        
    }

    onSearchChange = event => {
        this.setState({searchfield: event.target.value});
    }
    

    // Every time the state changes, render is reran
    render(){
        const filteredRobots = this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        return (this.state.robots.length === 0 ) ? <h1>Loading</h1> :
         (
            <Fragment>
                <h1 className="f2">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </Fragment>
        );
    }
}

// Using function notation
// const App = () =>
//     <Fragment>
//         <h1>Robofriends</h1>
//         <SearchBox />
//         <CardList robots={robots}/>
//     </Fragment>

export default App;