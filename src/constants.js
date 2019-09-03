export const actionTypes = {
  // GLOBAL
  INITIALIZE_APPLICATION: "INITIALIZE_APPLICATION",

  // APPLICATION
  UPDATE_TUTORIAL_VIEWED: "UPDATE_TUTORIAL_VIEWED",
  UPDATE_TUTORIAL_STEP: "UPDATE_TUTORIAL_STEP",
  UPDATE_NUMBER: "UPDATE_NUMBER"
};

export const tutorialContent = [
  {
    header: "Church numerals",
    paragraphs: [
      "Church numerals are a way of encoding natural numbers.",
      "Essentially, any given natural number is represented by a function called that many times upon an argument.",
      "For example, the natural number 3 could be represented as f(f(f(x)))",
      "This form is easily translated to representation in the lambda calculus. While inconvenient, it is useful to prove that the lambda calculus has certain similarities with Turing machines and the like."
    ]
  },
  {
    header: "Factorization",
    paragraphs: [
      "Finding prime (and non-prime) factors of small natural numbers is fairly fast, but finding factors (and primes) for large numbers is a very hard problem.",
      "Several clever methods, such as number seives, can speed up this difficult problem, but they too run into scaling issues as the number increases in size.",
      "A useful side-effect of this is that we can use big prime numbers to secure our data and be relatively safe... for the time being."
    ]
  },
  {
    header: "Quantum computing",
    paragraphs: [
      "Leveraging certain properties of the quantum realm, a new kind of computing mechanism is being developed. Many applications are relatively equal in performance to classical computing, but a few traditionally hard problems have become easier.",
      "One of these is prime factorization. Shor's algorithm (and GEECM) run almost exponentially faster than the fastest classical aproach.",
      "Quantum computing algorithms being developed are currently being examined in the lambda calculus. As such, revisiting these basics has been becoming more popular."
    ]
  },
  {
    header: "Church factorization",
    paragraphs: [
      "This app attempts to simulate a formulation for finding factors from within the lambda calculus by using a relatively primitive method for finding factors.",
      "Since Church numerals are unary-encoded natural numbers, it will act almost like a Turing machine reading on a tape. This method is very similar to determining primes with the regular expression /^1?$|^(11+?)\\1+$/",
      'All Church numerals from 1 to N will be attempted, consuming the corresponding "Church numeral" repeatedly until no digits remain. If the end is met exactly, that numeral is a factor.',
      "The unary representation will be shown as pipes (|) colored by grouping."
    ]
  }
];
