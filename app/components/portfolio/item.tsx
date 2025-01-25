const PortfolioItem = ({
  title,
  description,
  tags,
  cover,
  images,
  content,
}: {
  title: string;
  description: string;
  tags: string[];
  cover: string;
  images: {
    src: string;
    alt: string;
  }[];
  content?: {
    column1: React.ReactNode;
    column2?: React.ReactNode;
  };
}) => {
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl xl:text-3xl font-medium">{title}</h3>
        <p className="text-2xl">{description}</p>
        <div className="h-px w-full bg-[#eee] my-4" />
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-sm bg-[#ddd] px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <div className="p-4 rounded-xl border border-[#eee] shadow-sm bg-[#f9f9f9] w-full aspect-video"></div>
      </div>
      {content && (
        <div className="grid grid-cols-2 gap-12 text-sm">
          <div>{content.column1}</div>
          <div>{content.column2}</div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
