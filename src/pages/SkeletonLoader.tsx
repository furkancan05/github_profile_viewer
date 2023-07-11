import styles from "@/components/skeletonloader.module.css";

export default function SkeletonLoader() {
  return (
    <div>
      <div className={styles.detailsContainer}>
        {[0, 1, 2, 3].map(i => {
          return (
            <div
              key={i}
              className={`${styles.detailsCard} ${styles.skeleton}`}
            ></div>
          );
        })}
      </div>
      <div className={`${styles.main} ${styles.skeleton}`}></div>
    </div>
  );
}
