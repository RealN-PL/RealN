import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

interface Props {
  offer: any[];
}

const PropertySlider = ({ offer }: Props) => {
  const slider1Ref = useRef<Slider>(null!); // Use non-null assertion
  const slider2Ref = useRef<Slider>(null!); // Use non-null assertion

  useEffect(() => {
    if (slider1Ref.current && slider2Ref.current) {
      slider1Ref.current.slickGoTo(2); // Example: Go to slide 3 on the first slider
    }
  }, []);

  const imageList = Object.values(offer[1].imageAsset);

  return (
    <div className="property-slider-container">
      <Slider asNavFor={slider2Ref.current} ref={slider1Ref}>
        {imageList.map((value: any, i: any) => (
          <div key={i} className="property-slider-img">
            <img src={value} alt="house" />
          </div>
        ))}
      </Slider>
      <Slider
        asNavFor={slider1Ref.current}
        ref={slider2Ref}
        slidesToShow={imageList.length}
        swipeToSlide={true}
        focusOnSelect={true}
        className="small-slider"
      >
        {imageList.map((value: any, i: any) => (
          <div key={i} className="sub-slider-img" style={{width: `100px`}} >
            <img src={value} alt="house" style={{width: `calc(800px / 8)`}} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertySlider;
