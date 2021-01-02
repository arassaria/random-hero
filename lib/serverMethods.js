const { collection } = require("./database");

async function getCollection({ collectionName, role = "" }) {
  const heroes = await collection(collectionName)
    .find({ role: { $regex: new RegExp(role, "i") } })
    .toArray();
  return heroes;
}

exports.getCollection = getCollection;
