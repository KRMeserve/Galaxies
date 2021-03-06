const galaxyImgs = [];


class Galaxies extends React.Component {
    constructor(props){
        super(props);

        this.getGalaxies = this.getGalaxies.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.showGalaxy = this.showGalaxy.bind(this);
        this.deleteGalaxy = this.deleteGalaxy.bind(this);
        this.galaxyCreate = this.galaxyCreate.bind(this);
        this.galaxyCreateSubmit = this.galaxyCreateSubmit.bind(this);
        this.galaxyUpdateSubmit = this.galaxyUpdateSubmit.bind(this);
        this.state = {
            carouselIsVisible: false,
            landingPageIsVisible: true,
            galaxiesIsVisible: false,
            galaxyIsVisible: false,
            addGalaxyIsVisible: false,
            galaxies: [],
            galaxy: {},
        }
    }

    componentDidMount() {
        this.getGalaxies();
        // console.log(this.state.galaxies);
    }

    deleteGalaxy(galaxy, id){
        fetch('/galaxies/' + id, {
            method: 'DELETE'
        }).then(response => {
            this.getGalaxies()
        })
    }

    getGalaxies() {
        fetch('/galaxies').then(response => response.json()).then(data => {
            galaxyImgs.push(data)
            this.setState({
                galaxies: data

            })
            // console.log(data);
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

    galaxyUpdateSubmit(galaxy){
        fetch('/galaxies/' + galaxy.id, {
            body: JSON.stringify(galaxy),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedGalaxy => {
            console.log(updatedGalaxy, 'Updated Galaxy');
            return updatedGalaxy.json()
        }).then(jsonedGalaxy => {
            console.log(jsonedGalaxy, 'JSONed Galaxy');
            this.toggleState('galaxiesIsVisible', 'galaxyIsVisible')
            this.getGalaxies()
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
              <div className="container">
                  {this.state.landingPageIsVisible
                      ?
                      <LandingPage toggleState={this.toggleState}></LandingPage>
                      :
                      ""
                  }
                  {this.state.carouselIsVisible
                      ?
                      <div>
                        <h1>Pick a Galaxy!</h1>
                        <GalaxyCarousel
                          galaxies={this.state.galaxies}
                          toggleState={this.toggleState}
                          showGalaxy={this.showGalaxy}
                        />

                          <button onClick={()=>{
                              this.toggleState('galaxiesIsVisible', 'addGalaxyIsVisible')
                          }}>Add New Galaxy</button>
                          <button onClick={()=>{
                              this.toggleState('galaxiesIsVisible', 'carouselIsVisible')
                          }}>Toggle Index View</button>
                      </div>
                      :
                      ''
                  }
                  {this.state.galaxiesIsVisible
                      ?
                      <div>
                          <h1>Pick a Galaxy!</h1>
                          <GalaxiesList
                              galaxies={this.state.galaxies}
                              toggleState={this.toggleState}
                              showGalaxy={this.showGalaxy}>
                          </GalaxiesList>
                          <button onClick={()=>{
                              this.toggleState('galaxiesIsVisible', 'addGalaxyIsVisible')
                          }}>Add New Galaxy</button>
                          <button onClick={()=>{
                              this.toggleState('galaxiesIsVisible', 'carouselIsVisible')
                          }}>Toggle Carousel View</button>
                      </div>
                      :
                      ''
                  }
                  {this.state.galaxyIsVisible
                      ?
                      <Galaxy
                          toggleState={this.toggleState}
                          galaxy={this.state.galaxy}
                          deleteGalaxy={this.deleteGalaxy}
                          galaxySubmit={this.galaxyUpdateSubmit}>
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
                    <h4>Created and designed by <a href="https://kylemeserve.com">Kyle Meserve</a> and <a href="https://www.linkedin.com/in/frederick-christenhusz/">Rick Christenhusz</a></h4>
                    <h4>2018</h4>
                  </footer>
              </div>

            </div>
        )
    }
}
