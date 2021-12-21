import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selection: ""
        }
      }

    componentDidMount(){
      this.fetchData();
    }

    handleOnSelect = (item) =>{
      this.props.onSelectCompany(item)
    };
  
  
    fetchData(){
        const url = '/api/v1/company';
        fetch(url)
            .then(async(res) => {
                const a = await res.json()
                this.setState({data: a})
                return a
            })
            .catch(error => console.log(error))
    }
  
    render() {
      return (
        <ReactSearchAutocomplete
            items={this.state.data}
            fuseOptions={{ keys: ["symbol", "name"] }} // Search on both fields
            autoFocus
            onSelect={this.handleOnSelect}
            resultStringKeyName="symbol" // String to display in the results
            placeholder={'Search by symbol or name'}
            styling={{ zIndex: 2 }} // To display it on top of the search box below
          />
      );
    }
  }

export default SearchBar;
