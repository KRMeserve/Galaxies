class GalaxiesForm extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            distance: '',
            radius: '',
            date_discovered: 0,
            shape: '',
            img: ''
        }
    }
    componentDidMount(){
        if(this.props.galaxy){
            this.setState({
                name: this.props.galaxy.name,
                distance: this.props.galaxy.distance,
                radius: this.props.galaxy.radius,
                date_discovered: this.props.galaxy.date_discovered,
                shape: this.props.galaxy.shape,
                img: this.props.galaxy.img,
                id: this.props.galaxy.id
            })
        }
    }
    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.galaxySubmit(this.state)
    }
    render(){
        return(
            <div>
                <h1>Enter Information Below:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label><br/>
                    <input type='text' id="name" ref="name" onChange={this.handleChange} value={this.state.name}></input><br/>
                    <label>Distance: </label><br/>
                    <input type='text' id='distance' onChange={this.handleChange} value={this.state.distance}></input><br/>
                    <label>Radius: </label><br/>
                    <input type='text' id='radius' onChange={this.handleChange} value={this.state.radius}></input><br/>
                    <label>Date Discovered: </label><br/>
                    <input type='number' id="date_discovered" onChange={this.handleChange} value={this.state.date_discovered}></input><br/>
                    <label>Shape: </label><br/>
                    <input type="text" id='shape' onChange={this.handleChange} value={this.state.shape}></input><br/>
                    <label>Image Link: </label><br/>
                    <input type='text' id='img' onChange={this.handleChange} value={this.state.img}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
