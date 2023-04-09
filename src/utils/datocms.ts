interface DatoCMSParams {
  url: string
  accessToken: string
  query: string
}

export const datocms = async ({url, accessToken, query}: DatoCMSParams) => {
  const headers = new Headers()
  headers.append("Content-Type", "application/json");
  const body = JSON.stringify({query, accessToken})

  const content = await fetch(url, {
    headers,
    body,
    method: "POST"
  }).then(response => {
    return response.json()
  })
  
  return content
}