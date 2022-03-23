interface CardProps {
  type: string;
  id: string;
  title: string;
  description: string;
  date: string;
}

const Card = ({ type, id, title, description, date }: CardProps) => {
  return (
    <a href={type === 'post' ? `/blog/${id}` : `/portfolio/${id}`}>
      <div className="mt-2 flex h-48 w-full flex-col rounded-xl border-4 border-bright-pink bg-gray-900 p-5 hover:border-white hover:bg-gray-900/60">
        <h3 className="cursor-pointer font-bebas text-3xl hover:text-white">
          {title}
        </h3>
        <p className="text-base text-white">{description}</p>
        <p className="mt-auto pt-3 text-xs text-gray-400">
          {date}
        </p>
      </div>
    </a>
  );
};

export default Card;
