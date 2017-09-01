import React, { Component } from 'react';
import Tabs from './Tabs'
import TabPane from './TabPane'

class App extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      activeIndex : 0
    }
  }
  handleChange(e){
    this.setState({activeIndex : parseInt(e.target.value,10)})
  }
  render() {
    return (
      <div className="App">
        <div className='operator'>
          <span>切换tab: </span>
          <select value = {this.state.activeIndex} onChange={this.handleChange}>
            <option value='0'>Tab 1</option>
            <option value='1'>Tab 2</option>
            <option value='2'>Tab 3</option>
          </select>
          <Tabs defaultActiveIndex={this.state.activeIndex} className='tabs-bar'>
            <TabPane order='0' tab='Tab 1'>第一个tab里的内容</TabPane>
            <TabPane order='1' tab='Tab 2'>第二个tab里的内容</TabPane>
            <TabPane order='2' tab='Tab 3'>第三个tab里的内容</TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;

//通过componentWillReceiveProps 判断是否是select触发的 通过点击事件判断是否是nav触发的