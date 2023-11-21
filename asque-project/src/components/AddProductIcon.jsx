import './addproducticon.css'

const AddProduct = (props) => {
    return (
        <div className="addproduct-div">
            <div onClick={() => props.setActive('product-form')} className="add-cta">
                <i className="fa fa-plus"></i>
                <p>Add a Product</p>
            </div>
        </div>
    )
}

export default AddProduct