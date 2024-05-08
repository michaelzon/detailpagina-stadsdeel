'use client';

import { useEffect, useState } from "react";
import styles from "./styles/page.module.css";
import Dropdown from "./components/Dropdown/Dropdown";
import Header from "./components/Header/Header";
import DetailPage from "./components/DetailPage/DetailPage";
import Footer from "./components/Footer/Footer";

export default function Home() {

  return (
    <div className={styles.container}>
      <Header />
      <DetailPage />
      <Footer />
    </div>
  );
}