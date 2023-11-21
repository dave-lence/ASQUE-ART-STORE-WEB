import moneyIcon from '../assets/images/bill.png'
import './moneystatus.css'

const MoneyStatus = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4">
                    <div className="earnings-div">
                        <div className="earning-description">
                            <h3>$300,000</h3>
                            <p>Total Earnings <br />USD</p>
                        </div>
                        <div className="money-div">
                            <img className="money-icon" src={moneyIcon} alt="money-icon" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="earnings-div">
                        <div className="earning-description">
                            <h3>#3,000,000</h3>
                            <p>Total Earnings <br />Naira</p>
                        </div>
                        <div className="money-div">
                            <img className="money-icon" src={moneyIcon} alt="money-icon" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="earnings-div">
                        <div className="earning-description">
                            <h3>$210,000</h3>
                            <p>Available to <br />Payout</p>
                        </div>
                        <div className="money-div">
                            <img className="money-icon" src={moneyIcon} alt="money-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoneyStatus