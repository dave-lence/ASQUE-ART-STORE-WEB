import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { allArtData, artTypes } from "../assets/data";
import CategoryPlusPagination from "../components/CategoryPlusPagination";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MultiRangeSlider from "../components/MultiRangeSlider";

const Shop = () => {
    const { state } = useLocation();
    const [showCategories, setShowCategories] = useState(false);
    const [showFilterAndSort, setShowFilterAndSort] = useState(false);
    const [sliderMinValue, setSliderMinValue] = useState(0);
    const [sliderMaxValue, setSliderMaxValue] = useState(0);
    const [currentData, setCurrentData] = useState([])
    const [currentCategoryTitle, setCurrentCategoryTitle] = useState(
        state?.categoryTitle || "All Arts"
    );
    let highestArtPrice = Math.max(...allArtData.map(item => item.price), 0)

    const handleSliderChange = (min, max) => {
        setSliderMinValue(min);
        setSliderMaxValue(max);
    };

    useEffect(() => {
        if (currentCategoryTitle === "All Arts") {
            let newData = [...allArtData].sort(() => (Math.random() - 0.5))
            setCurrentData(newData)
        } else {
            changeCategory(currentCategoryTitle)
        }
    }, [currentCategoryTitle])

    // useEffect(() => {
    // }, [setCurrentData.length]);

    useEffect(() => {
        if (showCategories || showFilterAndSort) {
            document.body.style["overflow"] = "hidden";
        } else {
            document.body.style["overflow"] = "auto";
        }
    }, [showCategories, showFilterAndSort]);

    const changeCategory = (category) => {
        let specificCat = []
        for (let i = 0; i < allArtData.length; i++) {
            if (allArtData[i].category === category.toLowerCase()) {
                specificCat.push(allArtData[i])
            }
        }
        setCurrentData(specificCat)
    }

    const handleArtFilter = () => {
        let allCategories = ["All Arts", ...artTypes.map(item => item.name)];
        let checkboxChecked = [];
        for (let i = 0; i < allCategories.length; i++) {
            let getInput = document.getElementById(allCategories[i])
            if (getInput.checked) {
                checkboxChecked.push(allCategories[i])
            }
            if (checkboxChecked.includes('All Arts')) {
                break
            }
        }

        if ((checkboxChecked.length === 1 && checkboxChecked[0] === 'All Arts') || checkboxChecked.length === 0) {
            let filteredData = allArtData.filter(img => img.price >= sliderMinValue && img.price <= sliderMaxValue)
            setCurrentData(filteredData)
            setShowFilterAndSort(false)
            setCurrentCategoryTitle("Filtered Art")
        } else {
            let filteredData = []
            for (let i = 0; i < checkboxChecked.length; i++) {
                let filteredArt = allArtData.filter(
                    img => img.price >= sliderMinValue && img.price <= sliderMaxValue &&
                        img.category === checkboxChecked[i].toLowerCase()
                )
                filteredData.push(...filteredArt)
            }
            console.log(filteredData)
            setCurrentData(filteredData)
            setShowFilterAndSort(false)
            setCurrentCategoryTitle("Filtered Art")
        }
    }

    const renderArtData = () => {
        if (currentData.length === 0) {
            return (
                <div className="col-12 text-center">
                    <p className="no-art">No art match your filter parameters</p>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <CategoryPlusPagination
                        categoryData={currentData}
                    />
                </div>
            )
        }
    }
    return (
        <>
            <Navbar />
            <div className={showCategories ? "art-categories active" : "art-categories"}>
                <div className="category-div">
                    <h2>Categories</h2>
                    <hr />
                    <div className="categories-container">
                        <button className="category-btn" onClick={() => {
                            setShowCategories(false);
                            setCurrentCategoryTitle("All Arts")
                        }}>All Arts</button>
                        {artTypes.map((category) => (
                            <button
                                key={category.id} className="category-btn"
                                onClick={() => {
                                    setShowCategories(false);
                                    setCurrentCategoryTitle(category.name);
                                }}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <hr />
                    <button onClick={() => setShowCategories(false)} className="cat-close-btn">Close</button>
                </div>
            </div>
            <div className={showFilterAndSort ? "filter-sort active" : "filter-sort"}>
                <div className="filter-div">
                    {/* <h2>Filter Art</h2>
                    <hr /> */}
                    <div className="main-div">
                        <div className="price-div">
                            <h4>Price</h4>
                            {/* <hr /> */}
                            <MultiRangeSlider
                                min={0}
                                max={highestArtPrice}
                                onChange={({ min, max }) => handleSliderChange(min, max)}
                            />
                        </div>
                        <div className="cat-div">
                            <h4>Category</h4>
                            <div className="categories-container">
                                <div id="filter-checkboxes" className="my-2 mr-2">
                                    <input
                                        type="checkbox"
                                        name="All Arts"
                                        id="All Arts"
                                        value="All Arts"
                                        defaultChecked={true}
                                    />
                                    <label htmlFor="All Arts">All Arts</label>
                                </div>
                                {artTypes.map((category) => (
                                    <div
                                        key={category.id}
                                        id="filter-checkboxes"
                                        className="my-2 mr-2"
                                    >
                                        <input
                                            type="checkbox"
                                            name={category.name}
                                            id={category.name}
                                            value={category.name}
                                        />
                                        <label htmlFor={category.name}>{category.name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className="demarcator" />
                    <button onClick={handleArtFilter} className="filter-submit-btn">Filter</button>
                    <hr className="demarcator" />
                    <button onClick={() => setShowFilterAndSort(false)} className="filter-close-btn">Close</button>
                </div>
            </div>
            <div className="container shop-div">
                <div className="row shop-cta">
                    <div className="col-6">
                        <button
                            onClick={() => setShowCategories(!showCategories)}
                            className="btn"
                        >
                            Art Category
                        </button>
                    </div>
                    <div className="col-6">
                        <button
                            onClick={() => setShowFilterAndSort(!showFilterAndSort)}
                            className="btn filter_sort"
                        >
                            Filter & Sort Art
                        </button>
                    </div>
                </div>
                <hr />
                <h3 className="category-title">{currentCategoryTitle}</h3>
                <hr />
            </div>
            {renderArtData()}
            <Footer />
        </>
    )
}

export default Shop