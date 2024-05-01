import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div className="flex h-[72px] gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.id}`}
          className="flex items-center justify-center bg-black/70 border-[1px] border-solid border-[#333] shadow-md shadow-black/50 w-full h-full rounded-md font-bold hover:border-none hover:bg-[#eee] hover:text-[#222] transition duration-300 ease-out hover:ease-in"
        >
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
