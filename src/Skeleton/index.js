import React, { Component } from "react"

class Skeleton extends Component {
    static defaultProps = {
        height: '40px',
    } 
    constructor(props) {
        super(props);
    }
    render() {
        const {
            height
        } = this.props;

        return (
            <div className = "loading-theme loading-skeleton" style = {{
                height: height
                }}>
            </div>   
        )
    }
}

export default Skeleton;