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
                <form onSubmit={this.handleSubmit}>
                    <p>Name:</p>
                    <input type='text' id="name" ref="name" onChange={this.handleChange} value={this.state.name}></input>
                    <p>Distance: </p>
                    <input type='text' id='distance' onChange={this.handleChange} value={this.state.distance}></input>
                    <p>Radius: </p>
                    <input type='text' id='radius' onChange={this.handleChange} value={this.state.radius}></input>
                    <p>Date Discovered: </p>
                    <input type='number' id="date_discovered" onChange={this.handleChange} value={this.state.date_discovered}></input>
                    <p>Shape: </p>
                    <input type="text" id='shape' onChange={this.handleChange} value={this.state.shape}></input>
                    <p>Image Link: </p>
                    <input type='text' id='img' onChange={this.handleChange} value={this.state.img}></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
