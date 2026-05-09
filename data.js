export const appetizers = Object.freeze([
    {
        name: "Coffee & Thoughts",
        tags: [
            {
                type: "type",
                value: "🧠 Body"
            },
            {
                type: "time",
                value: "🕰️ 5-10 min"
            },
            {
                type: "length",
                value: "📏 Short Term"
            }
        ]
    },
    {
        name: "Make bed",
        tags: [
            {
                type: "time",
                value: "2 min"
            }
        ]
    },
    {
        name: "Tidy an area",
        tags: [
            {
                type: "time",
                value: "5-10 min"
            }
        ],
        suggestions: [
            "Desk", "Floor"
        ]
    },
    {
        name: "Doodle",
        tags: [
            {
                type: "time",
                value: "5-10 min"
            }
        ]
    },
    {
        name: "Stretch",
        tags: [
            {
                type: "time",
                value: "5-10 min"
            }
        ],
        suggestions: [
            "Back", "Legs", "Neck"
        ]
    },
])

export const entrees = Object.freeze([
    {
        name: "Cook a meal",
        tags: [
            {
                type: "time",
                value: "30-45 min"
            }
        ],
        suggestions: [
            "Pasta", "Pizza", "Pico de gallo"
        ]
    }
])

export const sides = Object.freeze([
    {
        name: "Fidget toy",
        tags: [
            {
                type: "time",
                value: "5-10 min"
            }
        ],
        suggestions: [
            "Tangle", "Spinner", "Pencil"
        ]
    }
])

export const desserts = Object.freeze([
    {
        name: "Sweet treat",
        tags: [
            {
                type: "time",
                value: "5-10 min"
            }
        ],
        suggestions: [
            "Candy", "Slushie", "Milkshake"
        ]
    }
])