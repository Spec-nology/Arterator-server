# Arterator-server.

The API can be found [here](https://arterator.herokuapp.com/)

## Installation & Usage.

### Installation.

- Clone down this repo.
- In your terminal `cd Arterator-server`
- in your terminal `NPM install`

## Usage.

- To start server `NPM run dev`
- the server will now be running on port 3000

## Routes.

| Method | Route                          | Description                                | Returns                                    |
| ------ | ------------------------------ | ------------------------------------------ | ------------------------------------------ |
| GET    | /                              | Home route.                                | Welcome message.                           |
| GET    | /recommendation                | Get a recommendation based on users input. | [See data structures](#data-structures)    |
| POST   | /:prompt                       | Post a users artwork.                      | 201                                        |
| GET    | /:prompt                       | Gets all user posts based on prompt.       | All artwork uploaded to a specific prompt. |
| GET    | /categories                    | Get all category names                     | An array of category names                 |
| GET    | /categories/tags               | Get all category tag data                  | An array of all category tags              |
| GET    | /categories/categoriesWithTags | Gets all categories and tags               | [See data structures](#data-structures)    |

## Data Structures.

#### Recommendations.

```json
{
  "prompt": "string",
  "userInput": {
    "mood": "string",
    "colours": "string",
    "tbc": "string"
  },
  "timesPromptRequested": "int",
  "urlToPrompt": "string"
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
