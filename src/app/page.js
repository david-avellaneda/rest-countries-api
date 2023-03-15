import InteractiveCountries from "@/components/InteractiveCountries";
import helpApi from "@/helpers/helpApi";

async function getCountries() {
  const url = "all?fields=capital,flags,name,population,region";
  const data = await helpApi(url);
  return data;
}

const PostsPage = async () => {
  const countries = await getCountries();

  return (
    <>
      <title>REST countries API with NextJS 13 - David Avellaneda </title>
      <meta
        name="description"
        content="REST Countries API with color theme switcher"
      />
      <main>
        <InteractiveCountries countries={countries} />
      </main>
    </>
  );
};

export default PostsPage;
