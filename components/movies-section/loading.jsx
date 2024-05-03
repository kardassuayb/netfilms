import Skeleton from "../skeleton";
import styles from "./styles.module.css";

const MoviesSectionLoading = () => {
  return (
    <div className="mt-9">
      <Skeleton width={128} height={36} />
      <div className={styles.movies}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default MoviesSectionLoading;
