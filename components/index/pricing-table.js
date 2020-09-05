import React from 'react';

const comparison = [
  {
    title: 'Dokumente druckbar',
    bgblIcon: 'fa-times-circle',
    bgblLabel: 'Nein',
    ogIcon: 'fa-check',
    ogLabel: 'Ja',
  },
  {
    title: 'Volltextsuche',
    bgblIcon: 'fa-times-circle',
    bgblLabel: 'Nein',
    ogIcon: 'fa-check',
    ogLabel: 'Ja',
  },
  {
    title: 'Text in älteren Ausgaben',
    bgblIcon: 'fa-times-circle',
    bgblLabel: 'Nein',
    ogIcon: 'fa-check',
    ogLabel: 'Ja',
  },
  {
    title: 'Gesamt-Download',
    bgblIcon: 'fa-times-circle',
    bgblLabel: 'Nein',
    ogIcon: 'fa-check',
    ogLabel: 'Ja',
  },
  {
    title: 'Freie Weiterverwendung',
    bgblIcon: 'fa-times-circle',
    bgblLabel: 'Nein',
    ogIcon: 'fa-check',
    ogLabel: 'Ja',
  },
  {
    title: 'Stabile Links',
    bgblIcon: 'fa-times-circle',
    bgblLabel: 'Nein',
    ogIcon: 'fa-check',
    ogLabel: 'Ja',
  },
  {
    title: 'RSS-Feeds',
    bgblIcon: 'fa-times-circle',
    bgblLabel: 'Nein',
    ogIcon: 'fa-check',
    ogLabel: 'Ja',
  },
  {
    title: 'Programmier-Schnittstelle',
    bgblIcon: 'fa-times-circle',
    bgblLabel: 'Nein',
    ogIcon: 'fa-check',
    ogLabel: 'Ja',
  },
  {
    title: 'alle Funktionen kostenlos',
    bgblIcon: 'fa-times-circle',
    bgblLabel: 'Nein',
    ogIcon: 'fa-check',
    ogLabel: 'Ja',
  },
  {
    title: 'gemeinnützig',
    bgblIcon: 'fa-times-circle',
    bgblLabel: 'Nein, profitorientiert',
    ogIcon: 'fa-check',
    ogLabel: 'Ja',
  },
];

const PricingTable = () => (
  <div className="content is-medium pricing-table">
    <h3>Vergleich</h3>
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>
            „Kostenloser Bürgerzugang“
            <br />
            des Bundes&shy;anzeiger Verlags
          </th>
          <th>Offene&shy;Gesetze.de</th>
        </tr>
      </thead>
      <tbody>
        {comparison.map((row) => (
          <tr key={row.title}>
            <td className="pricing-title">{row.title}</td>
            <td>
              <span className="cell-label">Bundes&shy;anzeiger Verlag</span>
              <div className="cell-content">
                <i className={`fas ${row.bgblIcon}`} />
                &nbsp;{row.bgblLabel}
              </div>
            </td>
            <td>
              <span className="cell-label">Offene&shy;Gesetze.de</span>
              <div className="cell-content">
                <i className={`fas ${row.ogIcon}`} />
                &nbsp;{row.ogLabel}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PricingTable;
