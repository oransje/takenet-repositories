export default function filterData(queryData) {
  return queryData["organization"]["repositories"]["nodes"];
}