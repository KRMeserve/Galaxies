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
              <div className="container">
                <h1>Best Galaxies in the World!</h1>
                  {this.state.galaxies.map((galaxy, index) => {
                      return (
                          <div className="galaxy">
                          <img src={galaxy.img}></img>
                              <h2>{galaxy.name}</h2>
                              <h4>Distance from Earth: {galaxy.distance}</h4>
                              <h4>Radius: {galaxy.radius}</h4>
                              <h4>Date Discovered: {galaxy.date_discovered}</h4>
                              <h4>Shape of Galaxy: {galaxy.shape}</h4>
                          </div>
                      )
                  })}
                  <footer>
                    <h4>Created and designed by Kyle Meserve and Rick Christenhusz <span>2018</span></h4>
                  </footer>
              </div>
        )
    }
}
