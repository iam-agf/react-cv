import React from "react";
import { othersData } from "./jsonData/othersInfo.js";

class Others extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class='lower-others'>
                <div class='lower-others-title'>
                    Publications <div class='lower-others-title-subtitle'>(Clickable titles)</div> 
                </div>
                <div class='lower-others-content'>
                    <table>
                    {
                            othersData.map((value) =>{
                                return (
                                    <div>
                                        <tr>
                                        <td>
                                            <strong>
                                            <a target='_blank' href={value.link}> {value.title}</a>
                                            </strong> 
                                        </td>
                                    </tr>
                                    <tr>
                                    &nbsp;    {value.content}
                                    </tr>
                                    </div>
                                )
                            })
                    }
                    </table>
                </div>
            </div>
        );
    }
}

export default Others;
