export const fieryFalloutDialogue = {
  intro: "You encounter a blistering storm of smoke and ash!",
  title: "Fiery Fallout",
  description: "The whirling ash and embers have cut visibility to nearly zero. It seems like there might be some... source that is causing these conditions. But what could be behind a phenomenon of this magnitude?",
  query: "What will you do?",
  option: {
    1: {
      label: "Find the source",
      tooltip: "(?) Discover the source\n(-) Hard Battle",
      selected: `You push through the storm, and find two Volcarona in the middle of a mating dance!
        $They don't take kindly to the interruption and attack!`
    },
    2: {
      label: "Hunker down",
      tooltip: "(-) Suffer the effects of the weather",
      selected: `The weather effects cause significant\nharm as you struggle to find shelter!
        $Your party takes 20% Max HP damage!`,
      target_burned: "Your {{burnedPokemon}} also became burned!"
    },
    3: {
      label: "Your Fire types help",
      tooltip: "(+) End the conditions\n(+) Gain a Charcoal",
      disabled_tooltip: "You need at least 2 Fire Type Pokémon to choose this",
      selected: `Your {{option3PrimaryName}} and {{option3SecondaryName}} guide you to where two Volcarona are in the middle of a mating dance!
        $Thankfully, your Pokémon are able to calm them,\nand they depart without issue.`,
    },
  },
  found_charcoal: `After the weather clears,\nyour {{leadPokemon}} spots something on the ground.
    $@s{item_fanfare}{{leadPokemon}} gained a Charcoal!`
};
