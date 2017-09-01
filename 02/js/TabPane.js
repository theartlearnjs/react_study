import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


class TabPane extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {children,classPrefix,isActive,className} = this.props
        const classed = classnames({
            [className]:className,
            [`${classPrefix}-panel`]:true,
            [`${classPrefix}-active`]:isActive
        })
        return(
            <div className={classed}>{children}</div>
        )
    }
}


export default TabPane