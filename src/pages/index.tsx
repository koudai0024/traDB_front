import { Layout } from "src/components/Layouts/Layout";
import { MainSearchForm } from "src/components/Unique/MainSearchForm";
import { SearchFromMap } from "src/components/Unique/SearchFromMap";
import { SimpleCardList } from "src/components/Unique/SimpleCardList";

const Home = () => {
  return (
    <Layout>
      <main>
        <MainSearchForm />
        <SimpleCardList />
        <SearchFromMap />
      </main>
    </Layout>
  );
};

export default Home;
