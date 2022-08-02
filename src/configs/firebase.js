var admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert({
        type: 'service_account',
        project_id: 'photostore-fee86',
        private_key_id: 'dc99fd93aefe06403992834633b6afd7ea2d082d',
        private_key:
            '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDPGiwEL7B3/VgD\nh/d8B/jUpMcBcR0TtQZg2uNP5hXj8PTD2vRhMRoxVwjbFIaXBg12ioxYAZmrUyQp\ngp+YxtQx0ynJSL8aSq1x5ZltKuPec4t7pspBjXnFKdBofybOtbyFfSM3sEbmhjAd\nUi6jl42F8m2eaChIPlHfXx/wUBnKNrx1oiO8tEO/Kn8bMTVO2WbwewJHgrpgw5LJ\nJ+DUX6fXUtHZc4G8CQvZahyKyV39vIMTE93C7KgCM9EEeqmF8RnHY56As9Xurjyc\nzcFfemzS4V2AtXN4axx5tsKEpL/F7OUNxkUCIcBG6+KWAYKDlLM7zNaLDDI37SzB\ncTc2kcsfAgMBAAECggEAErhEZe/OQoJMBtcEQpn73siy0560U02HxpByfzcxH69D\niJfi2A2BVxgNYl7KwvLr8PJEDkkSvqmKDsB9CZO1/CJLWCOIYT7XylWdFoDhI6s2\nXpZsbhwfd3gN8QFxR2T7peXySCcvDsjup2/VbGRss+tTsj+q8yDC828HQDMVVFw6\n8K46Cyrahip4Pmxp4w5uD4vPLteHy7NJbqgSX8gyYX1Na9WDkzkgbiI+swTBm0ZT\n1fOlDfkpel/+IzYK4qcSqsbYNGOIa49iNu8LJDsuKV7RD4h7uNQ7Lrqv0nEsenpo\nOzJFLC3tFtQi7tkzx+Q3dd+3FO9MFPh+jj4fSQ3DBQKBgQDnQb1KyWt1ezGxUA8p\nxgriSqMq5yqU+1guPwEH4OZC/Kp+0cR0ICTNxWjI+5CRT7y9Lz42VTOFGGS69UPy\nJ9376El6ra3USlUQPkTeBpvQTAgOzzh3y86EsECddVlV2bhCoL/LdXUSeHF91qgN\nZbR8xHSQxjD7AF7swDqQ51TgFQKBgQDlQtMl+MFs9yvjYlYc/Mo8Gtbz5FJbQt9e\nm3HjskYRnQ2usN39JemSrNfA2pdZX3GebCEQetRklaJSYuZGK8unVNHp5DD2o8JN\n3nZcIQ68e3STWr0naLVIYXDZQwX/w9j1apOMqtAalS+/3hOsdP2etGZ/3YtusZ7+\nqtyYVDhXYwKBgGuziC8eY3eRanFD8evomgUN8bP3eTNtY4IWQaqjqVmlRtpNY4sZ\ntUpIGCcSUh/63NHXAMhZIedolvEjbQOIYbACXMZPwNdPzxIDjhtBRKvb3RzYkVnp\nh0LwuwcaMgLzpQcSyoA9McrqYSDUKewjY81/yTHru8AKSitE04HM2xCJAoGBANta\nqc5OCTvp7pscLoqDsDf78ijfD5F0FWZe0oRqwTH/E+VOIsggqzAEolZKj78aXAqZ\nKLWs4GTw6qNrLyp6otuSg1oHVHXXz4RT0ulpU8ExWiPXEN6RB8qeOKwXvbiuuXpv\nI4fWs1CL52jr4eUC9tsPfnbfEZay6g5+ipxREKtDAoGALee40QLcLYvWE2ehQlmG\nu2GxLAHayAQtrVNaB0t4pjVussqQrjaxuzx4Prumr6192e8SeVfU+KDTQWW1+M3J\npDKBrayTDDLzNd1Nk9ytldsWsSDZoeXmR5NR7vImghqJqvkqyGkl+QifJ7lEeYT6\nT49Jx4gdF8RzuYtlfSk1ZMA=\n-----END PRIVATE KEY-----\n',
        client_email: 'firebase-adminsdk-9ota9@photostore-fee86.iam.gserviceaccount.com',
        client_id: '115694851311766343002',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url:
            'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9ota9%40photostore-fee86.iam.gserviceaccount.com',
    }),
});

module.exports = admin;
