"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 8000;
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
function getRandomNumber() {
    return Math.round(Math.random() * 3);
}
const JokesArr = [
    "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
    "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn't.",
    "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says 'Do you get the reference?' But Java didn't.",
    "A SQL statement walks into a bar and sees two tables. It approaches, and asks 'may I join you?'"
];
app.get("/api/jokes", (req, res) => {
    // console.log(req.body)
    const Joke = JokesArr[getRandomNumber()];
    res.send({ Joke: Joke });
});
app.listen(PORT, () => {
    console.log("active at: " + PORT);
});
