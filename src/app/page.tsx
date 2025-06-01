import { cards } from "@/constants";
import "../styles/normalize.css";
import styles from "./Page.module.scss";
import Card from "@/components/Card";
import Image from "next/image";
import bgImage from "../../public/img/bg.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {cards.map((card, i) => (
          <Card card={card} key={card.title + i} />
        ))}
      </ul>
      <Image
        className={styles.img}
        alt="backgroung"
        src={bgImage}
        width={935}
        height={300}
      />
    </main>
  );
}
