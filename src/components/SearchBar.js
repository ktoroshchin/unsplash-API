import React from 'react';

class SearchBar extends React.Component {

  state = {
    term:''
  }

  formOnSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render(){
    return(
      <div className="ui segment">
        <form onSubmit={this.formOnSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input onChange={(e) => this.setState({term: e.target.value})} value={this.state.term} type="text"/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;