import { Users } from "src/models/Feed";

const feed = require("./feed.json");
const newFeed: Users = feed.map((user, index) => ({ ...user, id: index }));

const Api = {
  fetch: () => new Promise(resolve => setTimeout(() => resolve(newFeed), 1500))
};

export default Api;
