export const berriesAboundDialogue = {
  intro: "There's a huge berry bush\nnear that Pokémon!",
  title: "Berries Abound",
  description: "It looks like there's a strong Pokémon guarding a berry bush. Battling is the straightforward approach, but this Pokémon looks strong. Maybe a fast Pokémon would be able to grab some without getting caught?",
  query: "What will you do?",
  berries: "Berries!",
  option: {
    1: {
      label: "Battle the Pokémon",
      tooltip: "(-) Hard Battle\n(+) Gain Berries",
      selected: "You approach the\nPokémon without fear.",
    },
    2: {
      label: "Race to the Bush",
      tooltip: "(-) {{fastestPokemon}} Uses its Speed\n(+) Gain Berries",
      selected: `Your {{fastestPokemon}} races for the berry bush!
        $It manages to nab {{numBerries}} before the {{enemyPokemon}} can react!
        $You quickly retreat with your newfound prize.`,
      selected_bad: `Your {{fastestPokemon}} races for the berry bush!
        $Oh no! The {{enemyPokemon}} was faster and blocked off the approach!`,
      boss_enraged: "The opposing {{enemyPokemon}} has become enraged!"
    },
    3: {
      label: "Leave",
      tooltip: "(-) No Rewards",
      selected: "You leave the strong Pokémon\nwith its prize and continue on.",
    },
  }
};
