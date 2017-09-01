import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class TabNav extends Component{    
    getTabs(){
        const {panels,activeIndex,classPrefix} = this.props
        return React.Children.map(panels,(child) =>{
            if(!child){
                return
            }
            const order = parseInt(child.props.order,10)
            let classes = classnames({
                [`${classPrefix}-tab`]:true,
                [`${classPrefix}-active`]: order === activeIndex,
                // [`${classPrefix}-disabled`]: child.props.disable
            })
            let events = {
                onClick: this.props.onTabClick.bind(this,order)
            }
            return(
                <li
                  key={order}
                  {...events}
                  className={classes}
                >{child.props.tab}</li>
            )
        })

    }
    render(){
        const {classPrefix} = this.props
        const rootClasses = classnames({
            [`${classPrefix}-bar`]:true,
        })
        const classes = classnames({
            [`${classPrefix}-nav`]:true
        })
        return(
            <div className={rootClasses} >
                <ul className={classes}>
                    {this.getTabs()}
                </ul>  
            </div>
        )
    }
}


export default TabNav