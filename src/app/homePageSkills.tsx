import Link from "next/link";

// const subTitle = "Best Web Development Skills";
// const title = "My Professional Skills";

// const btnText = "Browse All Categories";

const categoryList = [
  {
    imgUrl: "icon/03.png",
    imgAlt: "HTML",
    count: "HTML",
  },
  {
    imgUrl: "icon/05.png",
    imgAlt: "CSS",
    count: "CSS",
  },
  {
    imgUrl: "icon/12.png",
    imgAlt: "SASS",
    count: "SASS",
  },
  {
    imgUrl: "icon/07.png",
    imgAlt: "JAVASCRIPT",
    count: "JAVASCRIPT",
  },

  {
    imgUrl: "icon/13.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "TYPESCRIPT",
    count: "TYPESCRIPT",
  },

  {
    imgUrl: "icon/09.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "NODEJS",
    count: "NODEJS",
  },
  {
    imgUrl: "icon/arrow-right.png",
    imgAlt: "NEXTJS",
    count: "NEXT",
  },
  {
    imgUrl: "icon/11.png",
    imgAlt: "REACTJS",
    count: "REACT",
  },
  {
    imgUrl: "icon/08.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "MYSQL",
    count: "MYSQL",
  },

  {
    imgUrl: "icon/04.png",
    imgAlt: "MONGODB",
    count: "MONGODB",
  },
  {
    imgUrl: "icon/02.png",
    imgAlt: "BOOTSTRAP",
    count: "BOOTSTRAP",
  },
  {
    imgUrl: "icon/06.png",
    imgAlt: "Express",
    count: "EXPRESS",
  },
];

const Category = () => {
  return (
    <div className="lg:grid grid-cols-3 lg:gap-1 lg:py-14 hidden">
      {categoryList.map((val, i) => (
        <div
          className="max-w-[10vw] py-2 rounded-xl m-1 hover:bg-white hover:z-10 hover:scale-110 transform transition-transform duration-300"
          key={i}
        >
          <div className="flex justify-center">
            <img src={`${val.imgUrl}`} alt={val.imgAlt} className="w-20 mb-1" />
          </div>
          <div className="flex justify-center">
            <Link href="/course">{/* <h6>{val.title}</h6> */}</Link>
            {val.count}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
