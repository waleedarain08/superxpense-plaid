export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "6746163922.com.superxpense",
          paths: ["/plaid-oauth/*"]
        }
      ]
    }
  });
}
