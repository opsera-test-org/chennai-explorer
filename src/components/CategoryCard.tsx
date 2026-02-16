interface CategoryCardProps {
  image: string;
  title: string;
  count: string;
}

const CategoryCard = ({ image, title, count }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-foreground/30 transition-colors duration-300 group-hover:bg-foreground/40" />
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <h3 className="text-xl font-bold text-primary-foreground">{title}</h3>
        <p className="text-sm text-primary-foreground/75" style={{ fontFamily: "var(--font-body)" }}>
          {count}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
