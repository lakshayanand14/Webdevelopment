let p = fetch("https://kontests.net/api/v1/all")
p.then((response) => {
  return response.json()
}).then((response) => {
  console.log(response)
  ihtml = ""
  for (items in response) {
    console.log(response[items])
    ihtml += `
          <div class="card" style="width: 24rem;">
        <img src="https://images.squarespace-cdn.com/content/v1/56e2e0c520c6472a2586add2/1588179677550-QBCBY6B6USPH361Y67WD/codingame-get-better-at-coding-1200x675.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${response[items].name}</h5>
          <p class="card-text">Status is ${response[items].status}</p>
          <p class="card-text">In 24 hours? ${response[items].in_24_hours}</p>
          <p>Starts at: ${response[items].start_time}
          <p>Ends at: ${response[items].end_time}
          <a href="${response[items].url}" class="btn btn-primary my-2">Register here</a>
        </div>
      </div>
    `
  }
  cardcontainer.innerHTML = ihtml
})
