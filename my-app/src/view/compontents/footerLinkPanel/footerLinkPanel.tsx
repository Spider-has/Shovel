import "./footerLinkPanel.css"
import Infotech from "../../../images/footerLink/Infotech_logo.svg"
import Vk from "../../../images/footerLink/Vk_logo.svg"
import Telegram from "../../../images/footerLink/Tg_logo.svg"
import {Logo} from "../icons/logo";

const FooterLinkPanel = () => {
    return(
        <div className={"footer-link-area"}>
            <div className={"footer-link-area__logo-place"}>
                <div className={"footer-logo"}>
                    <Logo size={"logo_size_m"}/>
                </div>
                <div className={"support-logo-area"}>
                    <div className={"support-text"}>
                        <span className={"usual-footer-content-text"}>
                            при поддержке лицея
                        </span>
                    </div>
                    <div className={"support-logo"}>
                        <img className={"footer-logo"} src = {Infotech} alt = "Infotech Logo"/>
                    </div>
                </div>
            </div>
            <div className={"footer-link-area__contact-place"}>
                <div className={"phone-place"}>
                        <span className={"usual-footer-content-text"}>
                            по всем вопросам 89914633504
                        </span>
                </div>
                <div className={"social-network-place"}>
                    <div className={"social-network-place__vk"}>
                        <img src = {Vk} alt = "Vk icon"/>
                    </div>
                    <a href = "https://t.me/arxlopata12">
                        <div className={"social-network-place__tg"}>
                            <img src = {Telegram} alt = "Tg icon"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export {FooterLinkPanel}