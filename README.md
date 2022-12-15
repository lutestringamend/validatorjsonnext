This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Get the entity only from validator public key

### Request

`GET /v1/pubkey/:validator_pubkey`

    curl -i -H 'Accept: application/json' http://localhost:3000/v1/pubkey/0xabcdef

### Response

    HTTP/1.1 200 OK
    Date: Mon, 12 Dec 2022 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 1

    {"entity":"StakeWise"}

## Get the whole validator pools data

### Request

`GET /complete/data`

    curl -i -H 'Accept: application/json' http://localhost:3000/complete/data

### Response

    HTTP/1.1 200 OK
    Date: Mon, 12 Dec 2022 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json

[
{
"validator_pubkey": "0xabcdef",
"gc_deposit_address": "0xdefghi",
"Label": "StakeWise"
}, etc...
]
