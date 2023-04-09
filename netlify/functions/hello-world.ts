exports.handler = async (event) => {
  const body = {
    status: "success",
    message: "Hello, World!",
  };

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};