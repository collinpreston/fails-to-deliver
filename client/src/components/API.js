import Accordion from 'react-bootstrap/Accordion'
import './API.css'

function API() {
    const company_search_response = `{
        "id": 1,
        "data_last_updated": "2021-12-20 17:37:47 -0500",
        "settlements": [
            {
                "id": 1,
                "settlement_date": "20211101",
                "quantity": 183855,
                "price": "3.05",
                "created_at": "2021-12-20T22:37:47.702Z",
                "updated_at": "2021-12-20T22:37:47.702Z",
                "settlement_period_id": 1,
                "company_id": 1
            },
            {
                "id": 5706,
                "settlement_date": "20211102",
                "quantity": 88351,
                "price": "2.7",
                "created_at": "2021-12-20T22:40:19.951Z",
                "updated_at": "2021-12-20T22:40:19.951Z",
                "settlement_period_id": 1,
                "company_id": 1
            },
            {
                "id": 17613,
                "settlement_date": "20211104",
                "quantity": 2444,
                "price": "2.37",
                "created_at": "2021-12-20T22:43:55.109Z",
                "updated_at": "2021-12-20T22:43:55.109Z",
                "settlement_period_id": 1,
                "company_id": 1
            },
            {
                "id": 23520,
                "settlement_date": "20211105",
                "quantity": 2932,
                "price": "2.3",
                "created_at": "2021-12-20T22:45:26.164Z",
                "updated_at": "2021-12-20T22:45:26.164Z",
                "settlement_period_id": 1,
                "company_id": 1
            },
            {
                "id": 29552,
                "settlement_date": "20211108",
                "quantity": 854,
                "price": "2.41",
                "created_at": "2021-12-20T22:46:56.273Z",
                "updated_at": "2021-12-20T22:46:56.273Z",
                "settlement_period_id": 1,
                "company_id": 1
            },
            {
                "id": 35475,
                "settlement_date": "20211109",
                "quantity": 758,
                "price": "2.28",
                "created_at": "2021-12-20T22:48:31.526Z",
                "updated_at": "2021-12-20T22:48:31.526Z",
                "settlement_period_id": 1,
                "company_id": 1
            },
            {
                "id": 41505,
                "settlement_date": "20211110",
                "quantity": 15092,
                "price": "2.19",
                "created_at": "2021-12-20T22:50:16.731Z",
                "updated_at": "2021-12-20T22:50:16.731Z",
                "settlement_period_id": 1,
                "company_id": 1
            },
            {
                "id": 47564,
                "settlement_date": "20211112",
                "quantity": 49856,
                "price": "2.23",
                "created_at": "2021-12-20T22:52:14.358Z",
                "updated_at": "2021-12-20T22:52:14.358Z",
                "settlement_period_id": 1,
                "company_id": 1
            }
        ]
    }`;

    return (
        <div id="title">
            <h1>API</h1>
            <br/>
            <Accordion id="accordian">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>/api/v1/company/:id</Accordion.Header>
                    <Accordion.Body>
                        <p><b>Description:</b> Returns all of the failed delivery data for a single company.</p>
                        <p><b>Parameters:</b> id - The Id of the company being searched.</p>
                        <p><b>Returns:</b> </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>/api/v1/company</Accordion.Header>
                    <Accordion.Body>
                        <p><b>Description:</b> Returns all of the failed delivery data for a single company.</p>
                        <p><b>Parameters:</b> id - The Id of the company being searched.</p>
                        <p><b>Returns:</b> </p>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </div>
    )
}
export default API
