import React, { Component } from 'react'
import Slider from 'react-slick'
import ReactImageMagnify from 'react-image-magnify'
import '../../styles/slick.css'


class Sliders extends Component {
  state = {
    nav1: null,
    nav2: null,
    slideNum: null
  }


  componentDidMount () {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })

    if (this.props.imgs.length > 4){
      this.setState({
        slideNum: 4
      })
    }else {
      this.setState({
        slideNum: this.props.imgs.length
      })
    }
  }

  next = () => {
    this.slider1.slickNext()
  }
  previous = () => {
    this.slider1.slickPrev()
  }

  render () {
    const sideSlider = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      asNavFor: '.slider-nav'
    }

    const navSlider = {
      style: { width: 125 },
      slidesToShow: this.state.slideNum,
      autoplay: false,
      asNavFor: '.slider-for',
      dots: false,
      arrows: true,
      prevArrow:<button type="button" />,
      nextArrow:<button type="button" />,
      focusOnSelect: true,
      centerMode: false,
      vertical: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: this.state.slideNum,
            vertical: false,
            centerMode: true
          }
        }
      ],
      speed: 1000,
      autoplaySpeed: 2000
    }

    return (
      <React.Fragment>
        <Slider
          {...sideSlider}
          className='slider slider-for'
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
        >
          {
            this.props.imgs.map((img, index) => {
              return (
                <div className='pro-slide-item' key={index}>
                  <div className='pro--Thumb slider-for__item ex1' >
                    <ReactImageMagnify {...{
                      smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        width: 470,
                        height: 500,
                        src: `data:image/jpg;base64, ${img.image}`
                      },
                      largeImage: {
                        src: `data:image/jpg;base64, ${img.image}`,
                        width: 980,
                        height: 1000
                      },
                      style: {
                        cursor: 'zoom-in'
                      },
                      isHintEnabled: true,
                      enlargedImagePosition:'over',
                      shouldHideHintAfterFirstActivation: false,
                    }}
                    />
                  </div>
                </div>
              )
            })
          }
        </Slider>

        <div>
          <Slider
            {...navSlider}
            className='slider slider-nav clearfix'
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
          >
            {
              this.props.imgs.map((img, index) => {
                return (
                  <div className='sp-nav' key={index}>
                    <img src={`data:image/jpg;base64, ${img.image}`} alt='' className='img-responsive' />
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </React.Fragment>
    )
  }
}

export default Sliders
