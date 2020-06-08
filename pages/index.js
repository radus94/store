import React from "react";
import {FormattedMessage} from "react-intl";

export default () => (
    <div>
        <h1><FormattedMessage id='home.page.title' /></h1>

        <style jsx global>{`
          * {
            box-sizing: border-box; 
            margin: 0;
            padding: 0;
          }
        `}</style>
    </div>
)
