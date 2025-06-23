import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://www.dnd5eapi.co/api/2014/spells/";
//var spell = "fireball"

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}` + "fireball");
    const result = response.data;
    res.render("index.ejs", {
      data: result,
      enteredLevel: null,
      damageAtLevel: null,
      error: req.query.error,
    });
    //console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).send("Something went wrong");
  }
});

app.post("/spells", async (req, res) => {
  const spellName = req.body.name?.toLowerCase();
  const spellLevel = req.body.level;

  if (spellLevel > 9 || spellLevel < 0) {
    return res.render("index.ejs", {
      data: null,
      enteredLevel: spellLevel,
      damageAtLevel: null,
      error:
        "This spell level is Invalid.  Please enter a level between 0-9",
    });
  }

  try {
    const response = await axios.get(API_URL + spellName);
    const result = response.data;

    //Get damage for the entered level if this is applicable:
    let damageAtLevel = null;
    if (result.damage?.damage_at_slot_level && spellLevel) {
      damageAtLevel = result.damage.damage_at_slot_level[spellLevel] || "N/A";
    }

    // Render the EJS page:
    res.render("index.ejs", {
      data: result,
      enteredLevel: spellLevel,
      damageAtLevel: damageAtLevel,
      error: null,
    });
    console.log(result);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);

    //To separate out errors for the spell not being found on a post request
    //Otherwise just advise something went wrong
    if (error.response && error.response.status === 404) {
      return res.redirect("/?error=Spell+not+found");
    } else {
      return "Something went wrong";
    }
  }
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
