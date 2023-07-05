import styles from "./details.module.css";
import { DetailsType } from "@/types/details";
import { detailItems } from "@/config/detailItems.config";

export default function Details({ data }: { data: DetailsType }) {
  return (
    <div className={styles.container}>
      {Object.entries(data).map((properties, i) => {
        return (
          <div className={styles.card} key={i}>
            <div
              className={styles.icon}
              style={{ backgroundColor: detailItems[i].color }}
            >
              {detailItems[i].icon}
            </div>
            <div className={styles.texts}>
              <p className={styles.value}>{properties[1]}</p>
              <span className={styles.name}>{properties[0]}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
