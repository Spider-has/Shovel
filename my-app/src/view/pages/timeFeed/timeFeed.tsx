import {TimeFeedHeader} from "../../compontents/timeFeedContent/header/header";
import {TimeLine} from "../../compontents/timeFeedContent/timeLine/timeLine";
import {FooterLinkPanel} from "../../compontents/footerLinkPanel/footerLinkPanel";
import React from "react";
import "./timeFeed.css"


function TimeFeed() {
    return (
        <div className={"time-feed-page-wrapper"}>
            <TimeFeedHeader/>
            <TimeLine/>
            <div className={"time-feed-footer-area"} id = "footer">
                <FooterLinkPanel/>
            </div>
        </div>
    );
}

export {TimeFeed};