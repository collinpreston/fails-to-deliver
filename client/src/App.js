import React, { useState }  from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CompanyGraph from './components/CompanyGraph';
import moment from 'moment';
import NavLogo from './components/NavLogo';
import MadeWithLove from 'react-made-with-love';

const App = () => {
  const [companySymbol, setCompanySymbol] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyData, setCompanyData] = useState([]);
  const [graphShown, setGraphShown] = useState(false);
  const [companyLastUpdatedOn, setCompanyLastUpdatedOn] = useState("")

  function fetchSettlementsForCompany(companyId) {
    const url = `/api/v1/company/${companyId}`;
    fetch(url)
        .then(async(res) => {
            const a = await res.json()
            let newData = a.settlements.map(item => { 
              return {...item, settlement_date: moment(item.settlement_date).format('MMM DD, YYYY')}
            });
            setCompanyLastUpdatedOn(a.data_last_updated)
            setCompanyData(newData)
            return a
        })
        .catch(error => console.log(error))
  }

  function handleSearchSelection(item) {
    setCompanySymbol(item.symbol);
    console.log(item)
    setCompanyName(item.name);
    setGraphShown(true);
    fetchSettlementsForCompany(item.id)
  }

  let graph, dataRetrievedDate;
  if (graphShown) {
    graph = <CompanyGraph selectedCompanyName={companyName} selectedCompanySymbol={companySymbol} selectedCompanyData={companyData}></CompanyGraph>
    dataRetrievedDate = <p>{"Data last updated on " + moment(companyLastUpdatedOn).format('MMM DD, YYYY')}</p>
  }

  return (
    <div className="App">
      <NavLogo/>
      <div className="Title">Fails-to-Deliver Data</div>
      <div className="SearchBar">
        <SearchBar onSelectCompany={handleSearchSelection} style={{width: '50%'}}/>
      </div>
      <br/>
      {graph}
      {dataRetrievedDate}
      <footer>
        <MadeWithLove
          by="Collin"
          emoji
        />
      </footer>
    </div>
  );
}

export default App;