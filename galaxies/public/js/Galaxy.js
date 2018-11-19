class Galaxy extends React.Component {
    constructor(props){
        super(props);
        this.showForm = this.showForm.bind(this);
        this.state = {
            showForm: false
        }
    }
    showForm(){
        this.setState({
            showForm: !this.state.showForm
        })
    }
    render(){
        return (
            <div className="galaxy-container">
                <h1 onClick={()=>{this.props.toggleState('galaxiesIsVisible', 'galaxyIsVisible')}}>{this.props.galaxy.name}</h1>
                <img className="galaxy-img" src={this.props.galaxy.img}></img>
                <div className="galaxy-info">
                    <h4><span className="info-title">Distance from Earth:</span> {this.props.galaxy.distance}</h4>
                    <h4><span className="info-title">Radius:</span> {this.props.galaxy.radius}</h4>
                    <h4><span className="info-title">Date Discovered:</span> {this.props.galaxy.date_discovered}</h4>
                    <h4><span className="info-title">Shape of Galaxy:</span> {this.props.galaxy.shape}</h4>
                </div>
                {this.state.showForm
                    ?
                    <GalaxiesForm galaxySubmit={this.props.galaxySubmit}
                        galaxy={this.props.galaxy} toggleState={this.props.toggleState}></GalaxiesForm>
                    :
                    <div className="buttons">
                        <button onClick={()=>{this.props.toggleState('galaxiesIsVisible', 'galaxyIsVisible'); this.props.deleteGalaxy(this.props.galaxy, this.props.galaxy.id)}}>DELETE GALAXY</button>
                        <button onClick={()=>{this.showForm()}}>EDIT GALAXY</button>
                    </div>
                }
            </div>
        )
    }
}
