// getTabPanes() 通过 React.Children.map 方法遍历子组件，
//将 order （渲染顺序） 、 isActive （是否激活 tab） 、 
//children （Tabs 组件中传下的 children） 和 key 利用 React 的 
//cloneElement 方法克隆到 TabPane 组件中，最后返回这个 TabPane 组件集合
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class TabContent extends Component{
    getTabPanes(){
        const {activeIndex,panels,classPrefix} = this.props
        return React.Children.map(panels,(child) => {
            if(!child){
                return
            }
            const order = parseInt(child.props.order);
            const isActive = order === activeIndex
            return(
                React.cloneElement(child,{
                    isActive,
                    classPrefix,
                    children: child.props.children
                })
            )
        })
    }
    render(){
        const {classPrefix} = this.props
        const classes = classnames({
            [`${classPrefix}-content`] :true  //content下面有panel与active
        })
        return(
            <div className={classes}>
                {this.getTabPanes()}
            </div>
        )
    }
}


export default TabContent