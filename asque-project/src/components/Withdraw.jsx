import MoneyStatus from "./MoneyStatus"
import './withdraw.css'
import './wallet.css'
import { bankTypes } from "../assets/data"

const Withdraw = (props) => {
    const handleWithdrawSubmit = (e) => {
        e.preventDefault()
        props.setActive("wallet")
    }
    return (
        <div className="withdraw-div">
            <MoneyStatus />
            <h5>Withdrawal Details</h5>
            <p>Please specify bank account and Amount</p>
            <p className="add-bank">Add another bank account for withdrawal</p>
            <form onSubmit={handleWithdrawSubmit}>
                <div className="form-group">
                    <label htmlFor="selectBank">Select Bank</label>
                    <select className="form-control" name="banks" id="selectBank">
                        {bankTypes.map(bank => (
                            <option key={bank.id} value={bank.name}>{bank.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="enterAmount">Amount</label>
                    <input type="number" required className="form-control" id="enterAmount" />
                </div>
                <div className="form-group">
                    <label htmlFor="enterDescription">Description (optional)</label>
                    <textarea className="form-control" rows="7" placeholder="not more than 50 words" id="enterDescription" />
                </div>
                <button className="btn" type="submit">submit</button>
            </form>
        </div>
    )
}

export default Withdraw