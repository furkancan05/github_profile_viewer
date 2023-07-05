import styles from "@/components/skeletonloader.module.css";

export default function SkeletonLoader() {
  return (
    <div>
      <div className={styles.detailsContainer}>
        {[0, 1, 2, 3].map(() => {
          return <div className={styles.detailsCard}></div>;
        })}
      </div>
    </div>
  );
}
