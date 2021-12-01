import React from "react";
import { othersData } from "./jsonData/othersInfo.js";

class Others extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class='Others'>
                <div class='lower-others'>
                    <div class='lower-others-title'>
                        Others
                    </div>
                    <div class='lower-others-content'>
                        <table>
                        {
                                othersData.map((value) =>{
                                    return (
                                        <div>
                                            <tr>
                                            <td>
                                            <li>
                                                <strong>
                                                    {value.title}
                                                </strong> (<em><a target='_blank' href={value.link}>{value.center}</a>link{value.location}</em>)
    
                                        </li>
                                            </td>
                                        </tr>
                                        <tr>
                                            <ul>
                                                {value.content}
                                            </ul>
                                        </tr>
                                        </div>
                                    )
                                })
                        }
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Others;
