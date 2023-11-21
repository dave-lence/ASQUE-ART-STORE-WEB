import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './categorypluspagination.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CategoryPlusPagination = ({ categoryData }) => {
    // const navigate = useNavigate();
    const dataToRender = categoryData;
    let userIsAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const notify = (message, errorType) =>
        toast(message, {
            position: "top-right",
            autoClose: "3000",
            pauseOnHover: true,
            closeOnClick: true,
            type: errorType,
            theme: "colored",
        });

    const handleWishlistClick = (id) => {
        if (userIsAuthenticated) {
            let theWishlist = JSON.parse(localStorage.getItem("wishlist"))
            if (theWishlist === null) {
                localStorage.setItem("wishlist", JSON.stringify([id]))
            } else {
                let newWishlist = [...theWishlist]
                if (!theWishlist.includes(id)) {
                    newWishlist.push(id)
                }
                localStorage.setItem("wishlist", JSON.stringify(newWishlist))
            }
            notify("Art has been added to your wishlist!", "success")
        } else {
            notify("Please log in to add art to your wishlist!", "info")
        }
    };

    const addToCart = (id) => {
        let theCart = JSON.parse(localStorage.getItem("asqueCart"))
        if (theCart === null) {
            localStorage.setItem("asqueCart", JSON.stringify([id]))
        } else {
            let newCart = [...theCart]
            if (!theCart.includes(id)) {
                newCart.push(id)
            }
            localStorage.setItem("asqueCart", JSON.stringify(newCart))
        }
        notify("Art has been added to your cart!", "success")
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentPage(1)
    }, [dataToRender])

    const pageNumberLimit = 3;
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(dataToRender.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dataToRender.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    id={number}
                    key={number}
                    onClick={handleClick}
                    className={currentPage === number ? "numbers active" : "numbers"}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    return (
        <>
            <div className="row">
                {currentItems && currentItems.map(art => (
                    <div key={art.id} className="col-lg-3 col-md-4 col-sm-6 art-col">
                        <div className="art-block">
                            <div className="image-wrapper">
                                <img src={art.image} alt={art.slug}
                                    className="img-fluid" />
                                <div id="slide">
                                    <NavLink to={`/shop/art/${art.slug}`} className="btn">
                                        View Art
                                    </NavLink>
                                    <div className="utilities">
                                        <i
                                            onClick={() => addToCart(art.id)}
                                            className="fas fa-shopping-bag"
                                        ></i>
                                        <i
                                            onClick={() => handleWishlistClick(art.id)}
                                            className="fas fa-heart"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                            <NavLink
                                to={`/shop/art/${art.slug}`}
                                className="single-art-link"
                            >
                                <div className="art-info">
                                    <p>{art.name}</p>
                                    <h6>${art.price}</h6>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            {pages.length > 1 ? (
                <div className="pageNumbers">
                    <div className="btn-cover-prev">
                        <button
                            onClick={handlePrevBtn}
                            disabled={currentPage === pages[0] ? true : false}
                        >
                            Prev
                        </button>
                    </div>
                    <div className="numbers">
                        <ul>{renderPageNumbers}</ul>
                    </div>
                    <div className="btn-cover-next">
                        <button
                            onClick={handleNextBtn}
                            disabled={
                                currentPage === pages[pages.length - 1] ? true : false
                            }
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default CategoryPlusPagination