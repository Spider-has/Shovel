import {MascotsHint, MascotsHintCloud} from "../../mascotHints/hints";
import {CustomButton} from "../../button/button";
import {FooterLinkPanel} from "../../footerLinkPanel/footerLinkPanel";
import "./footer.css"

const Footer = () => {
    let cloudContent: string = "Присоединяйся к нам!"
    return(
        <footer className={"footer"}>
            <div className={"footer__footer-mascot-area"}>
                <div className={"footer-mascot__skeleton"}>
                    <MascotsHint/>
                </div>
                <div className={"footer-mascot__cloud"}>
                    <MascotsHintCloud content={cloudContent} cloudType={"text-cloud text-cloud_type_footer"} size={"extra-small"} textSize={"usual-hint-text_extra-l"} cloudColor={"white"} textMod={"central"}/>
                </div>
            </div>
            <div className={"footer__button-area"}>
                <CustomButton id={"footer-button"} name={""} type={"button"} content={"Записаться на раскопки"} mod={undefined} contentClass={"usual-button-text"}/>
            </div>
            <div className={"footer__link-panel"}>
                <FooterLinkPanel/>
            </div>
        </footer>
    )
}

export {Footer}