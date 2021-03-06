import React from "react";
import { projectsData } from './jsonData/projectsInfo';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class='lower-projects'>
                <div class='lower-projects-title'>
                    Projects <div class='lower-projects-title-subtitle'>(Clickable titles)</div> 
                </div>
                <div class='lower-projects-content'>
                    <table>
                        {
                            projectsData.map((value) => {
                                return (
                                    <div style={{paddingBottom:"6px"}}>
                                        <tr>
                                        <td>
                                            <strong><a target='_blank' href={value.link}>
                                                {value.name}
                                            </a></strong> (<em>{value.language}</em>)
                                        </td>
                                    </tr>
                                    <tr>
                                            {value.details}
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

export default Projects;
