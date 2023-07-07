interface Pack {
    icons: string[];
    name: string;
    description: string;
    id: string;
    type: string;
    sweet?: boolean;
}



export const sets: Pack[] = [
    {
        icons: ["potato", "cheese"],
        name: "Cheese + Potatoes",
        description: "Ingredients: potato, old fort cheddar, salt",
        id: "cheese-potatoes",
        type: "traditional",
    },
    {
        icons: ["potato", "mushroom"],
        name: "Potatoes + Mushrooms",
        description: "Ingredients: potato, champions, butter, garlic powder",
        id: "potatoes-mushrooms",
        type: "traditional",
    },
    {
        icons: ["potato"],
        name: "Potatoes",
        description: "Ingredients: potato, dill, onion, salt, black pepper",
        id: "potatoes",
        type: "traditional",
    },
    {
        icons: ["potato", "liver"],
        name: "Potatoes + Liver",
        description: "Ingredients: potato, beef liver, onion powder, salt",
        id: "potatoes-beef",
        type: "traditional",
    },
    {
        icons: ["pepperoni"],
        name: "Pizza Varennyk",
        description: "Ingredients: pepperoni, mozzarella cheese, old fort cheddar, tomatoes",
        id: "pizza-varennyk",
        type: "western",
    },
    {
        icons: ["cabbage"],
        name: "Cabbage",
        description: "Ingredients: cabbage, onion powder, salt",
        id: "cabbage",
        type: "traditional",
    },
    {
        icons: ["cabbage", "mushroom"],
        name: "Cabbage + Mushrooms",
        description: "Ingredients: cabbage, champions, onion powder, garlic powder",
        id: "cabbage-mushrooms",
        type: "traditional",
    },
    {
        icons: ["cabbage", "liver"],
        name: "Cabbage + Liver",
        description: "Ingredients: cabbage, beef liver, onion powder",
        id: "cabbage-liver",
        type: "traditional",
    },
    {
        icons: ["cherries"],
        name: "Varenyk with Cherries",
        description: "Ingredients: cherries, brown sugar, almond extract",
        id: "cherries",
        type: "western",
        sweet: true,
    },
    {
        icons: ["ricotta"],
        name: "Ricotta Varenyk",
        description: "Ingredients: ricotta, brown sugar, vanilla",
        id: "ricotta",
        type: "western",
        sweet: true,
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