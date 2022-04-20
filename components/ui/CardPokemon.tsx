import { FC } from "react";
import { Button, Card, Col, Grid, Text, Row } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces/interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const CardPokemon: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };
  const handleClickName = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={12} sm={6} md={3} xl={3}>
      <Card css={{ w: "100%", p: 0 }}>
        <Card.Header css={{ zIndex: 1, top: 5 }}>
          <Row gap={1}>
            <Text h3 weight='bold' color='#9E9E9E'>
              #{pokemon.id}
            </Text>
            <Text h3 color='white' transform='uppercase'>
              {pokemon.name}
            </Text>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Image
            objectFit='contain'
            src={pokemon.img}
            height={300}
            width='100%'
            alt='Relaxing app background'
          />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            position: "relative",
            bgBlur: "#0f1114",
            borderTop: "$borderWeights$light solid $gray700",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row css={{ display: "flex", gap: "1rem" }}>
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026", width: "100%" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={14}
                weight='bold'
                transform='uppercase'
                onClick={handleClickName}
              >
                See Card Pokemon Name
              </Text>
            </Button>

            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026", width: "100%" }}
              onClick={handleClick}
            >
              <Text
                css={{ color: "inherit" }}
                size={14}
                weight='bold'
                transform='uppercase'
              >
                See Card Pokemon ID
              </Text>
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
