const express = require("express");
const app = express();
const PORT = 8000;

app.listen(PORT, () => console.log("Server started."));
app.use(express.static("build"));

app.get("/images", (req, res) => {
    res.send(
        [
            {
                "link": "https://img.freepik.com/free-photo/autumn-season-leafs-plant-scene-generative-ai_188544-7971.jpg?t=st=1721796641~exp=1721800241~hmac=03b4e0be09f5378f31178657a11b7a534677cfd1314206e61c4924c26f74afd9&w=996",
                "alt": "photo 1",
                "width": 100,
                "height": 100
            },
            {
                "link": "https://img.freepik.com/free-photo/autumn-season-leafs-plant-scene-generative-ai_188544-7971.jpg?t=st=1721796641~exp=1721800241~hmac=03b4e0be09f5378f31178657a11b7a534677cfd1314206e61c4924c26f74afd9&w=996",
                "alt": "photo 1",
                "width": 100,
                "height": 100
            },
            {
                "link": "https://img.freepik.com/free-photo/liquid-abstract-colorful-texture-background-ai-generative_123827-23915.jpg?w=996&t=st=1722071332~exp=1722071932~hmac=addfc889062481648ddd3435f1cd5aa8d14336c65527d06aa4eb493e153e7f64",
                "alt": "photo 2",
                "width": 100,
                "height": 100
            },
            {
                "link": "https://media.istockphoto.com/id/1491857076/photo/tree-light-bulb-glowing-hold-in-hand-on-blue-background-concept-of-saving-electricity.jpg?s=1024x1024&w=is&k=20&c=Pc8fAuBVEmepq4glK2-c3lbhZj1eZ1-40gh-tg1RO_k=",
                "alt": "photo 3",
                "width": 100,
                "height": 100
            }
        ]
    );
});

