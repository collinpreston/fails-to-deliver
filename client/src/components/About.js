import Accordion from 'react-bootstrap/Accordion'
import DocumentMeta from 'react-document-meta';
import './About.css'
function About() {
    const meta = {
        title: 'About',
        description: 'About failsdata.com and stock FTD frequently asked questions',
        canonical: 'http://failsdata.com/about',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'about,fails,stocks,SEC,deliver'
            }
        }
    };

    return (
        <>
            <DocumentMeta {...meta}>
                <div>
                    <div id="FAQ-title">
                        <h1>Frequently Asked Questions</h1>
                        <p>Feel free to contact us below for any questions not answered here.</p>
                    </div>
                    <div id="accordian-tag">
                        <Accordion id="accordian">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What does fails-to-deliver mean?</Accordion.Header>
                                <Accordion.Body>
                                    Failure to deliver (FTD) refers to a situation where one party in a trading contract
                                    (whether it's shares, futures, options, or forward contracts) doesn't deliver on their obligation.
                                    Such failures occur when a buyer (the party with a long position) doesn't have enough money to
                                    take delivery and pay for the transaction at settlement. - <a href="https://www.investopedia.com/terms/f/failuretodeliver.asp">investopedia.com</a>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Where is this data from?</Accordion.Header>
                                <Accordion.Body>
                                    This data is publically available directly from the Securities and Exchange Commission (SEC) <a href="https://www.sec.gov/data/foiadocsfailsdatahtm">here</a>.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How often is the data updated?</Accordion.Header>
                                <Accordion.Body>
                                    The SEC publishes new data bi-monthly.  The first half of a given month is available at the end of the month.
                                    The second half of a given month is available at about the 15th of the next month.
                                    Our servers check for new data nightly.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Why is there not more historical data?</Accordion.Header>
                                <Accordion.Body>
                                    Cost.  We only make money through donations (<a href="https://www.paypal.com/donate/?hosted_button_id=UFQ23NBQ7YDJU">PayPal</a>).  Each report from the SEC can contain
                                    40k entries, which must be consumed and stored into our database.  Hosting and managing our
                                    current infrastructure costs $12 a month.  Adding more historically data will double or tripple
                                    that cost.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Why can't I find data for a symbol</Accordion.Header>
                                <Accordion.Body>
                                    Not all publically traded companies, funds, stocks, will have shares that
                                    failed to be delivered prior to their settlement date.  If you don't see
                                    the stock symbol you're looking for, that may be that case.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Do you offer an API?</Accordion.Header>
                                <Accordion.Body>
                                    Yes we do!  You can check out our <a href="/api">API page</a>.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </DocumentMeta>
        </>
    );
}
export default About;