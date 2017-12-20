import React, {Component} from 'react';
import Api from "../../Api";

class GameList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            games: []
        }
    }

    componentDidMount() {
        Api.instance.getGames().then((games) => {
            let tabelka = games.map((game) => {
                return (
                    <tr key={game._id}>
                        <td>{game.name}</td>
                        <td>{game.complexity}</td>
                        <td>{game.time}</td>
                        <td>{game.players_min}</td>
                        <td>{game.players_max}</td>
                    </tr>
                );
            });

            this.setState({games: tabelka})
        })
    }

    render() {
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Trudność</th>
                        <th>Czas</th>
                        <th>Ilość graczy min</th>
                        <th>Ilość graczy max</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.games}
                    </tbody>

                </table>
            </React.Fragment>
        );
    }
}

export default GameList;
