import Navbar from "../components/Navbar"
import heroImg from '../assets/images/hero1.png'
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import Wallet from "../components/Wallet"
import Withdraw from "../components/Withdraw"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import MyArtworks from "../components/MyArtworks"
import SoldItems from "../components/SoldItems"
import { allArtData } from "../assets/data"
import AddProductIcon from "../components/AddProductIcon"
import AddProductForm from "../components/AddProductForm"
import PreviewArt from "../components/PreviewArt"
import OrderList from "../components/OrderList"
import Wishlist from "../components/Wishlist"


const Dashboard = () => {
  const { pathname } = useLocation();
  let navigate = useNavigate()
  let order_open = useLocation()
  const [active, setActive] = useState("wallet")
  let randomData = [...allArtData].sort(() => (Math.random() - 0.5)).slice(0, 5)
  let randomData2 = [...allArtData].sort(() => (Math.random() - 0.5)).slice(0, 5)
  let randomizedData = [...allArtData].sort(() => (Math.random() - 0.5)).slice(0, 3)
  let userIsAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))
  let view_order = order_open.state

  useEffect(() => {
    if (view_order) {
      // console.log('user wants to view order')
      setActive("order")
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!userIsAuthenticated) {
      navigate('/login', { state: { previousPath: pathname } })
    }
  }, [userIsAuthenticated])


  return (
    <>
      <Navbar />
      <Hero orient={"center"} img={heroImg} editMode={false} />
      <div className="container profile-div">
        <h5 className="name">Alina Starkov</h5>
        <div className="row">
          <div className="col-lg-8">
            <h6 className="bio">Bio</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ratione dolores similique ab molestias sint neque praesentium expedita quas laborum!</p>
          </div>
          <div className="col-lg-4">
            <NavLink to="/user/dashboard/edit-profile">
              <i className="fa fa-pen"></i>
            </NavLink>
          </div>
        </div>
        <div className="profile-actions">
          <p onClick={() => setActive("wallet")} className={active === 'wallet' || active === "withdraw" ? "active" : null}>Wallet</p>
          <p onClick={() => setActive("product")} className={active === 'product' || active === 'product-form' || active === 'preview-art' ? "active" : null}>Product</p>
          <p onClick={() => setActive("my-artworks")} className={active === 'my-artworks' ? "active" : null}>My Artworks</p>
          <p onClick={() => setActive("sold-items")} className={active === 'sold-items' ? "active" : null}>Sold Items</p>
          <p onClick={() => setActive("order")} className={active === 'order' ? "active" : null}>Orders</p>
          <p onClick={() => setActive("wishlist")} className={active === 'wishlist' ? "active" : null}>Wishlist</p>
        </div>
        {active === "wallet" && <Wallet setActive={setActive} />}
        {active === "withdraw" && <Withdraw />}
        {active === "product" && <AddProductIcon setActive={setActive} />}
        {active === "product-form" && <AddProductForm setActive={setActive} />}
        {active === "preview-art" && <PreviewArt setActive={setActive} />}
        {active === "my-artworks" && <MyArtworks arts={randomData} sculpture={randomData2} />}
        {active === "sold-items" && <SoldItems carouselData={randomizedData} />}
        {active === "order" && <OrderList />}
        {active === "wishlist" && <Wishlist />}
        {/* <button>Logout</button> */}
      </div>
      <Footer />
    </>
  )
}

export default Dashboard