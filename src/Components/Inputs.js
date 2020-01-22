import React, {Component} from 'react'

export default class Inputs extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: '',
      name: '',
      age: '',
      gender: 'male',
      birthOrder: '',
      notes: '',
      sectionOne: true,
      sectionTwo: false,
      sectionThree: false
    }
  }
  componentDidMount(){
    const {type} = this.props
    if(type === 'put'){
      const {id, name, age, gender, birthOrder, notes} = this.props.person
      this.setState({id, name, age, gender, birthOrder, notes})
    }
  }

  toggle=(toFalse, toTrue)=>{
    this.setState({[toFalse]: !this.state[toFalse], [toTrue]: !this.state[toTrue]})
  }

  handleChange = ({name, value}) =>{
    this.setState({[name]: value})
  }

  render(){
    const {id, name, age, gender, birthOrder, notes, sectionOne, sectionTwo, sectionThree} = this.state
    const {handleSubmit, toggle, type, toggleType} = this.props
    if(sectionOne){
      return(
        <section>
          <button onClick={() => toggle(type)}>Cancel</button>
          <input
            name ="name"
            value={name}
            placeholder="name"
            onChange ={(e) => this.handleChange(e.target)}  
          />
          <select
            name ="age"
            value={age}
            placeholder="age"
            onChange ={(e) => this.handleChange(e.target)}
          >
            {[...Array(100)].map((el, i) => <option key={i}>{i+1}</option>)}
          </select>
          <button
            onClick={() => this.toggle('sectionOne', 'sectionTwo')}
          >Next</button>
        </section>
      )
    }else if(sectionTwo){
      return (
        <section>
          <button onClick={() => toggle(type)}>Cancel</button>
          <select
            name ="birthOrder"
            value={birthOrder}
            placeholder="Birth Order"
            onChange ={(e) => this.handleChange(e.target)}
          >
          {[...Array(15)].map((el, i) => <option key={i}>{i+1}</option>)}
          </select>
          <select
            name ="gender"
            value={gender}
            placeholder="gender"
            onChange ={(e) => this.handleChange(e.target)} 
          >
            <option>Male</option>
            <option>Female</option>
          </select>
          <button
            onClick={() => this.toggle('sectionTwo', 'sectionOne')}
          >Back</button>
          <button
            onClick={() => this.toggle('sectionTwo', 'sectionThree')}
          >Next</button>
        </section>
      )
    }else{
      return(
      <section>
        <button onClick={() => toggle(type)}>Cancel</button>
        <button
          onClick={() => {
            handleSubmit(
              {id, name, age, gender, birthOrder, notes},
              type,
              'family'
            )
            toggle(type)
          }}
        >Submit</button>
        <textarea
          name ="notes"
          value={notes}
          placeholder="notes"
          onChange ={(e) => this.handleChange(e.target)}
        />
        <button
          onClick={()=> this.toggle('sectionThree', 'sectionTwo')}
        >Back</button>
      </section>
      )
    }
  }
}