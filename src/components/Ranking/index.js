import React from "react";

import style from "./style.module.css";

function Ranking({ playersConnected }) {
  console.log("rankgin", playersConnected);
  return (
    <table className={style.container}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {playersConnected.map(({ name, id }) => {
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>0</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total players</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Ranking;
