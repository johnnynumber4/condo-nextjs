import Image from "next/image";
import styles from "./page.module.css";
import Homeguide from "./components/Homeguide";

export default function Home() {
  return (
    <main className={styles.main}>
      <Homeguide />
    </main>
  );
}
