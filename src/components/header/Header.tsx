import styles from "@/components/header/header.module.css";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

export default function Header() {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className={styles.main_placement}>
      <header className={styles.header}>
        <BiSearch className={styles.icon} />
        <input
          className={styles.input}
          type="text"
          placeholder="Search for a Github profile..."
          value={searchText}
          onChange={val => setSearchText(val.target.value)}
        />
        <button type="button" className={styles.button}>
          Search
        </button>
      </header>
    </div>
  );
}
