1. Relasi *Skiljek* dan Schema.

    Relasi: One-to-one 

    Schema:
    ```json
    {
      "_id": "ObjectId('507f191e810c19729de860eaa')",
      "fullName": "Mas Doni",
      "email": "masdoooni@gmail.com",
      "phoneNumber": "082111222333"
    }
    ```

<br>

2. Relasi *SkilShop* dan Schema.

    Relasi : One-to-few

    Schema:
    ```json
    {
      "_id": "ObjectId('507f191e810c19729de860eab')",
      "fullName": "Mas Doni",
      "phoneNumber": "082111222333",
      "address": [
        {"street": "165, Kota Baru", "city": "Trenggalek"},
        {"street": "289-1113, Nishishinjuku Shinjuku Sumitomobiru(31-kai)", "city": "Shinjuku-ku"}
      ]
    }
    ```

<br>

3. Relasi *SkilShop* dan Schema
    
    Relasi: One-to-many

    Schema:
    ```json
    {
      "_id": "ObjectId('507f191e810c19729de860eac)",
      "productName": "Kaos Polos",
      "brandName": "SkilShirt",
      "variants": [
        {
          "variantName": "Kaos Polos Hitam",
          "color": "Hitam",
          "quantity": 12,
          "price": "Rp 99.000"
        },
        {
          "variantName": "Kaos Polos Navy",
          "color": "Navy",
          "quantity": 10,
          "price": "Rp 99.000"
        }
      ]
    }
    ```


<br>

4. Relasi *SkilFlix* dan Schema

    Relasi: Many-to-many

    Schema:

    Cinema:
    ```json
    {
      "_id": "ObjectId('507f191e810c19729de860ead')",
      "cinemaName": "CGF",
      "location": "Pondok Indah Mall",
      "films": [
        "ObjectId('507f191e810c19729de860eaf')", 
        "ObjectId('507f191e810c19729de860eag')"
      ]
    },
    {
      "_id": "ObjectId('507f191e810c19729de860eae')",
      "cinemaName": "Cinema31",
      "location": "Mall Kelapa Gading",
      "films": [
        "ObjectId('507f191e810c19729de860eaf')",
        "ObjectId('507f191e810c19729de860eag')"
      ]
    }
    ```

    Movie:
    ```json
    {
      "_id": "ObjectId('507f191e810c19729de860eaf')",
      "filmName": "Venom 2",
      "cinemas": [
        "ObjectId('507f191e810c19729de860ead')", 
        "ObjectId('507f191e810c19729de860eae')"
      ]
    },
    {
      "_id": "ObjectId('507f191e810c19729de860eadg')",
      "filmName": "Spiderman No Way Home",
      "cinemas": [
        "ObjectId('507f191e810c19729de860ead')", 
        "ObjectId('507f191e810c19729de860eae')"
      ]
    }
    ```