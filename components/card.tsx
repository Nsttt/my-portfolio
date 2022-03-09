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
      <div className="flex flex-col p-5 mt-2 w-full h-48 rounded-xl border-4 border-bright-pink hover:border-white">
        <h3 className="font-bebas text-3xl hover:text-white cursor-pointer">
          {title}
        </h3>
        <p className="text-base text-white">{description}</p>
        <p className="pt-3 mt-auto text-xs text-gray-400">
          {date} • 10 min read
        </p>
      </div>
    </a>
  );
};

export default Card;
