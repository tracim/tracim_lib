export const libHandleFetchResult = async fetchResult => {
  switch (fetchResult.status) {
    case 200:
    case 304:
      const resultJson = await fetchResult.clone().json()
      return new Promise((resolve, reject) => resolve({
        apiResponse: fetchResult,
        body: resultJson
      }))
    case 204:
      return fetchResult
    case 400:
    case 404:
    case 409:
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
      return new Promise((resolve, reject) => reject(fetchResult)) // @TODO : handle errors from api result
  }
}
