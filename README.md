# Arterator-server

## Installation & Usage

### Installation

- Clone down this repo.
- In your terminal `cd `
- in your terminal `NPM install`

## Usage

- To start server `NPM run dev`
- the server will now be running on port 3000

## Routes

| Method | Route           | returns                                                                                                                                                                                              |
| ------ | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /               | welcome message                                                                                                                                                                                      |
| GET    | /recommendation | <code> {<br>&nbsp;"prompt": string, <br>&nbsp;&nbsp;input: {<br>&nbsp;&nbsp;&nbsp;mood: string <br> &nbsp;&nbsp;&nbsp;colours: string <br>&nbsp;&nbsp;&nbsp;tbc: string <br>&nbsp;&nbsp;}<br>}<code> |
| POST   | /:prompt        | 201                                                                                                                                                                                                  |
