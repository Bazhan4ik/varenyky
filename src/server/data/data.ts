interface Pack {
    icons: string[];
    name: string;
    description: string;
    id: string;
    type: string;
}



export const sets: Pack[] = [
    {
        icons: ["potato", "cheese", "salt"],
        name: "Cheese + Potatoes",
        description: "Contains potato, old fort cheddar, salt",
        id: "cheese-potatoes",
        type: "traditional",
    },
    {
        icons: ["potato", "mushroom", "butter", "garlic"],
        name: "Potatoes + Mushrooms",
        description: "Contains potato, champions, butter, garlic powder",
        id: "potatoes-mushrooms",
        type: "traditional",
    },
    {
        icons: ["potato", "onion", "salt"],
        name: "Potatoes",
        description: "Contains potato, dill, onion, salt, black pepper",
        id: "potatoes",
        type: "traditional",
    },
    {
        icons: ["potato", "liver", "onion", "salt"],
        name: "Potatoes + Liver",
        description: "Contains potato, beef liver, onion powder, salt",
        id: "potatoes-beef",
        type: "traditional",
    },
    {
        icons: ["pepperoni", "cheese", "tomato"],
        name: "Pizza Varennyk",
        description: "Contains pepperoni, mozzarella cheese, old fort cheddar, tomatoes",
        id: "pizza-varennyk",
        type: "american",
    },
    {
        icons: ["cabbage", "onion", "salt"],
        name: "Cabbage",
        description: "Contains cabbage, onion powder, salt",
        id: "cabbage",
        type: "traditional",
    },
    {
        icons: ["cabbage", "mushroom", "onion", "garlic"],
        name: "Cabbage + Mushrooms",
        description: "Contains cabbage, champions, onion powder, garlic powder",
        id: "cabbage-mushrooms",
        type: "traditional",
    },
    {
        icons: ["cabbage", "liver", "onion"],
        name: "Cabbage + Liver",
        description: "Contains cabbage, beef liver, onion powder",
        id: "cabbage-liver",
        type: "traditional",
    },
    {
        icons: ["cherries", "sugar"],
        name: "Cherries",
        description: "Contains cherries, brown sugar, almond extract",
        id: "cherries",
        type: "american",
    },
    {
        icons: ["ricotta", "sugar"],
        name: "Ricotta",
        description: "Contains ricotta, brown sugar, vanilla",
        id: "ricotta",
        type: "american",
    }
];


//     🧀🥔
// 🥔🍄
// 🥔
// 🥔🥩
// 🍕
// 🥬
// 🥬🍄
// 🥬🥩cabbage liver?
// 🍒
// 🍚