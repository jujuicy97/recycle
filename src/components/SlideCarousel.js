import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

const SlideCarousel = () => {
    const sliderImg = [
        `${process.env.PUBLIC_URL}/images/slider-items/slider-items-01.jpg`,
        `${process.env.PUBLIC_URL}/images/slider-items/slider-items-02.jpg`,
        `${process.env.PUBLIC_URL}/images/slider-items/slider-items-03.jpg`
    ];
    const NextArrow = ({onClick})=>{
        return (
            <div className="btn-next" onClick={onClick}>
                <MdArrowForwardIos/>
            </div>
        )
    };
    const PrevArrow = ({onClick})=>{
        return (
            <div className="btn-prev" onClick={onClick}>
                <MdArrowBackIosNew/>
            </div>
        )
    };
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1800,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 1440,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
    return (
        <div className="slider">
            <Slider {...settings}>
                {
                    sliderImg.map((item,idx)=>{
                        return <img key={idx} src={item}/>
                    })
                }
            </Slider>
        </div>
    );
};

export default SlideCarousel;