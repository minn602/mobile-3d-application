import { useLocation, Link } from "react-router";
import PuddingViewer from "./PuddingViewer";
import Layout from "../../Layout";
import CakeViewer from "./CakeViewer";
import MilkViewer from "./MilkViewer";

const ModelContainer = () => {
  const location = useLocation();
  const contents = [
    {
      pathname: "/pudding",
      title: "Pudding",
      desc: "Pudding is a type of food which can either be a dessert served after the main meal or a savoury (salty or sweet and spicy) dish, served as part of the main meal.",
      link: "https://en.wikipedia.org/wiki/Pudding",
      component: <PuddingViewer />,
    },
    {
      pathname: "/cake",
      title: "Cake",
      desc: "Cake is a flour confection usually made from flour, sugar, and other ingredients and is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate and which share features with desserts such as pastries, meringues, custards, and pies.",
      link: "https://en.wikipedia.org/wiki/Cake",
      component: <CakeViewer />,
    },
    {
      pathname: "/milk",
      title: "Milkshake",
      desc: "A milkshake (sometimes simply called a shake) is a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, or fruit syrup into a thick, sweet, cold mixture. It may also be made using a base made from non-dairy products, including plant milks such as almond milk, coconut milk, or soy milk. Dry ingredients such as whole fruit, nuts, seeds, candy, or cookies may be incorporated.",
      link: "https://en.wikipedia.org/wiki/Milkshake",
      component: <MilkViewer />,
    },
  ];

  const content = contents.filter((c) => c.pathname === location.pathname);

  return (
    <Layout>
      <section className="px-6 mt-[70px] rounded-xl pb-16">
        <h4 className="pt-8 mb-2 max-w-2xl mx-auto font-playwrite text-primary font-bold text-[28px]">
          {content[0].title}
        </h4>
        <h6 className="text-primary max-w-2xl mx-auto mb-4">
          {content[0].desc}
          {"  "}
          <strong className="cursor-pointer">
            <Link to={content[0].link} target="_blank">
              [Read More]
            </Link>
          </strong>
        </h6>
        <div className="rounded-b-xl rounded-tr-xl">{content[0].component}</div>
      </section>
    </Layout>
  );
};

export default ModelContainer;
