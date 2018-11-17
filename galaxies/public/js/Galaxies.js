class Galaxies extends React.Component {
    constructor(props){
        super(props);
        this.getGalaxies = this.getGalaxies.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.showGalaxy = this.showGalaxy.bind(this);
        this.deleteGalaxy = this.deleteGalaxy.bind(this);
        this.galaxyCreate = this.galaxyCreate.bind(this);
        this.galaxyCreateSubmit = this.galaxyCreateSubmit.bind(this);
        this.state = {
            galaxiesIsVisible: true,
            galaxyIsVisible: false,
            addGalaxyIsVisible: false,
            galaxies: [],
            galaxy: {}
        }
    }
    componentDidMount() {
        this.getGalaxies();
    }
    deleteGalaxy(galaxy, id){
        fetch('/galaxies/' + id, {
            method: 'DELETE'
        }).then(response => {
            this.getGalaxies()
        })
    }
    galaxyCreate(galaxy){
        console.log([galaxy, ...this.state.galaxies]);
        this.setState({
            galaxies: [galaxy, ...this.state.galaxies]
        })
    }
    galaxyCreateSubmit(galaxy){
        fetch('/galaxies', {
            body: JSON.stringify(galaxy),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdGalaxy => {
            return createdGalaxy.json()
        }).then(jsonedGalaxy => {
            this.galaxyCreate(jsonedGalaxy)
            this.toggleState('galaxiesIsVisible', 'addGalaxyIsVisible')
        })
    }
    getGalaxies() {
        fetch('/galaxies').then(response => response.json()).then(data => {
            this.setState({
                galaxies: data
            })
            console.log(data);
        })
    }
    showGalaxy(galaxy) {
        this.setState({
            galaxy: galaxy
        });
    }
    toggleState(st1, st2) {
        this.setState({
            [st1]: !this.state[st1],
            [st2]: !this.state[st2]
        })
    }
    render(){
        return (
            <div>
              <h1>Best Galaxies in the World!</h1>
              <div className="container">
                  {this.state.galaxiesIsVisible
                      ?
                      <GalaxiesList
                          galaxies={this.state.galaxies}
                          toggleState={this.toggleState}
                          showGalaxy={this.showGalaxy}>
                      </GalaxiesList>
                      :
                      ''
                  }
                  {this.state.galaxyIsVisible
                      ?
                      <Galaxy
                          toggleState={this.toggleState}
                          galaxy={this.state.galaxy}
                          deleteGalaxy={this.deleteGalaxy}
                          galaxySubmit={this.galaxyCreateSubmit}>
                      </Galaxy>
                      :
                      ''
                  }
                  {this.state.addGalaxyIsVisible
                      ?
                      <GalaxiesForm
                          galaxySubmit={this.galaxyCreateSubmit}
                          galaxy={this.state.galaxy}
                          toggleState={this.toggleState}>
                      </GalaxiesForm>
                      :
                      ''
                  }
                  <footer>
                    <h4>Created and designed by Kyle Meserve and Rick Christenhusz</h4>
                    <h4>2018</h4>
                  </footer>
              </div>
            </div>
        )
    }
}
