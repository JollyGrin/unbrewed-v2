import { DeckImportType } from "@/components/DeckPool/deck-import.type";

export const mockDeck: DeckImportType = {
  bgg_link: null,
  created_on: "Mon, 17 Apr 2023 03:14:18 GMT",
  deck_data: {
    appearance: {
      borderColour: "#cc2592",
      cardbackUrl: "",
      highlightColour: "#8ad2ff",
      isPNP: false,
      patternName: "",
    },
    cards: [
      {
        afterText: "",
        basicText: "",
        boost: 1,
        characterName: "ANNIE",
        duringText:
          "Add +1 to this card's value for each space between you and the opposing fighter along the shortest path.",
        imageUrl: "https://i.imgur.com/qycbBAR.jpg",
        immediateText: "",
        quantity: 3,
        title: "Markswoman",
        type: "attack",
        value: 1,
      },
      {
        afterText: "Move Annie up to 1 space. Draw 1 card. Gain 1 action.",
        basicText: "BOOST TRICK: Your opponent discards 1 random card.",
        boost: 2,
        characterName: "ANNIE",
        duringText: "",
        imageUrl: "https://i.imgur.com/NAb78j6.jpg",
        immediateText: "",
        quantity: 2,
        title: "For My Next Trick Shot",
        type: "attack",
        value: 2,
      },
      {
        afterText: "",
        basicText: "",
        boost: 3,
        characterName: "ANNIE",
        duringText: "You may BOOST this attack.",
        imageUrl: "https://i.imgur.com/ZJlowip.jpg",
        immediateText: "",
        quantity: 3,
        title: "Second Shot",
        type: "attack",
        value: 3,
      },
      {
        afterText: "",
        basicText:
          "BOOST TRICK: This card's BOOST value is equal to whatever it is BOOSTING",
        boost: 0,
        characterName: "ANNIE",
        duringText:
          "You may BOOST this card using the top card of your discard pile.",
        imageUrl: "https://i.imgur.com/yoe0nW3.jpg",
        immediateText: "",
        quantity: 2,
        title: "Behind the back, in a Mirror",
        type: "versatile",
        value: 2,
      },
      {
        afterText: "",
        basicText: "BOOST TRICK: If it's your turn. gain 1 action.",
        boost: 2,
        characterName: "ANNIE",
        duringText: "",
        imageUrl: "https://i.imgur.com/iTim9q6.jpg",
        immediateText: "Cancel all effects on your opponent's card.",
        quantity: 3,
        title: "Quickdraw",
        type: "versatile",
        value: 2,
      },
      {
        afterText:
          "You may move any 2 zone tokens on the board to any other spaces on the board.",
        basicText: "",
        boost: 1,
        characterName: "ANNIE",
        duringText: "",
        imageUrl: "https://i.imgur.com/NdU9LnT.jpg",
        immediateText: "",
        quantity: 3,
        title: "Little Sure Shot",
        type: "versatile",
        value: 2,
      },
      {
        afterText: "",
        basicText: "BOOST TRICK: Draw 1 card.",
        boost: 2,
        characterName: "ANNIE",
        duringText:
          "If Annie is in more zones than the opposing fighter, the value of this card is 6 instead.",
        imageUrl: "https://i.imgur.com/1dRdJDT.jpg",
        immediateText: "",
        quantity: 3,
        title: "Top Billed",
        type: "versatile",
        value: 3,
      },
      {
        afterText: "",
        basicText:
          "BOOST TRICK: Deal 1 damage to all opposing fighters in Annie's zone.",
        boost: 2,
        characterName: "ANNIE",
        duringText:
          "For each zone the opposing fighter is in, increase the value of this card by +1.",
        imageUrl: "https://i.imgur.com/Fi7WFRF.jpg",
        immediateText: "",
        quantity: 2,
        title: "Scatter Shot",
        type: "versatile",
        value: 2,
      },
      {
        afterText:
          "If you won the combat, choose one of the fighters in the combat and move them up to 4 spaces.",
        basicText:
          "BOOST TRICK: If you BOOSTED a card with this value, you may return that card to your hand.",
        boost: 1,
        characterName: "ANNIE",
        duringText: "",
        imageUrl: "https://i.imgur.com/CO5DdUH.jpg",
        immediateText: "",
        quantity: 3,
        title: "Dance for Me",
        type: "versatile",
        value: 4,
      },
      {
        afterText: "",
        basicText: "",
        boost: 2,
        characterName: "ANNIE",
        duringText: "You may BOOST this card.",
        imageUrl: "https://i.imgur.com/HWzcs9y.jpg",
        immediateText: "",
        quantity: 2,
        title: "Duck and Cover",
        type: "defence",
        value: 1,
      },
      {
        afterText: null,
        basicText:
          "BOOST TRICK: Fighters cannot leave their spaces for the rest of the turn.                  You may remove any number of zone tokens of one color from the board. Annie recovers 1 health for every 2 zone tokens removed from the board in this way.",
        boost: 2,
        characterName: "ANNIE",
        duringText: null,
        imageUrl: "https://i.imgur.com/F06KsDt.jpg",
        immediateText: null,
        quantity: 2,
        title: "Proper Precaution",
        type: "scheme",
        value: null,
      },
      {
        afterText: null,
        basicText:
          "Gain 1 action and choose 1 effect:                     - Each opponent discards 2 cards               - For the rest of your turn, Annie can attack from up to 5 spaces away (ignoring zones)                                                                     - For the rest of your turn, each opponents' card values are 3 and cannot be changed\n",
        boost: 2,
        characterName: "ANNIE",
        duringText: null,
        imageUrl: "https://i.imgur.com/IbUWQod.jpg",
        immediateText: null,
        quantity: 2,
        title: "Nowhere to HIde",
        type: "scheme",
        value: null,
      },
    ],
    extraCharacters: [],
    hero: {
      hp: 15,
      isRanged: true,
      move: 2,
      name: "Annie Oakley",
      specialAbility:
        "When Annie moves during a BOOSTED maneuver, place a zone token on each space Annie moves out of during the maneuver.",
    },
    name: "",
    ruleCards: [
      {
        content:
          "Some of Annie Oakley's cards have BOOST bonuses. Whenever you use one of these cards to BOOST, you trigger the BOOST bonus effect. Resolve the effect immediately and place the card in your discard pile, then resolve the rest of the action as normal.",
        title: "BOOST TRICKS",
      },
      {
        content:
          "Annie Oakley has 15 Zone Tokens (5 in 3 colors). Tokens may be placed in spaces with other token, including other zone tokens. Zone tokens of the same color are considered to be the same zone for the purpose of ranged attacks and any effects. When you place an insight token, you may place a new token or remove an old token from the board and re-place it, regardless of the zone tokens in your supply.",
        title: "Zone Tokens",
      },
    ],
    sidekick: {
      hp: null,
      isRanged: false,
      name: "Sidekick",
      quantity: 0,
      quote: '"Anything you can do I can do better"',
    },
  },
  deck_first_published_on: "Mon, 17 Apr 2023 22:04:13 GMT",
  deck_published: true,
  family_id: "Kkv-",
  id: "Kkv-",
  liked: false,
  likes: 0,
  name: "Annie Oakley",
  note: "",
  published: true,
  published_on: "Mon, 17 Apr 2023 22:04:13 GMT",
  tags: [],
  updated_on: "Mon, 17 Apr 2023 22:04:13 GMT",
  user: "ItsTheBit",
  version_id: "Kkv-SXnj",
  version_name: "Initial version",
  versions: [
    {
      created_on: "Mon, 17 Apr 2023 03:14:18 GMT",
      id: "Kkv-SXnj",
      name: "Annie Oakley",
      published: true,
      updated_on: "Mon, 17 Apr 2023 22:04:13 GMT",
      version_name: "Initial version",
    },
  ],
};
