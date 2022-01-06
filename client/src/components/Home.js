import React, { useState, useEffect } from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import CompanyGraph from './CompanyGraph';
import TopTenCompany from './TopTenCompany';
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
  let metadataDescription = 'failsdata.com provides FTD data on thousands of stocks direct from the Securities and Exchange Commission (SEC).'
  let metadataKeywords = 'stock,SEC,fails,FTD,deliver,short,interest,GME'
  let canonical = 'https://failsdata.com/'

  if (companySymbol !== undefined) {
    metadataTitle = `${companySymbol} fails to deliver stock price and volume data from the Securities and Exchange Commission (SEC).`
    metadataKeywords = `${companySymbol},stock,SEC,fails,FTD,deliver,short,interest,GME`
  }

  if (companySymbol !== undefined && companyName !== undefined) {
    metadataDescription = `${companySymbol} - ${companyName} fails to deliver stock price and volume data from the Securities and Exchange Commission (SEC).`
  }

  if (companySymbol !== undefined && companyName !== undefined) {
    canonical = `'https://failsdata.com/${companySymbol}/`
  }

  let meta = {
    title: metadataTitle,
    description: metadataDescription,
    canonical: 'https://failsdata.com/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: metadataKeywords
      }
    }
  };

  let { slug } = useParams();
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

  function resetHomePage() {
    setGraphShown(false);
    setCompanyName("")
    setCompanySymbol("");
    navigate('/');
  }

  let graph, dataRetrievedDate, topTenTable;
  if (graphShown) {
    graph = <CompanyGraph selectedCompanyName={companyName} selectedCompanySymbol={companySymbol} selectedCompanyData={companyData}></CompanyGraph>
    dataRetrievedDate = <p>{"Data last updated on " + moment(companyLastUpdatedOn).format('MMM DD, YYYY')}</p>
  }

  return (
    <DocumentMeta {...meta}>
      <div className="Home">
        <h1 className="Title" onClick={resetHomePage}>Fails-to-Deliver Data</h1>
        <div className="SearchBar">
          <SearchBar onSelectCompany={handleSearchSelection} onClearSearch={resetHomePage} style={{ width: '50%' }} />
        </div>
        <br />
        {graphShown || <TopTenCompany/>}
        {graph}
        {dataRetrievedDate}
      </div>
    </DocumentMeta>
  );
}

export default Home;