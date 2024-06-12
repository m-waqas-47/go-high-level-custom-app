async function initiateAuth(req, res) {
  const options = {
    requestType: "code",
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    scopes: ["calendars.readonly", "campaigns.readonly"],
  };

  return res.redirect(
    `${process.env.BASE_URL}/oauth/chooselocation?response_type=${
      options.requestType
    }&redirect_uri=${options.redirectUri}&client_id=${
      options.clientId
    }&scope=${options.scopes.join(" ")}`
  );
}

module.exports = initiateAuth;
