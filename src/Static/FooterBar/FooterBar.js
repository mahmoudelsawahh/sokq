"use client"
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useSelector } from "react-redux";
import { RiUserSettingsLine } from "react-icons/ri";
import Offcanvas from "react-bootstrap/Offcanvas";
import ControlNav from "../../ControlPanal/ControlNav/ControlNav";
import styles from "../../app/page.module.css"
import Link from "next/link";
import { useParams , usePathname } from "next/navigation";


const options = [
  {
    // name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];
function OffCanvasExample({ ...props }) {
  const  pathname  = usePathname();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <div>
      <button
        className={`${pathname == "/cp" ? "FooterBarsetting " : "null"}`}
        onClick={() => {
          // navigate("/cp");
          toggleShow();
          window.scrollTo({
            top: 0,
            left: 100,
            behavior: "instant",
          });
        }}
      >
      <Link href={"/cp"} > <RiUserSettingsLine
          className={`${pathname == "cp" ? "con-nav-foo " : "null"}`}
        /></Link>
      </button>
      <Offcanvas
        show={show}
        className="dallel-canves" 
        onHide={handleClose}
        {...props}
      >
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>القائمة</Offcanvas.Title>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
          <ControlNav type={"navBottom"} handleClose={() => handleClose()} />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
const FooterBar = () => {
  const { userInfo } = useSelector((state) => state.ControlPanalSlice);
  const [getSouqLogin , setGetSouqLogin] = useState(false)
  useEffect(() => {
    setGetSouqLogin(window.localStorage.getItem('souqLogin'))
  }, []);

  return (
    <div className={styles.FooterBar}>
      <div className={styles.FooterBar_nav_container}></div>
      <div  className={styles.menu_left_section}>
        <Link
        className={`${styles.FooterBarNavitem}  nav-link` }
          // style={navLinkStyles}
          href="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 100,
              behavior: "instant",
            });
          }}
        >
          <AiFillHome />
        </Link>
        <Link
     className={`${styles.FooterBarNavitem}  nav-link` }
          // style={navLinkStyles}
          href="/shop"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 100,
              behavior: "instant",
            });
          }}
        >
          <MdProductionQuantityLimits />
        </Link>
        {/* || LoginSouq  */}

        {getSouqLogin || userInfo ? (
          <div>
            {options.map((props, idx) => (
              <OffCanvasExample key={idx} placement={"start"} {...props} />
            ))}
          </div>
        ) : (
          <Link
          className={`${styles.FooterBarNavitem}  nav-link` }
          // style={navLinkStyles}
            href="/login"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }}
          >
            <IoPersonOutline  className={styles.cp_icon} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default FooterBar;
