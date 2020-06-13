const buildJson = (data) => {
  const json = JSON.stringify(data);
  console.log(json)
  const dataURL = `data:application/json,${json}`;

  const anchor = document.querySelector("#download-tasks");
  anchor.setAttribute("download", "task_data.json");
  anchor.setAttribute("href", dataURL);
}

module.exports = {
  buildJson
}