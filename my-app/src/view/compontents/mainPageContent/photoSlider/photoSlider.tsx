import "./photoSlider.css"
import photo1 from "../../../../images/pageImages/mainPage/photoSlider/photo_slider_img_1.jpg"
import photo2 from "../../../../images/pageImages/mainPage/photoSlider/photo_slider_img_2.jpg"
import photo3 from "../../../../images/pageImages/mainPage/photoSlider/photo_slider_img_3.jpg"
import photo4 from "../../../../images/pageImages/mainPage/photoSlider/photo_slider_img_4.jpg"
import {PhotoArrowLeft, PhotoArrowRight} from "../../icons/arrows";
import {ReactNode, useState} from "react";


interface imagesData{
    id: string,
    img: string,
}
interface sliderData{
    selectedNow: number,
    length: number,
}

let photoHeightData: number = 0;


const getNextImage = (selectedImg: number, imgList:  Array<imagesData>, length: number): ReactNode => {
    let currImg: ReactNode;
    currImg = <img className={"slider-img"} src = {imgList[selectedImg].img} alt = {"Slider Img # " + imgList[selectedImg].id} id = {imgList[selectedImg].id}/>
    return currImg;
}

const Slider = (props: sliderData) => {
    let selectedImg: number = props.selectedNow;
    let currentImage: ReactNode;
    let images: Array<imagesData> = [
        {
            id: "1",
            img: photo1
        },
        {
            id: "2",
            img: photo2
        },
        {
            id: "3",
            img: photo3
        },
        {
            id: "4",
            img: photo4
        }
    ];
    currentImage = getNextImage(selectedImg, images, props.length);
    return(
        <div>
            {currentImage}
        </div>
    )
}


const SliderArea = () => {
    const length: number = 3;
    const [selectedImg, setSelectedImg] = useState(0);
    const shiftRight = (selectedImg: number, length: number) => {
        let nextImg: number = selectedImg;
        if(nextImg < length){
            nextImg++;
        }
        else{
            nextImg = 0;
        }
        setSelectedImg(nextImg);
    }
    const shiftLeft = (selectedImg: number, length: number) => {
        let nextImg: number = selectedImg;
        if(nextImg > 0){
            nextImg--;
        }
        else{
            nextImg = length;
        }
        setSelectedImg(nextImg);
    }
    return(
        <div  className={"slider-area"}>
            <div id = "photo-slider-arrow-left-area" onClick={() => {shiftLeft(selectedImg, length)}} className={"slider-area__arrow-area slider-area__arrow-area_left"}>
                <PhotoArrowLeft/>
            </div>
            <div id = "slider-area" className={"slider-area__slider"}>
                <Slider selectedNow={selectedImg} length={length}/>
            </div>
            <div onClick={() => {shiftRight(selectedImg, length)}} className={"slider-area__arrow-area slider-area__arrow-area_right"}>
                <PhotoArrowRight/>
            </div>
        </div>
    )
}

export {SliderArea}