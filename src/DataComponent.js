import React, {Component} from 'react'
import App from './App'

class DataComponent extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        let person = this.props.person
        
        return(
            <div className='Display-component'>
                <div className='Display-subdiv'>
                    <h2 className='name'>{person.name.first} {person.name.last}</h2>
                    <h3>From: {person.city}, {person.country}</h3>
                    <h3>Job Title: {person.title}</h3>
                    <h3 className='employer'>Employer: {person.employer}</h3>
                    <h3>Favorite Movies:
                        <ol className='list'>
                            <li>{person.favoriteMovies[0]}</li>
                            <li>{person.favoriteMovies[1]}</li>
                            <li>{person.favoriteMovies[2]}</li>
                        </ol>
                    </h3>
                </div>
            </div>
        )
    }
}

export default DataComponent;