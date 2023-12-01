"use client"
import React, { useEffect, useState } from "react";
import {
  AiFillHome,
  AiOutlineShop,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RiArrowRightSLine, RiMenu4Line } from "react-icons/ri";
import { GrUserSettings } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { IoLogIn, IoPersonOutline } from "react-icons/io5";
import { Col, Row } from "react-bootstrap";
import { Sidebar } from "primereact/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { ClearCart, getSearchResult, searchChar } from "../../store/ShopSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../../public/images/logo512.png";
import { MdLocalOffer, MdProductionQuantityLimits } from "react-icons/md";
import { Logout } from "../../store/ControlPanalSlice";
import styles from "../../app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const options = [
  {
    // name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];





















const AppBar = () => {
  const dispatch = useDispatch();
  const { SearchresultArr, GetFromCartAarr, searchCharInput } = useSelector(
    (state) => state.ShopSlice
  );
  const [visibleTop, setVisibleTop] = useState(false);
  const [search, setSearch] = useState(searchCharInput);
  const [showNav2, setShowNav2] = useState(false);
  const [isNavBarCompTowVisible, setNavBarCompTowVisible] = useState(false);

  const { Categories } = useSelector((state) => state.CategoriesSlice);

  const [getSouqLogin , setGetSouqLogin] = useState(false)
  useEffect(() => {
    setGetSouqLogin(window.localStorage.getItem('souqLogin'))
  }, []);


    const navLinkStyles = ({ isActive }) => ({
      fontWeight: isActive ? "bold" : "500",
      color: isActive ? "#274160" : "#000",
      fontSize: isActive ? "22px" : "21px",
    });


  return (
    <>
      <div className={styles.NavBar} onClick={() => setShowNav2(true)}>
   
      <div  className={`${styles.NavList} ${styles.disFlex}`}>
            <nav className="navbar navbar-expand-md navbar-light " >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                    <li className="nav-item" >
                      <Link
                        className="nav-link Navitem "
                        href="/"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 100,
                            behavior: "instant",
                          });
                        }}
                        style={navLinkStyles({ isActive: true })}
                      >
                        الرئيسية
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link Navitem "
                        href="/shop"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 100,
                            behavior: "instant",
                          });
                        }}
                        style={navLinkStyles({ isActive: true })}
                      >
                        المتجر
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link Navitem"
                        href="/offers"
                        style={navLinkStyles({ isActive: true })}
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 100,
                            behavior: "instant",
                          });
                        }}
                      >
                        العروض
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link Navitem"
                        href="/matgars"
                        style={navLinkStyles({ isActive: true })}
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 100,
                            behavior: "instant",
                          });
                        }}
                      >
                        المتاجر
                      </Link>
                    </li>
                    {getSouqLogin ? 
                      <li className="nav-item">
                        <Link
                          className="nav-link Navitem"
                          href="/cp"
                          style={navLinkStyles({ isActive: true })}
                          onClick={() => {
                            window.scrollTo({
                              top: 0,
                              left: 100,
                              behavior: "instant",
                            });
                          }}
                        >
                          لوحة التحكم
                        </Link>
                      </li>
                    : null}
              </ul>
            </nav>
          </div>
      </div>
    </>
  );
};

export default AppBar;
