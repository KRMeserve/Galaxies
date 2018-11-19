const galaxyImgs = [];
const galaxyUrl = [];

class GalaxyCarousel extends React.Component {
    constructor(props) {
      super(props);
      this.nextGalaxy = this.nextGalaxy.bind(this);
      this.previousGalaxy = this.previousGalaxy.bind(this);
      this.getImgs = this.getImgs.bind(this);
      this.state = {
          currentImageIndex: 0
      };
    }

    componentDidMount() {
      // this.getImgs()
      setTimeout(this.getImgs, 1000);
    }

    getImgs () {
      for (let i=0; i < galaxyImgs[0].length; i++) {
        galaxyUrl.push(galaxyImgs[0][i].img)
        console.log(galaxyUrl);
      }
    }

    previousGalaxy () {
        console.log(this.state.currentImageIndex);
        // console.log(galaxyUrl);
        console.log("previous works");
    		const lastIndex = galaxyUrl.length - 1;
        // console.log(lastIndex);
    		const { currentImageIndex } = this.state;
    		const shouldResetIndex = currentImageIndex === 0;
    		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
        console.log(galaxyUrl[this.state.currentImageIndex]);
    		this.setState({
    			currentImageIndex: index
    		});
    	}

    nextGalaxy () {
        console.log(this.state.currentImageIndex);
        console.log("next works");
    		const lastIndex = galaxyUrl.length - 1;
        // console.log(lastIndex);
    		const { currentImageIndex } = this.state;
    		const shouldResetIndex = currentImageIndex === lastIndex;
    		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    		this.setState({
    			currentImageIndex: index
    		});
    	}

      render () {
        return (
          <div className="carousel">
            <Arrow direction="left" clickFunction={ this.previousGalaxy } glyph="&#9664;" />
            <GalaxyPics url={ galaxyUrl[this.state.currentImageIndex] } />
            <Arrow direction="right" clickFunction={ this.nextGalaxy } glyph="&#9654;" />
          </div>
        );
      }

}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div
		className={ `slide-arrow ${direction}` }
		onClick={ clickFunction }>
		{ glyph }
	</div>
);

const GalaxyPics = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};

	return (
		<div className="image-slide" style={styles}></div>
	);
}
