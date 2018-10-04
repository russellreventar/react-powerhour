import React from 'react';

//1.3
const Fragment3 = () => {

  const headers = [
    {
      id: 1,
      name: 'Dogs',
    },
    {
      id: 2,
      name: 'Cats',
    },
    {
      id: 3,
      name: 'Birds',
    },
  ];

  const HeadersMap = () =>
    headers.map(header =>
      <React.Fragment key={header.id}>
        <th>{header.name}</th>
        <th> </th>
      </React.Fragment>
    )

  return (
    <table>
      <thead>
        <tr>
          <HeadersMap/>
        </tr>
      </thead>
    </table>
  )
}

export default Fragment3;