class GalaxiesList extends React.Component {
    render () {
        return (
              <div className="container">
                  {this.props.galaxies.map((galaxy, index) => {
                      return (

                          <div className="galaxy">
                          <img src={galaxy.img} onClick={()=>{this.props.showGalaxy(galaxy); this.props.toggleState('galaxiesIsVisible', 'galaxyIsVisible')}}></img>
                          <h2 onClick={()=>{this.props.showGalaxy(galaxy); this.props.toggleState('galaxiesIsVisible', 'galaxyIsVisible')}}>{galaxy.name}</h2>
                          </div>
                      )
                  })}
              </div>
        )
    }
}
