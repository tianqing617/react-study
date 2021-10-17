import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
// import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from './redux/action'

class Person extends Component {

	addPerson = ()=>{
		// const name = this.nameNode.value
		// const age = this.ageNode.value*1
		// const personObj = {id:nanoid(),name,age}
		// this.props.addPerson(personObj)
		// this.nameNode.value = ''
		// this.ageNode.value = ''
	}

	render() {
		return (
			<div className="person">
        <div className="add-person">
          <Input placeholder="输入名字" />
          <Input placeholder="输入年龄" />
          <Button onClick={this.addPerson}>添加</Button>
        </div>

        <List className="show-person">
          {
            this.props.personList.map(p => {
              return <List.Item key={p.id}>{p.name} -- {p.age}</List.Item>
            })
          }
        </List>
      </div>
    )
  }
}

export default connect(
	state => ({
		personList: state.person,
		count: state.counter,
	}),
	{ createAddPersonAction }
)(Person);
