const SectionHeading = ({
  icon,
  tagline,
  title,
}: {
  icon?: React.ReactNode;
  title: string;
  tagline?: string;
}) => {
  return (
    <div className="max-w-3xl text-balance mb-[140px]">
      <div className="flex gap-5 mb-4">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <p className="text-lg font-medium">{tagline}</p>
      </div>
      <h2 className="text-2xl lg:text-3xl xl:text-5xl tracking-tighter">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
