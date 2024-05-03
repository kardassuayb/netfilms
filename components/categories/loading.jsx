import Skeleton from "../skeleton";

const CategoriesLoading = () => {
  return (
    <div className="flex h-[72px] gap-6">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={70} />
        ))}
    </div>
  );
};

export default CategoriesLoading;
