import React from "react";

import { connect } from "react-redux";

function Video({ activeLesson, activeModule }) {
  return (
    <div>
      <strong>Módulo {activeModule.title}</strong>
      <span>Aula {activeLesson.title}</span>
    </div>
  );
}

export default connect(({ course: { activeLesson, activeModule } }) => ({
  activeLesson,
  activeModule,
}))(Video);
