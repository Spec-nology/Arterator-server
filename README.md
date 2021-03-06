# Arterator-server.

The API can be found [here](https://arterator.herokuapp.com/)

## Installation & Usage.

### Installation.

-   Clone down this repo.
-   In your terminal `cd Arterator-server`
-   in your terminal `NPM install`

## Usage.

-   To start server `NPM run dev`
-   the server will now be running on port 3000

## Database.

The database schema can be viewed [here](https://dbdiagram.io/d/62b614bd69be0b672c3a78b5)
The database parses the .csv files in `/data/datasources`
To seed the database the heroku environment variable `DEV` must be set to `true` then preform `GET /resetdb`
If the process is successful you will receive the response `DB reset`

## Routes.

| Method | Route                          | Description                                          | Returns                                    |
| ------ | ------------------------------ | ---------------------------------------------------- | ------------------------------------------ |
| GET    | /                              | Home route.                                          | Welcome message.                           |
| POST   | /prompt                        | Returns all relevant prompts based on the post body. | 200                                        |
| GET    | /prompt                        | Gets all promps in the database.                     | All artwork uploaded to a specific prompt. |
| GET    | /categories                    | Get all category names                               | An array of category names                 |
| GET    | /categories/tags               | Get all category tag data                            | An array of all category tags              |
| GET    | /categories/categoriesWithTags | Gets all categories and tags                         | [See data structures](#data-structures)    |

## Data Structures.

#### POST /prompt

```json
//post body is required as below.
{
    "color palette": "string",
    "medium": "string",
    "mood": "string",
    "style": "string",
    "subject": "string"
}

//post request returns the below
{
  "prompt": "string"
}
```

#### Categories with Tags.

```json
[
    {
        "categoryName": "String",
        "tags": ["String", "String"]
    },
    {
        "categoryName": "String",
        "tags": ["String", "String"]
    }
]
```
