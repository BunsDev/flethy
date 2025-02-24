// You need to JWK data with whatever is your public RSA key. If you're using Auth0 you
// can download it from https://[your_domain].auth0.com/.well-known/jwks.json

import { ENVVARS } from "./envvar.const";

export const JWK_DEV = {
  alg: "RS256",
  kty: "RSA",
  use: "sig",
  n: "8z6kbs3pLW959CMuBrlbvOUV-0KrdqOmi4jYoG3ipuCHQMjdDDIA_EYVRpaR4qYxvt1y5mt8q98JsyiIH0ItvY_Vms587YgCy_unr1QzD1dbpQ1QfDohNp1NkxjjXnB3SJR-SUxTFU-aCcZTMRB4AJHcznHjt_ypWj-npIbNaiA8CQ_vh3PhYoSEJLk2WauM2tbqH_LpJ247ChKs1Akl5ZZm_8z_NVKk0KnObIJolJcbRDIFKu9Z2mssvZ8R4_jDOCPmlB_LbY9g44vAQzCiMnGGhSv1_jcn2n0JOCqV63eIvq8OHIomG4-bo51hphD6K3Wd3CE6Ggdc50gVMOyZBw",
  e: "AQAB",
  kid: "EDUQUYLYCGNQKwOmtoI0e",
  x5t: "2N403xDl5il6TRGXkF9WPGugMpU",
  x5c: [
    "MIIDCTCCAfGgAwIBAgIJDAxxs5/zbwxfMA0GCSqGSIb3DQEBCwUAMCIxIDAeBgNVBAMTF2ZsZXRoeS1kZXYuZXUuYXV0aDAuY29tMB4XDTIyMTExMzA1MjEzMloXDTM2MDcyMjA1MjEzMlowIjEgMB4GA1UEAxMXZmxldGh5LWRldi5ldS5hdXRoMC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDzPqRuzektb3n0Iy4GuVu85RX7Qqt2o6aLiNigbeKm4IdAyN0MMgD8RhVGlpHipjG+3XLma3yr3wmzKIgfQi29j9WaznztiALL+6evVDMPV1ulDVB8OiE2nU2TGONecHdIlH5JTFMVT5oJxlMxEHgAkdzOceO3/KlaP6ekhs1qIDwJD++Hc+FihIQkuTZZq4za1uof8uknbjsKEqzUCSXllmb/zP81UqTQqc5sgmiUlxtEMgUq71naayy9nxHj+MM4I+aUH8ttj2Dji8BDMKIycYaFK/X+NyfafQk4KpXrd4i+rw4ciiYbj5ujnWGmEPordZ3cIToaB1znSBUw7JkHAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFOpwOL3ElGsc/xB8iJDC5//TSYT/MA4GA1UdDwEB/wQEAwIChDANBgkqhkiG9w0BAQsFAAOCAQEAWCVxa9fr2sdI8c7shR3FR9C8ACrT5yUzrE2qwLVJujTTe35CUJmCTlWjzWce+R5brWVftZdvQY5bZgJAq7AqNDWhJiaALXZFeM6qJsjImCsl7Q3ESits1t2P9LvbcCjLKQiZfJEUaKLJdW4ZjtXkAgIHQHjY9jSFTS0mHw1NkdUHPguTwqcCn6JVsszmmYUjsyu2GFIcIFGnHrXE0bmViPGoAY3qJt/EHM5iF4DDW6H2qkQpzScf9THUOCpBwhnkN2lsRCjee07ockWIP0/VDQ3l0eLDu6k+cP4TAUR404CHp8r93B/7YmSsoFtBBt/aHskvNrzVb8KZwA6ynIi0Ag==",
  ],
};

export function getJwks() {
  switch (ENVVARS.config.stage) {
    case "dev":
      return JWK_DEV;
    default:
      throw new Error(`JWKS not found for stage ${ENVVARS.config.stage}`);
  }
}
