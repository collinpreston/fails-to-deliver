import React, { useState }  from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import CompanyGraph from './CompanyGraph';
import moment from 'moment';

const Home = () => {
  const [companySymbol, setCompanySymbol] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyData, setCompanyData] = useState([]);
  const [graphShown, setGraphShown] = useState(false);
  const [companyLastUpdatedOn, setCompanyLastUpdatedOn] = useState("");

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

  function resetHomePage() {
    setGraphShown(false);
  }

  let graph, dataRetrievedDate;
  if (graphShown) {
    graph = <CompanyGraph selectedCompanyName={companyName} selectedCompanySymbol={companySymbol} selectedCompanyData={companyData}></CompanyGraph>
    dataRetrievedDate = <p>{"Data last updated on " + moment(companyLastUpdatedOn).format('MMM DD, YYYY')}</p>
  }

  return (
    <div className="Home">
      <div className="Title" onClick={resetHomePage}>Fails-to-Deliver Data</div>
      <div className="SearchBar">
        <SearchBar onSelectCompany={handleSearchSelection} onClearSearch={resetHomePage} style={{width: '50%'}}/>
      </div>
      <br/>
      {graph}
      {dataRetrievedDate}
    </div>
  );
}

export default Home;