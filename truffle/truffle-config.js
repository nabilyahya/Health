module.exports = {
  // other configuration options...
  // ...
  // Add the following code to handle the about-us route
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      // Add the following code to handle the about-us route
      afterDeploy: async (deployer, network, accounts) => {
        const Medikal = artifacts.require("Medikal"); // replace YourContract with Medikal
        const contract = await Medikal.deployed(); // replace YourContract with Medikal
        const app = require("express")();
        app.get("/about-us", async (req, res) => {
          const result = await contract.aboutUs(); // call the aboutUs function on your contract
          res.send(result); // send the result as the response
        });
        app.listen(3000);
      },
    },
  },
};
