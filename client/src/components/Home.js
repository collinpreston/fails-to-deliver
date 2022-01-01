import React, { useState } from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import CompanyGraph from './CompanyGraph';
import moment from 'moment';
import DocumentMeta from 'react-document-meta';

const Home = () => {

  const meta = {
    title: 'Fails to deliver data - Home',
    description: 'failsdata.com home page',
    canonical: 'http://failsdata.com/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'stock,SEC,fails,FTD,GME'
      }
    }
  };


  const [companySymbol, setCompanySymbol] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyData, setCompanyData] = useState([]);
  const [graphShown, setGraphShown] = useState(false);
  const [companyLastUpdatedOn, setCompanyLastUpdatedOn] = useState("");

  function fetchSettlementsForCompany(companyId) {
    const url = `/api/v1/company/${companyId}`;
    fetch(url)
      .then(async (res) => {
        const a = await res.json()
        let newData = a.settlements.map(item => {
          return { ...item, settlement_date: moment(item.settlement_date).format('MMM DD, YYYY') }
        });
        setCompanyLastUpdatedOn(a.data_last_updated)
        setCompanyData(newData)
        return a
      })
      .catch(error => console.log(error))
  }

  function handleExplicitUrlSymbolDefined() {
    setCompanySymbol(props.match.params.id);
  }

  function handleSearchSelection(item) {
    setCompanySymbol(item.symbol);
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
    <DocumentMeta {...meta}>
      <div className="Home">
        <div className="Title" onClick={resetHomePage}>Fails-to-Deliver Data</div>
        <div className="SearchBar">
          <SearchBar onSelectCompany={handleSearchSelection} onClearSearch={resetHomePage} style={{ width: '50%' }} />
        </div>
        <br />
        {graph}
        {dataRetrievedDate}
      </div>
    </DocumentMeta>
  );
}

export default Home;