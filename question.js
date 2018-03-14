let DATA = new pouchDB("questions");

DATA.bulkDoc([
  {
    _id : "1",
    question : "A perfectly competitive market has",
    answers : {
      A : "Firms that set their own prices.",
      B : "Only one seller.",
      C : "At least a few sellers.",
      D : "Many buyers and sellers."},
    correct : "D"
  },
  {
    _id : "2",
    question : "The law of demand states that an increase in the price of a good",
    answers : {
      A : "Increases the supply of that good.",
      B : "Decreases the quantity demanded for that good along its demand curve.",
      C : "Decreases the demand for that good.",
      D : "Increases the quantity supplied of that good along its supply curve."},
    correct : "A"
  },
  {
    _id : "3",
    question : "The law of supply states that an increase in the price of a good",
    answers : {
      A : "increases the quantity supplied of that good along its supply curve.",
      B : "increases the supply of that good.",
      C : "decreases the demand for that good.",
      D : "decreases the quantity demanded for that good along its demand curve."},
    correct : "A"
  },
  {
    _id : "4",
    question : "If an increase in consumer incomes leads to a decrease in the demand for camping equipment, then camping equipment is",
    answers : {
      A : "a normal good.",
      B : "an inferior good.",
      C : "a substitute good.",
      D : "a complementary good."},
    correct : "B"
  },
  {
    _id : "5",
    question : "That the supply curve for ice cream cones is upward sloping indicates that",
    answers : {
      A : "the marginal cost of providing ice cream cones increases as more cones are produced.",
      B : "as the price of ice cream cones increases, the production technology is upgraded.",
      C : "as the price increases, the opportunity cost of making ice cream cones decreases.",
      D : "all of the above."},
    correct : "A"
  },
  {
    _id : "6",
    question : "Which of the following shifts the demand for watches to the right?",
    answers : {
      A : "an increase in the price of watches",
      B : "a decrease in the price of watch batteries if watch batteries and watches are complements",
      C : "a decrease in consumer incomes if watches are a normal good",
      D : "a decrease in the price of watches"},
    correct : "B"
  },
  {
    _id : "7",
    question : "If the price of a good is above the equilibrium price,",
    answers : {
      A : "there is a surplus (i.e. an excess supply) and the price will rise.",
      B : "there is a shortage (i.e. an excess demand) and the price will fall.",
      C : "there is a shortage (i.e. an excess demand) and the price will rise.",
      D : "there is a surplus (i.e. an excess supply) and the price will fall."},
    correct : "D"
  },
  {
    _id : "8",
    question : "Suppose there is an increase in both the supply and demand for personal computers. In the market for personal computers, we would expect",
    answers : {
      A : "the equilibrium quantity to rise and the equilibrium price to rise.",
      B : "the equilibrium quantity to rise and the equilibrium price to fall.",
      C : "the change in the equilibrium quantity to be ambiguous and the equilibrium price to rise.",
      D : "the equilibrium quantity to rise and the change in the equilibrium price to be ambiguous."},
    correct : "D"
  },
  {
    _id : "9",
    question : "A decrease (leftward shift) in the supply for a good will tend to cause",
    answers : {
      A : "an increase in the equilibrium price and quantity.",
      B : "a decrease in the equilibrium price and an increase in the equilibrium quantity.",
      C : "a decrease in the equilibrium price and quantity.",
      D : "an increase in the equilibrium price and a decrease in the equilibrium quantity."},
    correct : "D"
  }, 
  {
    _id : "10",
    question : "Suppose both buyers and sellers of wheat expect the price of wheat to rise in the near future. What would we expect to happen to the equilibrium price and quantity in the market for wheat today?",
    answers : {
      A : "The impact on both price and quantity is ambiguous.",
      B : "Price will increase; quantity will increase.",
      C : "Price will increase; quantity is ambiguous.",
      D : "Price will increase; quantity will decrease."},
    correct : "C"
  }
]);