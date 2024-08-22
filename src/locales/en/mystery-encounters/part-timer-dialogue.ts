export const partTimerDialogue = {
  intro: "A busy worker flags you down.",
  speaker: "Worker",
  intro_dialogue: `You look like someone with lots of capable Pokémon!
    $We can pay you if you're able to help us with some part-time work!`,
  title: "Part-Timer",
  description: "Looks like there are plenty of tasks that need to be done. Depending how well-suited your Pokémon is to a task, they might earn more or less money.",
  query: "Which job will you choose?",
  invalid_selection: "Pokémon must be healthy enough.",
  option: {
    1: {
      label: "Make Deliveries",
      tooltip: "(-) Your Pokémon Uses its Speed\n(+) Earn @[MONEY]{Money}",
      selected: "Your {{selectedPokemon}} works a shift delivering orders to customers.",
    },
    2: {
      label: "Warehouse Work",
      tooltip: "(-) Your Pokémon Uses its Strength and Endurance\n(+) Earn @[MONEY]{Money}",
      selected: "Your {{selectedPokemon}} works a shift moving items around the warehouse.",
    },
    3: {
      label: "Sales Assistant",
      tooltip: "(-) Your {{option3PrimaryName}} uses {{option3PrimaryMove}}\n(+) Earn @[MONEY]{Money}",
      disabled_tooltip: "Your Pokémon need to know certain moves for this job",
      selected: "Your {{option3PrimaryName}} spends the day using {{option3PrimaryMove}} to attract customers to the business!",
    },
  },
  job_complete_good: `Thanks for the assistance!\nYour {{selectedPokemon}} was incredibly helpful!
    $Here's your check for the day.`,
  job_complete_bad: `Your {{selectedPokemon}} helped us out a bit!
    $Here's your check for the day.`,
  pokemon_tired: "Your {{selectedPokemon}} is worn out!\nThe PP of all its moves was reduced to 2!",
  outro: "Come back and help out again sometime!"
};
