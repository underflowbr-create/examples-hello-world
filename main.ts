Deno.serve(async (req) => {
  const ip = req.headers.get("cf-connecting-ip")
           || req.headers.get("x-forwarded-for")
           || "desconhecido"

  const body = await req.text()

  await fetch("https://webhook.site/8b1d7521-a8a9-4e5e-b23d-599a16aece34", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Original-IP": ip,
    },
    body: body
  })

  return new Response("ok", { status: 200 })
})
