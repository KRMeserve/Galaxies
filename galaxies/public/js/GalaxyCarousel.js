const galaxyImgs = [];
const galaxyUrl = [];
const galaxyName = [];

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

    // componentWillMount() {
    //   this.nextGalaxy();
    // }

    componentDidMount() {
      // this.getImgs()
      // setTimeout(this.nextGalaxy);

      setTimeout(this.getImgs, 1000);

    }

    getImgs () {
      for (let i=0; i < galaxyImgs[0].length; i++) {
        galaxyUrl.push(galaxyImgs[0][i].img);
        galaxyName.push(galaxyImgs[0][i].name)
        this.setState({
          currentImageIndex: 0
        });
        // console.log(galaxyName);
      }
    }

    previousGalaxy () {
        // console.log(this.state.currentImageIndex);
        // console.log(galaxyUrl);
        // console.log("previous works");
    		const lastIndex = galaxyUrl.length - 1;
        // console.log(lastIndex);
    		const { currentImageIndex } = this.state;
    		const shouldResetIndex = currentImageIndex === 0;
    		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
        // console.log(galaxyUrl[this.state.currentImageIndex]);
    		this.setState({
    			currentImageIndex: index
    		});
    	}

    nextGalaxy () {
        // console.log(this.state.currentImageIndex);
        // console.log("next works");
    		const lastIndex = galaxyUrl.length - 1;
        // console.log(lastIndex);
    		const { currentImageIndex } = this.state;
    		const shouldResetIndex = currentImageIndex === lastIndex;
    		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
        // console.log(galaxyUrl[this.state.currentImageIndex]);
    		this.setState({
    			currentImageIndex: index
    		});
    	}

      render () {
        return (
          <div className="carousel image-slide">
            <Arrow direction="left" clickFunction={ this.previousGalaxy } glyph="&#9664;" />
            <img src={ galaxyUrl[this.state.currentImageIndex] } />
            <p className="galaxy-name">{galaxyName[this.state.currentImageIndex]}</p>
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


	// const styles = {
	// 	backgroundImage: `url(${galaxies})`,
	// 	backgroundSize: 'cover',
	// 	backgroundPosition: 'center'
	// };
