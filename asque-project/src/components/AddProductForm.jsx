import { artTypes } from "../assets/data"
import './addproductform.css'
import addArtImg from '../assets/images/add-art.png'

const AddProductForm = (props) => {
    const handleAddProductSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted...')
    }
    return (
        <div className="product-form-div">
            <form onSubmit={handleAddProductSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="name">Name of Product</label>
                            <input type="text" placeholder="enter product name" required className="form-control" id="name" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="selectCategory">Select Category</label>
                            <select className="form-control" name="categories" id="selectCategory">
                                {artTypes.map(category => (
                                    <option key={category.id} value={category.name}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="artType">Art Type</label>
                            <input type="text" placeholder="enter art type" required className="form-control" id="artType" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="dimensions">Dimensions</label>
                            <input type="text" placeholder="input dimensions" required className="form-control" id="dimensions" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="price">Price ($)</label>
                            <input type="text" placeholder="enter price" required className="form-control" id="price" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="keywords">Keywords</label>
                            <input type="text" placeholder="enter keywords seperated with spaces" required className="form-control" id="keywords" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" rows="7" placeholder="not more than 100 words" id="description" />
                        </div>
                    </div>
                    <div className="col-lg-6 radio-div">
                        <div className="limited-div">
                            <p>Limited Production</p>
                            <input type="radio" name="limited-or-not" id="limited" />
                            <label htmlFor="limited"></label>
                        </div>
                        <div className="unlimited-div">
                            <p>Unlimited Production</p>
                            <input type="radio" name="limited-or-not" id="unlimited" />
                            <label htmlFor="unlimited"></label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p>Add Image</p>
                        <div className="add-art-wrapper">
                            <img className="add-art-icon" src={addArtImg} alt="add-art-icon" />
                            <input type="file" name="addArt" id="addArt" />
                        </div>
                    </div>
                </div>
                <div className="art-cta">
                    <button onClick={() => props.setActive('preview-art')} type="button" className="art-preview-btn">Preview</button>
                    <button type="button" className="publish-art-btn">Publish</button>
                </div>
            </form>
        </div>
    )
}

export default AddProductForm