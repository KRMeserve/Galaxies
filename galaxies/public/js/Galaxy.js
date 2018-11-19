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
            <div className="container">
                <h1 onClick={()=>{this.props.toggleState('galaxiesIsVisible', 'galaxyIsVisible')}}>{this.props.galaxy.name}</h1>
                <img src={this.props.galaxy.img}></img>
                <h4>Distance from Earth: {this.props.galaxy.distance}</h4>
                <h4>Radius: {this.props.galaxy.radius}</h4>
                <h4>Date Discovered: {this.props.galaxy.date_discovered}</h4>
                <h4>Shape of Galaxy: {this.props.galaxy.shape}</h4>
                {this.state.showForm
                    ?
                    <GalaxiesForm galaxySubmit={this.props.galaxySubmit}
                        galaxy={this.props.galaxy} toggleState={this.props.toggleState}></GalaxiesForm>
                    :
                    <div>
                        <button onClick={()=>{this.props.toggleState('galaxiesIsVisible', 'galaxyIsVisible'); this.props.deleteGalaxy(this.props.galaxy, this.props.galaxy.id)}}>DELETE GALAXY</button>
                        <button onClick={()=>{this.showForm()}}>EDIT GALAXY</button>
                    </div>
                }
            </div>
        )
    }
}
