const Card = () => {
  return (
    <div>
      <a className="flex flex-col w-full border-4 border-bright-pink rounded-xl m-2 p-5 hover: scale-[1.01]">
        <h3 className="text-xl">Test Post</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias
          nesciunt iusto voluptatem, exercitationem obcaecati tempore rem
          voluptate corrupti asperiores facere saepe, et harum molestiae
          corporis a, iure doloribus magnam?
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="self-end m-2 w-5 h-5"
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
  );
};

export default Card;
