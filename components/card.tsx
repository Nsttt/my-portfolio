interface CardProps {
  id: string;
  title: string;
  description: string;
}

const Card = ({ id, title, description }: CardProps) => {
  return (
    <div>
      <div className="p-5 m-2 w-full rounded-xl border-4 border-bright-pink">
        <a href={`/blog/${id}`}>
          <h3 className="text-xl hover:text-bright-pink cursor-pointer">
            {title}
          </h3>
        </a>
        <p className="text-sm">{description}</p>
        <a href={`/blog/${id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="self-end m-2 w-5 h-5 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
