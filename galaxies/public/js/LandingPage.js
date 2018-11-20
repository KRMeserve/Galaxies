class LandingPage extends React.Component {
    render () {
        return (
            <div className="landing-page">
                <h1>Galaxy Explorer</h1>
                <p>A look into the wonders of the universe from the comfort of your home.</p>
                <button onClick={()=>{this.props.toggleState('landingPageIsVisible', 'galaxiesIsVisible')}}>Explore the Galaxy</button>
            </div>
        )
    }
}
