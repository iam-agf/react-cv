import React from "react";
import { experienceData } from "./jsonData/experienceInfo";

class Experience extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class='lower-experience'>
                <div class='lower-experience-title'>
                    Experience
                </div>
                <div class='lower-experience-content'>
                    <table>
                    {
                            experienceData.map((value) =>{
                                return (
                                    <div>
                                    <tr>
                                        <td>
                                            <div class='date'>{value.enter}/{value.exit}</div>
                                        </td>
                                        <td>
                                            <strong>
                                                {value.title}
                                            </strong> (<em><a target='_blank' href={value.link}>{value.center}</a>, {value.location}</em>)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <ul>
                                            {value.content.map( ( tasks ) => {
                                                return (<li>{tasks}</li>)
                                            })}
                                        </ul>
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

export default Experience;
