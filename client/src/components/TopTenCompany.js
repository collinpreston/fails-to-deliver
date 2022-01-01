import ListGroup from 'react-bootstrap/ListGroup'
import React, { useState, useEffect } from 'react';
import './TopTenCompany.css'
function TopTenCompany() {

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
    );
}
export default TopTenCompany;