import React,{Component} from 'react'
import PropTypes from 'prop-types'
import TabNav from './TabNav'
import TabContent from './TabContent'
import '../css/style.scss'
import classnames from 'classnames'

class Tabs extends Component{
    constructor(props){
        super(props)
        const currProps = this.props
        //点击事件未加
        this.handleTabClick = this.handleTabClick.bind(this)
        let activeIndex;
        if('activeIndex' in currProps){  //外部更新
            activeIndex = currProps.activeIndex
        }else if('defaultActiveIndex' in currProps){  //内部更新
            activeIndex = currProps.defaultActiveIndex
        }
        this.state = {
            activeIndex,
            PrevIndex : activeIndex
        };
    }
    static defaultProps = {  //自定义props属性 给下面的渲染函数用
        classPrefix: 'tabs',
        onChange: () => {}
    }
    handleTabClick(activeIndex){
        const prevIndex = this.state.activeIndex;
        if(this.state.activeIndex !== activeIndex){
            this.setState({activeIndex,prevIndex})
        }
    }
    renderTabNav(){
        const {children,classPrefix} = this.props
        return (
            <TabNav 
              key='tabBar'
              classPrefix={classPrefix}
              onTabClick={this.handleTabClick}
              panels={children}
              activeIndex={this.state.activeIndex}/>
        )
    }
    renderTabContent(){
        const {children,classPrefix} = this.props
        return (
            <TabContent
              classPrefix={classPrefix}
              key='tabContent'
              panels={children}
              activeIndex={this.state.activeIndex}/>
        )
    }
    componentWillReceiveProps(nextProps){  //是外部传入的数据
        if('activeIndex' in nextProps){
            this.setState({activeIndex : nextProps.activeIndex})
        }
    }
    render(){
        const {className} = this.props
        const cx = classnames(className,'ui-tabs')
        return(
            <div className={cx}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        )
    }
}

export default Tabs


//tabs 引用了 content与nav 
//select通过componentWillReceiveProps 更新数据,另外一个通过点击事件,点击事件通过click向下传递
//并在子组件内绑定order