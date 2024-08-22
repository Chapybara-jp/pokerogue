export const weirdDreamDialogue = {
  intro: "A shadowy woman blocks your path.\nSomething about her is unsettling...",
  speaker: "Woman",
  intro_dialogue: `I have seen your futures, your pasts...
    $Child, do you see them too?`,
  title: "???",
  description: "The woman's words echo in your head. It wasn't just a singular voice, but a vast multitude, from all timelines and realities. You begin to feel dizzy, the question lingering on your mind...\n\n@[TOOLTIP_TITLE]{\"I have seen your futures, your pasts... Child, do you see them too?\"}",
  query: "What will you do?",
  option: {
    1: {
      label: "\"I See Them\"",
      tooltip: "@[SUMMARY_GREEN]{(?) Affects your Pokémon}",
      selected: `Her hand reaches out to touch you,\nand everything goes black.
        $Then...@d{64} You see everything.\nEvery timeline, all your different selves,\n past and future.
        $Everything that has made you,\neverything you will become...@d{64}`,
      cutscene: "You see your Pokémon,@d{32} converging from\nevery reality to become something new...@d{64}",
      dream_complete: `When you awaken, the woman - was it a woman or a ghost? - is gone...
        $.@d{32}.@d{32}.@d{32}
        $Your Pokémon team has changed...\nOr is it the same team you've always had?`
    },
    2: {
      label: "Quickly Leave",
      tooltip: "(-) Affects your Pokémon",
      selected: `You tear your mind from a numbing grip, and hastily depart.
        $When you finally stop to collect yourself, you check the Pokémon in your team.
        $For some reason, all of their levels have decreased!`,
    }
  },
};
