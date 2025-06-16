import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";
export default function Home() {
  return (
    <div className={styles.page}>
     <Navbar />
     <HomePage />
    </div>
  );
}
