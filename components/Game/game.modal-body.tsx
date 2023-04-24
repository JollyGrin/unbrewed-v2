import { Box, Flex, Grid } from "@chakra-ui/react";
import { Carousel } from "./game.carousel";
import { mockDeck } from "@/_mocks_/deck";
import { CardFactory } from "../CardFactory/card.factory";
import { useLocalDeckStorage } from "@/lib/hooks/useLocalStorage";

export const DeckModalContent = () => {
  // const { cards } = mockDeck.deck_data;
  const { starredDeck } = useLocalDeckStorage();
  if (!starredDeck) return <div />;
  const cards = starredDeck.deck_data.cards;
  return (
    <Grid gridTemplateColumns={"repeat(auto-fit, minmax(250px,1fr))"} gap={1}>
      {/* <Carousel /> */}
      {cards.map((card, index) => (
        <Box w="100%" maxH={"550px"} key={card.title + index}>
          <CardFactory key={card.title + index} card={card} />
        </Box>
      ))}
    </Grid>
  );
};