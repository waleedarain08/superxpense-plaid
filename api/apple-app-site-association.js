export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "WQ8NU3AU8M.com.superxpense",
          paths: ["/*"]
        }
      ]
    }
  });
}
