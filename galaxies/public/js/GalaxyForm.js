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
            img: 'https://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2015/08/cheese.jpg'
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
        console.log(event);
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
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
