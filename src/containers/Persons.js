import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions'

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAddition} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeletion(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAddition: (name,age) => dispatch({ type: actionTypes.ADD_PERSON, personData: {name: name, age: age} }),
        //onPersonAddition: (name,age) => dispatch({type: actionTypes.ADD_PERSON, name: name, age: age}), // another way
        onPersonDeletion: (id) => dispatch({type: actionTypes.DELETE_PERSON, personId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);