import React,{Component} from 'react';

// const SearchBar= ()=>{
//   return <input />;
// };

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state={term:''};
  }
  render(){
    return (
      <div className="search_bar">
        <input onChange={event=>this.onInputChange({term: event.target.value })} />
        {/*Value of the input is :{this.state.term}*/}
      </div>
      );
  }
  onInputChange(term){
    this.setState(term);
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
