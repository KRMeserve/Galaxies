class Galaxies extends React.Component {
    constructor(props){
        super(props);
        this.getGalaxies = this.getGalaxies.bind(this)
        this.state = {
            galaxies: []
        }
    }
    componentDidMount() {
        this.getGalaxies();
    }
    getGalaxies() {
        fetch('/galaxies').then(response => response.json()).then(data => {
            this.setState({
                galaxies: data
            })
            console.log(data);
        })
    }
    render(){
        return (
            <div>
                {this.state.galaxies.map((galaxy, index) => {
                    return (
                        <div className="galaxy">
                            <h1>{galaxy.name}</h1>
                            <h4>Distance from Earth: {galaxy.distance}</h4>
                            <h4>Radius: {galaxy.radius}</h4>
                            <h4>Date Discovered: {galaxy.date_discovered}</h4>
                            <h4>Shape of Galaxy: {galaxy.shape}</h4>
                            <img src={galaxy.img}></img>
                        </div>
                    )
                })}
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return (
            <h1>I'm inside the App class.</h1>
        )
    }
}

ReactDOM.render(
    <Galaxies></Galaxies>,
    document.querySelector('main')
)
