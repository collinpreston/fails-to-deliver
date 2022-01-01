import Accordion from 'react-bootstrap/Accordion'
import JSONPretty from 'react-json-pretty';
import DocumentMeta from 'react-document-meta';
import './API.css'

function API() {
    const meta = {
        title: 'Fails to deliver data - API',
        description: 'Stock Fails to deliver data API.',
        canonical: 'http://failsdata.com/api',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'API,fails,stocks,deliver,data'
            }
        }
    };

    const companySearchResponse = `{
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

    const companyListResponse = `[
        {
            "id": 1,
            "symbol": "AGRI",
            "name": "AGRIFORCE GROWING SYS LTD COM "
        },
        {
            "id": 2,
            "symbol": "VMAR",
            "name": "VISION MARINE TECHNOLOGIES INC"
        },
        {
            "id": 3,
            "symbol": "DDAIF",
            "name": "DAIMLER AG"
        },
        {
            "id": 4,
            "symbol": "DB",
            "name": "DEUTSCHE BANK AG NAMEN AKT (DE"
        },
        {
            "id": 5,
            "symbol": "CSTM",
            "name": "CONSTELLIUM SE CL A SHS USD (F"
        }]`

    const topTenResponse =
        `[
                {
                    "id": 5252,
                    "symbol": "TWOH",
                    "quantity": 52727790
                },
                {
                    "id": 407,
                    "symbol": "KNEOF",
                    "quantity": 45163750
                },
                {
                    "id": 5000,
                    "symbol": "SNDL",
                    "quantity": 24628135
                },
                {
                    "id": 3515,
                    "symbol": "LGBS",
                    "quantity": 23180885
                },
                {
                    "id": 946,
                    "symbol": "BKKT",
                    "quantity": 16575943
                },
                {
                    "id": 4601,
                    "symbol": "HOOD",
                    "quantity": 16313967
                },
                {
                    "id": 1795,
                    "symbol": "GWH",
                    "quantity": 12924879
                },
                {
                    "id": 4352,
                    "symbol": "PROG",
                    "quantity": 11400931
                },
                {
                    "id": 5167,
                    "symbol": "TMBR",
                    "quantity": 11213448
                },
                {
                    "id": 2144,
                    "symbol": "FTSSF",
                    "quantity": 11197532
                }
            ]`

    return (
        <DocumentMeta {...meta}>
            <div id="api-title">
                <h1>API</h1>
                <br />
                <Accordion id="api-endpoints">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>/api/v1/company/:id</Accordion.Header>
                        <Accordion.Body>
                            <p><b>Description:</b> Returns all of the failed delivery data for a single company.</p>
                            <p><b>Parameters:</b> id - The Id or Symbol of the company being searched.</p>
                            <p><b>Returns:</b> </p>
                            <JSONPretty id="json-pretty" json={companySearchResponse}></JSONPretty>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>/api/v1/company</Accordion.Header>
                        <Accordion.Body>
                            <p><b>Description:</b> Returns all of the companies available</p>
                            <p><b>Returns:</b> </p>
                            <JSONPretty id="json-pretty" json={companyListResponse}></JSONPretty>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>/api/v1/company/top-ten</Accordion.Header>
                        <Accordion.Body>
                            <p><b>Description:</b> Returns the top 10 FTD companies by quantity</p>
                            <p><b>Returns:</b> </p>
                            <JSONPretty id="json-pretty" json={topTenResponse}></JSONPretty>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </DocumentMeta>
    )
}
export default API
