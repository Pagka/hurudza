import FloatingNav from "../floating-nav";
import SectionHeading from "../section-heading";
import PortfolioItem from "./item";
import PortfolioShowReel from "./showreel";

const PortfolioSection = () => {
  return (
    <>
      <PortfolioShowReel />
      <div className="relative py-lg px-xs grid grid-cols-5">
        <div className="col-span-1 sticky h-fit mt-[280px] top-[280px]">
          <FloatingNav activeSection="#selected-works" />
        </div>
        <div className="col-span-4">
          <SectionHeading
            title="Work that speaks for itself"
            tagline="Selected Works"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
          <div className="flex flex-col gap-[210px]">
            <PortfolioItem
              title="Snack Platform"
              description="Unmatched productivity and collaboration for freelancer teams."
              tags={["Web", "Design", "Development"]}
              cover="https://framerusercontent.com/images/YIKqpQeMxqzYeT9rO3VD9QgAW70.webp?scale-down-to=2048"
              images={[
                {
                  src: "https://framerusercontent.com/images/YIKqpQeMxqzYeT9rO3VD9QgAW70.webp?scale-down-to=2048",
                  alt: "Project image",
                },
              ]}
              content={{
                column1: (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus ac neque ultrices ultricies. Nullam
                    elementum, turpis vel fermentum aliquam, mi ligula tristique
                    nunc, nec tincidunt arcu nulla id nunc.
                  </p>
                ),
                column2: (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus ac neque ultrices ultricies. Nullam
                    elementum, turpis vel fermentum aliquam, mi ligula tristique
                    nunc, nec tincidunt arcu nulla id nunc.
                  </p>
                ),
              }}
            />
            <PortfolioItem
              title="Velocity Payments"
              description="A seamless payment experience for businesses and consumers."
              tags={["Web", "Design", "Development"]}
              cover="https://framerusercontent.com/images/YIKqpQeMxqzYeT9rO3VD9QgAW70.webp?scale-down-to=2048"
              images={[
                {
                  src: "https://framerusercontent.com/images/YIKqpQeMxqzYeT9rO3VD9QgAW70.webp?scale-down-to=2048",
                  alt: "Project image",
                },
              ]}
              content={{
                column1: (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus ac neque ultrices ultricies. Nullam
                    elementum, turpis vel fermentum aliquam, mi ligula tristique
                    nunc, nec tincidunt arcu nulla id nunc.
                  </p>
                ),
                column2: (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus ac neque ultrices ultricies. Nullam
                    elementum, turpis vel fermentum aliquam, mi ligula tristique
                    nunc, nec tincidunt arcu nulla id nunc.
                  </p>
                ),
              }}
            />
            <PortfolioItem
              title="CXMappers"
              description="A platform for customer journey mapping and analysis."
              tags={["Web", "Design", "Development"]}
              cover="https://framerusercontent.com/images/YIKqpQeMxqzYeT9rO3VD9QgAW70.webp?scale-down-to=2048"
              images={[
                {
                  src: "https://framerusercontent.com/images/YIKqpQeMxqzYeT9rO3VD9QgAW70.webp?scale-down-to=2048",
                  alt: "Project image",
                },
              ]}
              content={{
                column1: (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus ac neque ultrices ultricies. Nullam
                    elementum, turpis vel fermentum aliquam, mi ligula tristique
                    nunc, nec tincidunt arcu nulla id nunc.
                  </p>
                ),
                column2: (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus ac neque ultrices ultricies. Nullam
                    elementum, turpis vel fermentum aliquam, mi ligula tristique
                    nunc, nec tincidunt arcu nulla id nunc.
                  </p>
                ),
              }}
            />
            <PortfolioItem
              title="MongoDB Workbooks"
              description="A platform for customer journey mapping and analysis."
              tags={["Web", "Design", "Development"]}
              cover="https://framerusercontent.com/images/YIKqpQeMxqzYeT9rO3VD9QgAW70.webp?scale-down-to=2048"
              images={[
                {
                  src: "https://framerusercontent.com/images/YIKqpQeMxqzYeT9rO3VD9QgAW70.webp?scale-down-to=2048",
                  alt: "Project image",
                },
              ]}
              content={{
                column1: (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus ac neque ultrices ultricies. Nullam
                    elementum, turpis vel fermentum aliquam, mi ligula tristique
                    nunc, nec tincidunt arcu nulla id nunc.
                  </p>
                ),
                column2: (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus ac neque ultrices ultricies. Nullam
                    elementum, turpis vel fermentum aliquam, mi ligula tristique
                    nunc, nec tincidunt arcu nulla id nunc.
                  </p>
                ),
              }}
            />
            <PortfolioItem
              title="Tafara Care Services"
              description="A platform for customer journey mapping and analysis."
              tags={["Web", "Design", "Development"]}
              cover="https://framerusercontent.com/images/YIKqpQeMxqzYeT9rO3VD9QgAW70.webp?scale-down-to=2048"
              images={[
                {
                  src: "https://framerusercontent.com/images/YIKqpQeMxqzYeT9rO3VD9QgAW70.webp?scale-down-to=2048",
                  alt: "Project image",
                },
              ]}
              content={{
                column1: (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus ac neque ultrices ultricies. Nullam
                    elementum, turpis vel fermentum aliquam, mi ligula tristique
                    nunc, nec tincidunt arcu nulla id nunc.
                  </p>
                ),
                column2: (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus ac neque ultrices ultricies. Nullam
                    elementum, turpis vel fermentum aliquam, mi ligula tristique
                    nunc, nec tincidunt arcu nulla id nunc.
                  </p>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
