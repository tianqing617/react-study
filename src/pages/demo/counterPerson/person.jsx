import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from './redux/action'

class Person extends Component {
  state = {
    name: '',
    age: '',
  }
  saveForm = (type, value) => {
    this.setState({
      [type]: value
    })
  }
  saveForm = type => {
    return event => {
      this.setState({ [type]: event.target.value });
    }
  }

	addPerson = ()=>{
    const { name, age } = this.state;
		const person = {
      id:nanoid(),
      name,
      age
    };

		this.props.createAddPersonAction(person);

    this.setState({
      name: '',
      age: '',
    });
	}

	render() {
		return (
			<div className="person">
        <div className="add-person">
          <Input onChange={this.saveForm('name')} value={this.state.name} placeholder="输入名字" />
          <Input onChange={this.saveForm('age')} value={this.state.age} placeholder="输入年龄" />
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
