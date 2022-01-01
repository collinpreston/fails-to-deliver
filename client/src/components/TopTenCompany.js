import ListGroup from 'react-bootstrap/ListGroup'
import DocumentMeta from 'react-document-meta';
import React, { useState, useEffect } from 'react';
import './TopTenCompany.css'
function TopTenCompany() {
    const meta = {
        title: 'Fails to deliver data - About',
        description: 'About failsdata.com and stock FTD frequently asked questions',
        canonical: 'http://failsdata.com/about',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'about,fails,stocks,SEC,deliver'
            }
        }
    };

    const [topTen, setTopTen] = useState([]);

    function fetchTopTen() {
        const url = `/api/v1/company/top-ten`;
        fetch(url)
            .then(async (res) => {
                const a = await res.json()
                setTopTen(a)
            })
            .catch(function (error) {
                console.log('Error Code   : ' + error.status);
                console.log('Error Reason : ' + error.statusText);
            });
    }

    useEffect(() => {
        fetchTopTen()
    }, []);

    function listItemsFromArray() {
        var listItems = topTen.map(function (company) {
            return <ListGroup.Item action href={'/' + company.symbol} key={company.id}>{company.symbol + " - " + company.quantity}</ListGroup.Item>
        })
        return listItems
    }

    return (
        <>
            <DocumentMeta {...meta}>
                <div>
                    <div id="top-ten-title">
                        <h5>Top 10 FTD by volume</h5>
                    </div>
                    <div id="top-ten-list">
                        <div>Symbol - Quantity</div>
                        <ListGroup as="ol" numbered>
                            {listItemsFromArray()}
                        </ListGroup>
                    </div>
                </div>
            </DocumentMeta>
        </>
    );
}
export default TopTenCompany;