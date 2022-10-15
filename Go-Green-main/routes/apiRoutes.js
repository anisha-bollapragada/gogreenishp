const router = require("express").Router();
const fs = require("fs");

router.post("/subscribe", (req, res) => {
  try {
    // read the data json
    return fs.readFile("data/data.json", "utf8", (err, data) => {
      if (err) throw err;

      const allSubscribers = JSON.parse(data);

      const filter = allSubscribers.filter(
        (subscriber) => subscriber.email === req.body.email
      );

      if (filter.length > 0) {
        res.status(405).json("You are already subscribed!!!");
        return;
      }

      // update data json
      allSubscribers.push(req.body);

      return fs.writeFile(
        "data/data.json",
        JSON.stringify(allSubscribers),
        "utf8",
        (err) => {
          if (err) throw err;
          res.status(200).json(req.body);
        }
      );
    });

    // write it back
  } catch (err) {
    console.error(err, "subscribe failed");
    res.status(500).json(err);
  }
});

module.exports = router;
