import React, {Component} from 'react'
import axios from 'axios'
import FamilyMember from './Components/FamilyMember'
import Inputs from './Components/Inputs'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      post: false,
      put: false,
      familyUrl: '/api/family',
      family: [],
      currentPerson: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    const {familyUrl} = this.state
    axios.get(familyUrl).then(results => {
      this.setState({family: results.data})
    }).catch(err => console.log(err))
  }

  handleSubmit(body, submitType, dataType){
    const {familyUrl} = this.state
    let url = ''
    if(dataType === 'family'){url = familyUrl}
    if(submitType === 'post'){
      axios.post(url, body).then(results => {
        this.setState({family: results.data})
      }).catch(err => console.log(err))
    }
    if(submitType === 'put'){
      console.log('hit')
      axios.put(`${url}/${body.id}`, body).then(results => {
        this.setState({family: results.data})
      }).catch(err => console.log(err))
    }
  }
  handleDelete(id, dataType){
    const {familyUrl} = this.state
    let url = ''
    if(dataType === 'family'){url = familyUrl}
    axios.delete(`${url}/${id}`).then(results => {
      this.setState({family: results.data})
    }).catch(err => console.log(err))
  }

  toggle=(toggleName, person)=>{
    // console.log(this.state.post, this.state.put)
    if(person){
      this.setState({[toggleName]: !this.state[toggleName], currentPerson: person})
    }else{
      this.setState({[toggleName]: !this.state[toggleName]})
    }
  }

  render(){
    const {post, put, currentPerson}= this.state
    const family = this.state.family.map((person, i) => (
      <FamilyMember key={i} person={person} handleDelete={this.handleDelete} toggle={this.toggle} />
    ))
    return(
      
      <div>
        {post ? <Inputs
        type = 'post'
        toggleType = 'post' 
        toggle={this.toggle} 
        handleSubmit={this.handleSubmit} />: 
      <button onClick={() => this.toggle('post')}>Add</button>}
        {put &&<Inputs
        person = {currentPerson}
        type = 'put'
        toggleType = 'put' 
        toggle={this.toggle} 
        handleSubmit={this.handleSubmit} />}
        {family}
        </div>

    )
  }
}