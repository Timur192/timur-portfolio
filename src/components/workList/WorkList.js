import "./workList.css";
import Product from "../work/Work";
import project1 from "../../img/project1.png";
import project2 from "../../img/project2.png";

const ProductList = () => {

  const products = [
    {
      id: 1,
      img: project1,
      link: "https://hello-yeti.netlify.app/",
    },
    {
      id: 2,
      img: project2,
      link: "https://weather-uz1.netlify.app/",
    },
    {
      id: 3,
      img: "https://static.wixstatic.com/media/4a1d5b_5361da33eab146479729473ed7a5d8ce~mv2.gif",
      link: "",
    },
    {
      id: 4,
      img: "https://static.wixstatic.com/media/4a1d5b_5361da33eab146479729473ed7a5d8ce~mv2.gif",
      link: "",
    },
    {
      id: 5,
      img: "https://static.wixstatic.com/media/4a1d5b_5361da33eab146479729473ed7a5d8ce~mv2.gif",
      link: "",
    },
    {
      id: 6,
      img: "https://static.wixstatic.com/media/4a1d5b_5361da33eab146479729473ed7a5d8ce~mv2.gif",
      link: "",
    },
  ];

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Works</h1>
        <p className="pl-desc">
          Here are my completed works
        </p>
      </div>
      <div className="pl-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
