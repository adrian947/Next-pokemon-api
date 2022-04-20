import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layouts";
import pokeApi from "../api/pokeApi";
import { PokemonListResults } from "./../interfaces/interfaces";
import { SmallPokemon } from "../interfaces/interfaces";
import { Grid } from "@nextui-org/react";
import { CardPokemon } from "../components/ui";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout>
        <Grid.Container gap={2} justify='center'>
          {pokemons.map((poke) => (
            <CardPokemon key={poke.id} pokemon={poke} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonListResults>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((p, i) => ({
    ...p,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
