# Arterator-server

| Method | Route           | returns                                                                                                                                                                                              |
| ------ | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /               | welcome message                                                                                                                                                                                      |
| GET    | /recommendation | <code> {<br>&nbsp;"prompt": string, <br>&nbsp;&nbsp;input: {<br>&nbsp;&nbsp;&nbsp;mood: string <br> &nbsp;&nbsp;&nbsp;colours: string <br>&nbsp;&nbsp;&nbsp;tbc: string <br>&nbsp;&nbsp;}<br>}<code> |
| POST   | /:prompt        | 201                                                                                                                                                                                                  |
