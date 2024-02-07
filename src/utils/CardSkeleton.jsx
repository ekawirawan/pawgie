import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#333" highlightColor="#999">
      <div className="card">
        <div className="card-content">
          <span className="card-image">
            <Skeleton height={1000} />
          </span>
          <span className="card-title">
            <Skeleton height={25} />
          </span>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default CardSkeleton;
