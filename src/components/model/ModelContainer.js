import { useLocation } from "react-router";
import PuddingViewer from "./PuddingViewer";
import Layout from "../../Layout";
import CakeViewer from "./CakeViewer";
import MilkViewer from "./MilkViewer";

const ModelContainer = () => {
  const location = useLocation();
  const contents = [
    {
      pathname: "/~mj469/pudding",
      title: "Pudding",
      desc: "Pudding is a type of food which can either be a dessert served after the main meal or a savoury (salty or sweet and spicy) dish, served as part of the main meal.",
      component: <PuddingViewer />,
    },
    {
      pathname: "/~mj469/cake",
      title: "Cake",
      desc: "Pudding is a type of food which can either be a dessert served after the main meal or a savoury (salty or sweet and spicy) dish, served as part of the main meal.",
      component: <CakeViewer />,
    },
    {
      pathname: "/~mj469/milk",
      title: "Milk Shake",
      desc: "Pudding is a type of food which can either be a dessert served after the main meal or a savoury (salty or sweet and spicy) dish, served as part of the main meal.",
      component: <MilkViewer />,
    },
  ];

  const content = contents.filter((c) => c.pathname === location.pathname);

  return (
    <Layout>
      <section className="px-6 mt-[70px] rounded-xl pb-16">
        <h4 className="pt-8 mb-2 font-playwrite text-primary font-bold">
          {content[0].title}
        </h4>
        <h6 className="text-primary">{content[0].desc}</h6>
        <div className="rounded-b-xl rounded-tr-xl">{content[0].component}</div>
      </section>
    </Layout>
  );
};

export default ModelContainer;
