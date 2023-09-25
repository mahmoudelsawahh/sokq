"use client"
import React from 'react'
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchHesder from "@/Static/SearchHesder/SearchHesder";
import { Col, Container, Row } from "react-bootstrap";
import styles from "/src/app/page.module.css"
import MatagrBody from "./MatagrBody";

const MatagrComponent = () => {
  return (
    <>
     <Container fluid>
        <Row>
          <Col xs={12} md={3}  className={styles.diff_col_screen2}>
            <div  className={styles.CatHeader}>
              <FiMenu />
              <h2>التصنيفات</h2>
              <IoMdArrowDropdown />
            </div>
          </Col>
          <SearchHesder res={8} />
        </Row>
      </Container>

    <MatagrBody/>
    </>
  )
}

export default MatagrComponent