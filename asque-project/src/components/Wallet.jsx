import './wallet.css'
import { withdrawalHistoryData } from '../assets/data'
import MoneyStatus from "./MoneyStatus"

const Wallet = (props) => {
    return (
        <div className="container wallet-div">
            <MoneyStatus />
            <button onClick={() => props.setActive("withdraw")} className="withdraw-btn">Withdraw</button>

            <div className="container withdrawal-history-div">
                <h5>Withdrawal history</h5>
                <div className="row">
                    <div className="col-lg-3">
                        <p>Date</p>
                    </div>
                    <div className="col-lg-3">
                        <p>Time</p>
                    </div>
                    <div className="col-lg-3">
                        <p>Amount($)</p>
                    </div>
                    <div className="col-lg-3">
                        <p>Status</p>
                    </div>
                </div>
                {withdrawalHistoryData.map(action => (
                    <div key={action.id} className="row action-row">
                        <div className="col-lg-3">{action.date}</div>
                        <div className="col-lg-3">{action.time}</div>
                        <div className="col-lg-3">{action.amount}</div>
                        <div className="col-lg-3">
                            {action.status}
                            <i className={action.status === 'Failed' ? "fa fa-times" : "fa fa-check"}></i>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="history-head">
                    <p>Date</p>
                    <p>Time</p>
                    <p>Amount($)</p>
                    <p>Status</p>
                </div> */}
            {/* <div className="row">
                    <div className="col-lg-9">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Amount($)</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Yes</td>
                                        <td>No</td>
                                        <td>Maybe</td>
                                        <td>Definitely</td>
                                    </tr>
                                    <tr>
                                        <td>Yes</td>
                                        <td>No</td>
                                        <td>Maybe</td>
                                        <td>Definitely</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}
        </div>
    )
}

export default Wallet