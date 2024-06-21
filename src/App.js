import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

const App = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        console.log("effect fired");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => setMonsters(users))
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });

        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }

    return (
        <div className="App">
            <h1 className='app-title'>Kittens Rolodex</h1>
            <SearchBox onChangeHandler={ onSearchChange } className='search-box' placeholder='search monster' />
            <CardList monsters={ filteredMonsters } />
        </div>
    );
}
export default App;
