import { useState, useEffect } from "react";
import { NextPage } from "next";

import { Grid } from "@nextui-org/react";
import { Nofavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import { Layout } from "../../components/layouts";
import { CardPokemonFavorite } from "../../components/ui";


const Favorites: NextPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title='Favorites'>
      <Grid.Container gap={1}>
        {!favoritesPokemons.length ? (
          <Nofavorites />
        ) : (
          <CardPokemonFavorite favoritesPokemons={favoritesPokemons} />
        )}
      </Grid.Container>
    </Layout>
  );
};

export default Favorites;
