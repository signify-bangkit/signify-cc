# Signify-API

# How to Use
- local host: local IP and Port:8080
   'http://localhost:8080'
  - Online Domain:
   'https://capstone-project-signify.et.r.appspot.com/'

# Endpoint Route

URL Route:
  `http://localhost:8080/api/auth/register`
  or
  `https://capstone-project-signify.et.r.appspot.com/api/auth/register`

  - **[POST]** _Add New User_

    Request:

    ```
    {
        "email": "abccccddd@example.com",
        "password": "password12223",
        "firstName": "An",
        "lastName": "Nonym"
    }
    ```

    Response:

    ```
    {
        "error": false,
        "msg": "User registered successfully"
    }
    ```

URL Route:
  `http://localhost:8080/api/auth/login`
  or
  `https://capstone-project-signify.et.r.appspot.com/api/auth/login`

  - **[POST]** _Login to Existing User_

    Request:

    ```
    {
        "email": "abccccdd@example.com",
        "password": "password12223"
    }
    ```

    Response:

    ```
    {
        "firstName": "An",
        "lastName": "Nonym",
        "email": "abccccdd@example.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY2NjY2RkQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4OTIwMTE4fQ.gtjHCzOV6E6gd4EHmMoFSMQi2FYptj1SW8GLnGoF9_I"
    }
    ```

URL Route:
  `http://localhost:8080/api/profile/update`
  or
  `https://capstone-project-signify.et.r.appspot.com/api/profile/update`

  - **[PUT]** _Edit Data User_

    Auth:
    ```
    Bearer Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY2NjY2RkQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4OTIwMTE4fQ.gtjHCzOV6E6gd4EHmMoFSMQi2FYptj1SW8GLnGoF9_I"
    ```

    Request:

    ```
    {
        "email": "abccccdd@example.com",
        "firstName": "An",
        "lastName": "Nonym"
    }

    ```

    Response:

    ```
    {
        "error": false,
       "msg": "User profile updated successfully",
       "results": {
           "password": "$2b$10$ipZVvMLg4ugCVe/jMKljYuNUD4NQlYIRoqM0O0VQBk0JiNsr8NJaS",
           "email": "anonnnn@example.com",
           "createdAt": {
               "_seconds": 1718726438,
               "_nanoseconds": 397000000
           },
           "firstName": "An",
           "lastName": "Nonym",
           "updatedAt": {
               "_seconds": 1718921171,
               "_nanoseconds": 394000000
           }
       }
    }
    ```


URL Route:
  `http://localhost:8080/api/translation/add-translation`
  or
  `https://capstone-project-signify.et.r.appspot.com/api/translation/add-translation`

  - **[POST]** _Add New Translation_

    Auth:
    ```
    Bearer Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY2NjY2RkQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4OTIwMTE4fQ.gtjHCzOV6E6gd4EHmMoFSMQi2FYptj1SW8GLnGoF9_I"
    ```

    Request:

    ```
    {
        "email": "abccccdd@example.com",
        "translatedText" : "Hello"
    }

    ```

    Response:

    ```
    {
        "error": false,
        "msg": "Translation added successfully"
    }
    ```

URL Route:
  `http://localhost:8080/api/translation/history`
  or
  `https://capstone-project-signify.et.r.appspot.com/api/translation/history`

  - **[GET]** _Get History Translation_

    Auth:
    ```
    Bearer Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY2NjY2RkQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4OTIwMTE4fQ.gtjHCzOV6E6gd4EHmMoFSMQi2FYptj1SW8GLnGoF9_I"
    ```

    Request:

    ```

    ```

    Response:

    ```
    [
       {
           "translatedText": "Hello",
           "email": "abccccdd@example.com",
           "createdAt": {
               "_seconds": 1718920388,
               "_nanoseconds": 572000000
           }
       }
    ]
    ```
URL Route:
  `http://localhost:8080/api/translation/articles`
  or
  `https://capstone-project-signify.et.r.appspot.com/api/translation/articles`

  - **[GET]** _Get Articles_

    Auth:
    ```
    Bearer Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY2NjY2RkQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE4OTIwMTE4fQ.gtjHCzOV6E6gd4EHmMoFSMQi2FYptj1SW8GLnGoF9_I"
    ```

    Request:

    ```

    ```

    Response:

    ```
    [
    
    {
        "id": "dnEEdQnv9NE2he3ODAED",
        "createdAt": {
            "_seconds": 1718229522,
            "_nanoseconds": 856000000
        },
        "content": "This article provides an overview of sign language...",
        "title": "Introduction to Sign Language"
    },
    {
        "id": "mfGuHLJ6BY3tzR2PUzXf",
        "content": "Calon presiden nomor urut 1 Anies Baswedan menjelaskan makna bahasa isyarat yang dia gunakan saat membuka debat capres yang digelar Minggu (4/2/2024) kemarin. Sambil menirukan gerak tangannya yang digunakan sebagai bahasa isyarat, Anies menyebut makna bahasa isyarat tersebut sebagai kalimat \"waktunya perubahan\". \"Its time for change,\" kata Anies dalam acara Desak Anies di Semarang, Jawa Tengah, disiarkan lewat kanal YouTube pribadinya secara langsung, Senin (5/2/2024). Baca juga: Debat Pamungkas: Anies Konsisten Perubahan, Prabowo Banyak Setuju Lawan, Ganjar Tegas dan Berani Anies mengatakan, isyarat itu sebagai pesan sudah waktunya seluruh Indonesia memberikan pandangan lebih kepada para penyandang disabilitas. Gerakan itu, kata Anies, memberikan arti negara harus perhatian dan tak melupakan kewajibannya kepada kelompok rentan tersebut.",
        "createdAt": {
            "_seconds": 1718730000,
            "_nanoseconds": 238000000
        },
        "title": "Anies Jelaskan Makna Bahasa Isyarat saat Debat Capres Pamungkas "
    },
    ....
     ]
    ```

