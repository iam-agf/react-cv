import React from "react";

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class='Projects'>
                <div class='lower-projects'>
                    <div class='lower-projects-title'>
                        Projects
                    </div>
                    <div class='lower-projects-content'>
                        <table>
                            <tr>
                                <td>
                                    <div class='date'>2017-2019</div>
                                </td>
                                <td>
                                    <strong>
                                        Master Degree in Mathematics.
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    (<em><a target='_blank' href="https://www.math.cinvestav.mx/en/graduateMaster">CINVESTAV</a>, México City, Mexico</em>) <br /> Final GPA: 8,5/10,0.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='date'>2012-2016</div>
                                </td>
                                <td>
                                    <strong>
                                        Bachelor Degree in Mathematics.
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    (<em><a target='_blank' href="https://www.matematicas.uady.mx/">UADY</a>, Yucatán, Mexico</em>) <br /> Final GPA: 8,6/10,0.
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}

export default Projects;
