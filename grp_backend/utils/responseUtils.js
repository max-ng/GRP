const wrapResponse = (res) => {
  res.replySuccess = (message, params) => {
    res.json(Object.assign({}, {
      success: true,
      message,
    }, params));
  };
  res.replyBadRequest = (message) => {
    res.status(400).send({
      success: false,
      message,
    });
  };
  res.replyUnauthorized = (message) => {
    res.status(401).send({
      success: false,
      message,
    });
  };
  res.replyForbidden = (message) => {
    res.status(403).send({
      success: false,
      message,
    });
  };
  res.replyNotFound = (message) => {
    res.status(404).send({
      success: false,
      message,
    });
  };
  res.replyError = (message) => {
    res.status(500).send({
      success: false,
      message,
    });
  };
};

module.exports = {
  wrapResponse,
};
