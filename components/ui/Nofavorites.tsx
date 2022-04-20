
import { Container, Text } from "@nextui-org/react";
import Image from "next/image";

export const Nofavorites = () => {
  return (
    <Container
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 200px)",
        }}
      >
        <Text h1 transform='uppercase'>
          there`t favorites
        </Text>
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          }
          alt='pokeditto'
          width={250}
          height={250}
        />
      </Container>
  )
}
