import React, { useState, useEffect } from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import CompanyGraph from './CompanyGraph';
import moment from 'moment';
import DocumentMeta from 'react-document-meta';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const [companySymbol, setCompanySymbol] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyData, setCompanyData] = useState([]);
  const [graphShown, setGraphShown] = useState(false);
  const [companyLastUpdatedOn, setCompanyLastUpdatedOn] = useState("");

  let metadataTitle = 'Fails to deliver data - Home'
  let metadataDescription = 'failsdata.com provides FTD data on thousands of stocks direct from the SEC.'
  let metadataKeywords = 'stock,SEC,fails,FTD,GME'

  if (companySymbol !== undefined) {
    metadataTitle = `${companySymbol} fails-to-deliver data`
    metadataKeywords = `${companySymbol},stock,SEC,fails,FTD,GME`
  }

  if (companySymbol !== undefined && companyName !== undefined) {
    metadataDescription = `${companySymbol} - ${companyName} data from failsdata.com`
  }

  let meta = {
    title: metadataTitle,
    description: metadataDescription,
    canonical: 'http://failsdata.com/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: metadataKeywords
      }
    }
  };

  let { slug } = useParams();

  function resetHomePage() {
    setGraphShown(false);
    setCompanyName("")
    setCompanySymbol("");
    navigate('/');
  }

  useEffect(() => {
    if (slug !== undefined) {
      handleExplicitUrlSymbolDefined();
    }
  }, []);

  function fetchSettlementsForCompany(companyId) {
    const url = `/api/v1/company/${companyId}`;
    fetch(url)
      .then(async (res) => {
        const a = await res.json()
        let newData = a.settlements.map(item => {
          return { ...item, settlement_date: moment(item.settlement_date).format('MMM DD, YYYY') }
        });
        setCompanyLastUpdatedOn(a.data_last_updated)
        setCompanyName(a.description)
        setCompanySymbol(a.symbol)
        setCompanyData(newData)
        return a
      })
      .catch(function (error) {
        navigate('/404');
        console.log('Error Code   : ' + error.status);
        console.log('Error Reason : ' + error.statusText);
      });
  }

  function handleExplicitUrlSymbolDefined() {
    fetchSettlementsForCompany(slug)
    setGraphShown(true);
  }

  function handleSearchSelection(item) {
    navigate(`/${item.symbol}`)
    setCompanySymbol(item.symbol);
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