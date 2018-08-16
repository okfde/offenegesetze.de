import React from 'react';

const PricingTable = () => (
  <p>
    <h3>Vergleich</h3>
    <table style={{ width: '100%', textAlign: 'center' }}>
      <tr>
        <th />
        <th>BGBL</th>
        <th>OffeneGesetze.de</th>
      </tr>
      <tr>
        <td>Alle Dokumente sind ausdruckbar</td>
        <td>✔</td>
        <td>✔</td>
      </tr>
      <tr>
        <td>Volltextsuche</td>
        <td>✔</td>
        <td>✔</td>
      </tr>
      <tr>
        <td>RSS-Feeds</td>
        <td />
        <td>✔</td>
      </tr>
      <tr>
        <td>Stabile Links</td>
        <td />
        <td>✔</td>
      </tr>
      <tr>
        <td>API</td>
        <td />
        <td>✔</td>
      </tr>
      <tr>
        <td>Preis</td>
        <td>99 Euro</td>
        <td>0 Euro</td>
      </tr>
    </table>
  </p>
);

export default PricingTable;
