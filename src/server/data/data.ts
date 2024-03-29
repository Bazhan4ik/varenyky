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
        name: "Potato + Cheese",
        description: "Ingredients: potato, old fort cheddar, salt",
        id: "cheese-potatoes",
        type: "western",
    },
    {
        icons: ["potato", "mushroom"],
        name: "Potato + Mushrooms",
        description: "Ingredients: potato, champions, butter, garlic powder",
        id: "potato-mushrooms",
        type: "traditional",
    },

    {
        name: "Potato + Cheese + Jalapeno",
        description: "Ingredients: potato, old cheddar, jalapeno pepper, salt",
        icons: ["potato", "pepper"],
        id: "potato-cheese-jalapeno",
        type: "western",
    },

    // {
    //     icons: ["potato"],
    //     name: "Potatoes",
    //     description: "Ingredients: potato, dill, onion, salt, black pepper",
    //     id: "potatoes",
    //     type: "traditional",
    // },
    {
        icons: ["potato", "liver"],
        name: "Potato + Liver",
        description: "Ingredients: potato, beef liver, onion powder, salt",
        id: "potato-liver",
        type: "traditional",
    },
    {
        icons: ["potato", "beacon"],
        name: "Potato + Beacon",
        description: "Ingredients: potato, beacon, onion powder, salt",
        id: "potatoes-beacon",
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
        icons: ["chicken"],
        name: "Meat",
        description: "Ingredients: ground turkey, onion powder, rosemary, onion powder, salt",
        id: "meat",
        type: "traditional",
    },



    {
        icons: ["cherries"],
        name: "Cherry Varenyky",
        description: "Ingredients: cherries, brown sugar, almond extract",
        id: "cherries",
        type: "sweet",
        sweet: true,
    },
    {
        icons: ["blueberry"],
        name: "Blueberry Varenyky",
        description: "Ingredients: blueberries, brown sugar, lemon peel",
        id: "bluberries",
        type: "sweet",
        sweet: true,
    },
    {
        icons: ["strawberry"],
        name: "Strawberry Varenyky",
        description: "Ingredients: strawberries, brown sugar, vanilla",
        id: "strawberries",
        type: "sweet",
        sweet: true,
    },
    {
        icons: ["ricotta"],
        name: "Ricotta Varenyky",
        description: "Ingredients: ricotta, brown sugar, vanilla",
        id: "ricotta",
        type: "sweet",
        sweet: true,
    },



    {
        name: "Taco Varenyky",
        icons: ["taco"],
        description: "Ingredients: ground beef, cheddar cheese, onion powder, chili powder, paprika, garlic powder, oregano, salt",
        id: "taco-varennyk",
        type: "western"
    },
    {
        icons: ["pepperoni"],
        name: "Pizza Varenyky",
        description: "Ingredients: pepperoni, mozzarella cheese, old fort cheddar, tomatoes",
        id: "pizza-varennyk",
        type: "western",
    },
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