Deno.serve(async (req) => {
  // Pega todos os headers recebidos
  const allHeaders: Record<string, string> = {}
  req.headers.forEach((value, key) => {
    allHeaders[key] = value
  })

  const body = await req.text()

  await fetch("https://webhook.site/8b1d7521-a8a9-4e5e-b23d-599a16aece34", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-All-Headers": JSON.stringify(allHeaders), // todos os headers que chegaram
    },
    body: body
  })

  return new Response("ok", { status: 200 })
})
