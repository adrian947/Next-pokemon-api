import NextLink from "next/link";
import { Grid, Card, Link } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  favoritesPokemons: number[];
}

export const CardPokemonFavorite: FC<Props> = ({ favoritesPokemons }) => {
  return (
    <>
      {favoritesPokemons.map((id) => (
        <Grid key={id} css={{ padding: "2rem" }}>
          <Card hoverable clickable>
            <NextLink href={`/pokemon/${id}`} passHref>
              <Link>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    objectFit='cover'
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width='100%'
                    height={140}
                    alt='dasdad'
                    css={{ padding: "1rem" }}
                  />
                </Card.Body>
              </Link>
            </NextLink>
          </Card>
        </Grid>
      ))}
    </>
  );
};
