---
template: post
title: What the heck is JWT anyway?
slug: what-the-heck-is-jwt-anyway
draft: false
date: 2018-03-06T23:46:37.121Z
description: >-
  Fundamentals of a JWT token and how we can benefit from it for authenticating
  communications between two parties, all of this using vanilla NodeJS and
  javascript.
category: Tutorial
tags:
  - authentication
---
> Originally published in [dev.to](https://dev.to/siwalikm/what-the-heck-is-jwt-anyway--47hg)

In this article we will learn the fundamentals of a JWT token is and how we can benefit from it for authenticating communications between two parties, all of this using vanilla NodeJS and javascript.

> JWT is an abbreviation for JSON Web Token, which is a compact URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS). ~ IETF

**Urggh! What?**

Simply put, JWT token is a string we pass in the header or url while making a network request to pass data safely and make sure it hasn't been tampered with.

Example: www.example.com/private/?token=xxxxx.yyyyy.zzzzz

You might be wondering what's with the token format! JWT tokens consists of three parts separated by dots `( . )` which are:

```
header.payload.signature
```

Let's see the differents parts of a JWT token in details.

**1. Header** The header typically consists of two parts: the type of the token, which is JWT, and the hashing algorithm being used, such as HMAC SHA256 or RSA.

```javascript
{
   "alg": "HS256",
   "typ": "JWT"
}
```

Then, this JSON is Base64Url encoded to form the first part of the JWT.

```javascript
'use strict';

var header = { "alg": "HS256", "typ": "JWT" };
var enc_header = Buffer.from(JSON.stringify(header)).toString('base64');
// ► "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
```

**2. Payload**

The second part of the token is the payload, which contains the **claims**. Claims are predefined keys and their values. There are three types of claims: registered, public, and private claims.

* **Registered claims:** These are a set of predefined keys which are not mandatory but recommended. Some of them are **iss** (issuer), **exp** (expiration time) etc.
* **Public claims:** These can be defined at will by those using JWTs. But to avoid collisions they should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision resistant namespace.
* **Private claims:** These are the custom key value pairs created to share information between parties that agree on using them and are neither registered or public claims.

```javascript
{
   "exp": "2019-02-14",
   "message": "roses are red"
}
```

The payload is then Base64Url encoded to form the second part of the JSON Web Token.

```javascript
'use strict';

var payload = { "exp": "2019-02-14", "message": "roses are red" };
var enc_payload = Buffer.from(JSON.stringify(payload)).toString('base64');
// ► eyJleHAiOiIyMDE5LTAyLTE0IiwibmFtZSI6IkpvaG4gRG9lIn0
```

**3. Signature**

To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that. Too good for us that NodeJS comes with the immensely powerful [Crypto library](https://nodejs.org/api/crypto.html) out of the box which we will use in our example.

```javascript
'use strict';
const crypto = require('crypto');
var jwt_secret = "secret";
// enc_header and enc_payload are computed earlier
var signature = crypto.createHmac('sha256', jwt_secret).update(enc_header +"."+ enc_payload).digest('base64');
// ► 6C46KAaZGp6RjbSqGllfdQF7g8vXCp02NTSrz-PzeoI
```

The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

The final JWT token looks like this

```javascript
var token = `${enc_header}.${enc_payload}.${signature}`;
// ► eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDE5LTAyLTE0IiwibWVzc2FnZSI6InJvc2VzIGFyZSByZWQifQ.0u-mkgLo5479CPjJJ4mXCwn2RW4dFT12fiYiopRWsZw
```

Something important to remember here is that JWT tokens are used for authentication and not encryption, so even without knowing the secret key, someone can read your header and payload data. 

But upon receiving the token you can sign the header and payload again with your secret key and compare it with the received signature to detect tampering of token or the message.

A good place to start will be by going to this [online JWT debugger at jwt.io](https://jwt.io/#debugger) and play around with the the token we just generated above.
