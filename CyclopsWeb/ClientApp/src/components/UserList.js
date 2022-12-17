import React, { Component } from 'react';

export class UserList extends Component {
  static displayName = UserList.name;

  render() {
    return (
      <div>
        <h1>Ziyaretçiler Sıralı Liste</h1>
        <p>Esat Oktay</p>
        <p>Dr. Mengele</p>
        <p>Cem Sultan</p>
        <p>Hendrik Verwoerd</p>
        <p>Japon İş Adamı Sakura</p>
      </div>
    );
  }
}
