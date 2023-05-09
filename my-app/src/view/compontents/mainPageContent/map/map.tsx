import "./map.css"
import "../../../../fonts/fonts.css"
import mapImg from "../../../../images/pageImages/mainPage/map.jpg"
import {MascotsHint, MascotsHintCloud} from "../../mascotHints/hints";


const MapArea = () => {
    let paragraphContent: string = "В нашей республике много мест для раскопок. Кликни на карту и увидишь, что мы нашли и как это проходило!"
    return(
        <section className={"map-area"}>
            <div className={"map"}>
                <div className={"map-wrapper"}>
                    <div className={"map-wrapper__header"}>
                        <h2 className={"map-header usual-header-text-l"}>
                            Где проходят раскопки?
                        </h2>
                    </div>

                    <div className={"map-wrapper__hint-area"}>
                        <div className={"hint-area-item1"}>
                            <MascotsHint/>
                        </div>
                        <div className={"hint-area-item2"}>
                            <MascotsHintCloud content={paragraphContent} cloudType={"text-cloud text-cloud_type_map"} size={"small"} textSize={"usual-hint-text_sm"} cloudColor={"black"}/>
                        </div>
                    </div>

                    <div className={"map-wrapper__map-area"}>
                        <img className={"map-area__img"} src = {mapImg} alt = "map"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {MapArea}