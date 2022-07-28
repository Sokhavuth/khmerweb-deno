const key = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-512" },
    true,
    ["sign", "verify"],
  );

  import { create,verify } from "https://deno.land/x/djwt@v2.7/mod.ts";

  const jwt = await create({ alg: "HS512", typ: "JWT" }, { foo: "bar" }, key);
  const user = await verify(jwt, key)

  console.log(user)