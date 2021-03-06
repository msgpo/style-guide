module.exports = {
    name: "Style Guide",
    description: "Demo Integration to show how to use built in styles from Polarity Web 3.x",
    acronym: "SG",
    entityTypes: ['*'],
    "styles": [
        "./styles/style-guide.less"
    ],
    block: {
        component: {
            file: "./components/style-guide-block.js"
        },
        template: {
            file: "./templates/style-guide.hbs"
        }
    },
};