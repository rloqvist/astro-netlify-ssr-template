interface ResponseBody {
  status: string
  message: string
}

exports.handler = async (event) => {
  const body: ResponseBody = {
    status: "success",
    message: "Hello, World!",
  };

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};