import React from "react";
import { educationData } from "./jsonData/educationInfo";

class Education extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class='Education'>
                <div class='lower-education'>
                    <div class='lower-education-title'>
                        Education
                    </div>
                    <div class='lower-education-content'>
                        <table>
                            {
                                educationData.map((value) =>{
                                    return (
                                        <div>
                                        <tr>
                                            <td>
                                                <div class='date'>{value.date}</div>
                                            </td>
                                            <td>
                                                <strong>
                                                    {value.title}
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                (<em><a target='_blank' href={value.link}>{value.center}</a>, {value.location}</em>) <br /> Final GPA: {value.score}.
                                            </td>
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

export default Education;
