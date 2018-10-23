import React, { Component } from 'react'


export default class FormMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:"",
          poster:"",
          comment:"",
        }    
      }
        
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
       }

    
    
    submitForm = (e) => {
    
      e.preventDefault();
      
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
        };
      
      
      const url = "http://92.175.11.66:3001/api/quests/movies/";
      
      fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Le film été ajouté avec l'ID ${res}!`);
          console.log(JSON.stringify(this.state))
        }
      }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'un film');
      });
      
  }
 
       
  render() {
    


    return (
        <div className="FormMovie">
            <h1>THE BEST MOVIE EVER IS :</h1>
        
            <form onSubmit={this.submitForm}>
            
            <fieldset>
                <legend>Merci de remplir ce formulaire</legend>
                
                
                
                <div className="form-data">
                <label htmlFor="name">Title:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                    required
                />
                </div>
        
                <div className="form-data">
                <label htmlFor="poster">Poster path :</label>
                <input
                    type="url"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                    required
                />
                </div>
        
                <div className="form-data">
                <label htmlFor="comment">A word about this movie :</label>
                <textarea
                    type="text"
                    id="comment"
                    name="comment"
                    onChange={this.onChange}
                    value={this.state.comment}
                    required
                />
                </div>

                <hr />

                <div className="form-data">
                <input className="but" type="submit" value="Envoyer"/>
                </div>
            
              </fieldset>
            </form>
        </div>
    )
  }
}














