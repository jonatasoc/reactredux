import React, { Component } from "react";

export default class Sidebar extends Component {
  state = {
    modules: [
      {
        id: 1,
        title: "Inciando com React",
        lessons: [
          { id: 1, title: "Primeira aula" },
          { id: 2, title: "Segunda aula" },
        ],
      },
      {
        id: 2,
        title: "Aprendendo Redux",
        lessons: [
          { id: 1, title: "Terceira aula" },
          { id: 2, title: "Quarta aula" },
        ],
      },
    ],
  };
}
