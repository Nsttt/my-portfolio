import Link from 'next/link';

interface CardProps {
  type: string;
  id: string;
  title: string;
  description: string;
  date: string;
}

const Card = ({ type, id, title, description, date }: CardProps) => {
  return (
    <Link passHref href={type === 'post' ? `/blog/${id}` : `/portfolio/${id}`}>
      <div className="group mt-2 flex h-48 w-full cursor-pointer flex-col rounded-xl border-4 border-bright-pink bg-gray-900 p-5 transition ease-in-out hover:border-white hover:bg-gray-900/60">
        <h3 className="font-bebas text-3xl text-bright-pink transition ease-in-out group-hover:text-white">
          {title}
        </h3>
        <p className="text-base text-white">{description}</p>
        <p className="mt-auto pt-3 text-xs text-gray-400">{date}</p>
      </div>
    </Link>
  );
};

export default Card;
