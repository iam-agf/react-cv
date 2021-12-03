import React from "react";
import { contributionsData } from './jsonData/contributionsInfo';

class Contributions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class='lower-contributions'>
                <div class='lower-contributions-title'>
                    Open Source <div class='lower-contributions-title-subtitle'>(Clickable titles)</div> 
                </div>
                <div class='lower-contributions-content'>
                    <table>
                        {
                            contributionsData.map((value) => {
                                return (
                                    <div style={{paddingBottom:"6px"}}>
                                        <tr>
                                        <td>
                                            <strong><a target='_blank' href={value.link}>
                                                {value.name}
                                            </a></strong>
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

export default Contributions;
