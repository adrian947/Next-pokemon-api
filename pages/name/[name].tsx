import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { pokeApi } from "../../api";
import { Pokemon, PokemonName } from "../../interfaces/interfaces";
import Image from "next/image";
import { Grid, Card, Text, Container, Button } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { localFavorites } from "../../utils";
import confetti from "canvas-confetti";
import { getPokemonInfo } from "../../utils/getPokemonInfo";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    setIsFavorite(localFavorites.exitsPokemonInLocaleStorage(pokemon.id));
  }, [pokemon.id]);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      confetti({
        particleCount: 100,
        spread: 170,
        origin: { y: 0.6, x: 0.5 },
      });
    }
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container gap={1} justify='center'>
        <Grid xs={12} sm={6} md={3} xl={3}>
          <Card css={{ mw: "100%" }}>
            <Card.Image
              objectFit='contain'
              src={pokemon.sprites.other?.dream_world.front_default || ""}
              height={500}
              width='100%'
              alt={pokemon.name}
            />
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={6} xl={6}>
          <Card css={{ mw: "100%" }}>
            <Card.Header>
              <Text
                size={40}
                transform='uppercase'
                color='#666666'
                css={{ marginRight: "1rem" }}
              >
                #{pokemon.id}
              </Text>
              <Text size={40} transform='uppercase'>
                {pokemon.name}
              </Text>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container css={{ padding: "0px" }}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Button
                  color='gradient'
                  bordered
                  auto
                  onClick={onToggleFavorite}
                >
                  {!isFavorite ? "Add Favorites" : "Delete Favorites"}
                </Button>
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default PokemonByNamePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonName>(`/pokemon?limit=151`);

  return {
    paths: data.results.map((poke) => ({
      params: {
        name: poke.name,
      },
    })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const {name} = params as {name: string}

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};
