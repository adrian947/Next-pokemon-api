import NextLink from "next/link";
import Image from "next/image";
import { Link, Spacer, Text, theme } from "@nextui-org/react";
import styles from "../../styles/NavBar.module.css";

export const NavBar = () => {
  return (
    <div
      className={styles.navbar}
      style={{ backgroundColor: theme?.colors.gray900.value }}
    >
      <NextLink href={"/"} passHref>
        <Link css={{ display: "flex", alignItems: "center" }}>
          <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
            alt='pikachu'
            width={100}
            height={100}
          />

          <Text h1>P</Text>
          <Text h3>okemon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref>
        <Link>
          <Text h3>Favorites</Text>
        </Link>
      </NextLink>
    </div>
  );
};
