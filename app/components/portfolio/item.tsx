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
        <div className="h-px w-full bg-[#ddd] my-4" />
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-sm bg-[#eee] px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <div className="p-2 rounded-xl card-shadow bg-[#f9f9f9] bg-diagonal-lines w-full aspect-video relative">
          <img
            src={cover}
            alt={title}
            className="rounded-lg border border-[#ddd] size-full object-cover"
          />
        </div>
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
