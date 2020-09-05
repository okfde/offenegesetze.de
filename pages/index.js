import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import BaseIndex from '../components/layout/base-index';
import Recent from '../components/index/recent';
import PricingTable from '../components/index/pricing-table';
import Substantials from '../components/index/substantials';

class IndexPage extends React.Component {
  state = { more: true };

  render() {
    const { items } = this.props;
    return (
      <BaseIndex>
        <div className="hero is-medium is-primary">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-desktop">
                <div className="column content is-large">
                  <h1 className="title">Freier Zugang zu unseren Gesetzen.</h1>

                  <p className="content">
                    Ein privater Verlag bestimmt darüber, wie unsere Gesetze in
                    Kraft treten. Wer Gesetzesblätter des Bundes durchsuchen,
                    kopieren oder ausdrucken will, wird zur Kasse gebeten.
                  </p>
                  <p className="title is-2">Das ändern wir!</p>
                  <p className="content">
                    Wir stellen das Bundesgesetzblatt in digitaler Form
                    kostenfrei zur Verfügung.
                  </p>
                </div>
                <div className="column hero-image-column">
                  <div className="hero-image-wrapper">
                    <Link href="/veroeffentlichung/bgbl1/1949/1#page=1">
                      <a href="/veroeffentlichung/bgbl1/1949/1#page=1">
                        <img
                          className="hero-image"
                          src="/static/bgbl1_1949.png"
                          alt="Ausschnitt der 1. Ausgabe des BGBl Teil 1 vom 23. Mai 2949"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-info">
          <div className="container">
            <div className="columns is-desktop content is-normal">
              <div className="column">
                <div className="has-text-centered">
                  <i className="is-primary-color fas fa-scroll fa-3x" />
                  <h3 className="subtitle">Das Bundesgesetzblatt</h3>
                </div>
                <br />
                <p>
                  Im Bundesgesetzblatt (BGBl.) werden alle Gesetze der
                  Bundesrepublik Deutschland veröffentlicht. Gesetze treten erst
                  in Kraft, wenn sie dort erscheinen. Herausgeber ist der
                  Bundesanzeiger Verlag, der 2006 privatisiert wurde. Er gehört
                  zur Dumont-Verlagsgruppe.
                </p>
              </div>
              <div className="column">
                <div className="has-text-centered">
                  <i className="is-primary-color fas fa-euro-sign fa-3x" />
                  <h3 className="subtitle">Der Bundesanzeiger Verlag</h3>
                </div>
                <br />
                <p>
                  Der Verlag erhebt Urheberrecht auf die Datenbank der
                  Gesetzblätter. Diese sind zwar{' '}
                  <a className="highlight" href="https://www.bgbl.de/">
                    online einzeln einsehbar
                  </a>
                  , aber können nicht gedruckt, durchsucht oder kopiert werden.
                  Der Bundesanzeiger Verlag verbietet die Weiterverwendung. Wer
                  die Gesetzblätter des Staates nutzen will, muss dem privaten
                  Verlag Abo-Gebühren zahlen.
                </p>
              </div>
              <div className="column">
                <div className="has-text-centered">
                  <i className="is-primary-color fas fa-balance-scale fa-3x" />
                  <h3 className="subtitle">Offene Gesetze</h3>
                </div>
                <br />
                <p>
                  Zentrale Dokumente der Demokratie müssen offen für alle
                  bereitstehen. Das Urheberrecht darf der Demokratie nicht im
                  Wege stehen. Deswegen stellen wir auf dieser Seite sämtliche
                  Bundesgesetzblätter seit 1949 frei, offen und kostenlos zur
                  Verfügung.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-action">
          <div className="container">
            <div className="columns is-desktop content is-medium">
              <div className="column">
                <h3 style={{ color: 'white' }}>
                  Alle Gesetzesblätter auf einer Website.
                  <br />
                  Kostenlos, digital, offen.
                </h3>
              </div>
              <div className="column">
                <Link href="/veroeffentlichung">
                  <a
                    className="button is-primary is-inverted is-outlined is-large"
                    href="/veroeffentlichung"
                    style={{ marginRight: '1rem', marginBottom: '1rem' }}
                  >
                    Gesetze entdecken
                  </a>
                </Link>
                <button
                  className="button is-primary is-inverted is-outlined is-large"
                  onClick={() => {
                    this.setState({ more: false });
                    document
                      .getElementById('scroll-to-information')
                      .scrollIntoView({ block: 'start', behavior: 'smooth' });
                  }}
                >
                  Mehr erfahren
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-comparison">
          <div className="container" id="price">
            <PricingTable />
          </div>
        </div>
        <div className="section section-action" id="information">
          <div className="container">
            <div className="columns is-desktop content is-medium">
              <div className="column">
                <div
                  id="scroll-to-information"
                  style={{ position: 'absolute', top: -100, left: 0 }}
                />
                <h4>
                  <i className="fas fa-info" style={{ marginRight: '1rem' }} />{' '}
                  Hintergrund
                </h4>
                <p>
                  Im Jahr 2006 wurde der staatliche Bundesanzeiger Verlag
                  privatisiert. In einem umstrittenen Verfahren sicherte sich
                  der Dumont-Verlag das Unternehmen und damit die
                  Veröffentlichung aller Gesetze im Bundesgesetzblatt.{' '}
                  {this.state.more && (
                    <a
                      className="highlight"
                      onClick={() => this.setState({ more: false })}
                    >
                      Mehr lesen.
                    </a>
                  )}{' '}
                  {!this.state.more && (
                    <span>
                      Seither erhielt der Verlag ohne Ausschreibung auch den
                      Auftrag zum Betrieb von anderen staatlichen Plattformen,{' '}
                      <a
                        className="highlight"
                        href="https://www.stern.de/politik/deutschland/tillack/das-neue-transparenzregister-ist-selbst-wenig-transparent-7929378.html"
                      >
                        zum Beispiel des Transparenzregisters.
                      </a>{' '}
                      Der Vertrieb des Bundesgesetzblatts ist für den
                      Bundesanzeiger Verlag lukrativ. Er verlangt für
                      grundlegende Funktionen, zum Beispiel die Durchsuchbarkeit
                      oder das Drucken von Gesetzblättern, Gebühren.
                      <br />
                      <br />
                    </span>
                  )}
                </p>
                {!this.state.more && (
                  <div>
                    <h4>
                      <i
                        className="fas fa-eye-slash"
                        style={{ marginRight: '1rem' }}
                      />
                      Intransparenz
                    </h4>
                    <p>
                      Die genauen Bedingungen der Kooperation des Bundes mit dem
                      privatem Verlag{' '}
                      <a
                        className="highlight"
                        href="https://fragdenstaat.de/anfrage/vereinbarungen-mit-bundesanzeiger-verlag/"
                      >
                        hält das zuständige Justizministerium geheim
                      </a>
                      . Die Begründung: Betriebs- und Geschäftsgeheimnisse des
                      Bundesanzeiger Verlags. Den Kooperationsvertrag zum
                      Vertrieb des Bundesgesetzblatts{' '}
                      <a
                        className="highlight"
                        href="https://fragdenstaat.de/anfrage/vereinbarungen-mit-bundesanzeiger-verlag/109774/anhang/bmjv-bundesanzeiger-verlag.pdf"
                      >
                        {' '}
                        schwärzte das Ministerium auf Betreiben des Verlags.
                      </a>
                      <br />
                      <br />
                    </p>
                  </div>
                )}
                {!this.state.more && (
                  <div>
                    <br />
                    <h4>
                      <i
                        className="fas fa-bullhorn"
                        style={{ marginRight: '1rem' }}
                      />
                      Forderungen
                    </h4>
                    <p>
                      Alle Gesetzblätter sind jetzt auf{' '}
                      <a href="/">OffeneGesetze.de</a> frei zugänglich. Das
                      Grundproblem aber bleibt: Der Gesetzgeber muss dafür
                      sorgen, dass private Verlage nicht Rechte an staatlichen
                      Dokumente beanspruchen dürfen. Amtliche Dokumente müssen
                      kostenfrei und uneingeschränkt online für die
                      Öffentlichkeit zugänglich sein. Monopolisten dürfen nicht
                      für den Zugang zu staatlichen Daten zur Kasse bitten! Das
                      Urheberrecht muss geändert werden, damit zentrale
                      Dokumente der Demokratie offen bereitstehen!
                    </p>
                    <br />
                    <p>
                      Weitere Informationen zu OffeneGesetze.de finden Sie in
                      Artikeln der{' '}
                      <a
                        className="highlight"
                        href="https://www.sueddeutsche.de/digital/offene-daten-aktivisten-stellen-alle-bundesgesetzblaetter-ins-netz-1.4246682"
                      >
                        Süddeutschen Zeitung
                      </a>
                      ,{' '}
                      <a
                        className="highlight"
                        href="https://netzpolitik.org/2018/offenegesetze-bundesgesetzblaetter-erstmals-frei-zugaenglich/"
                      >
                        Netzpolitik.org
                      </a>
                      ,{' '}
                      <a
                        className="highlight"
                        href="https://www.lto.de/recht/hintergruende/h/offene-gesetze-inhalt-bundesgesetzblatt-datenbankschutz-urheberrecht/"
                      >
                        LTO.de
                      </a>{' '}
                      und in einem Radio-Interview mit{' '}
                      <a
                        className="highlight"
                        href="https://detektor.fm/politik/frag-den-staat-offene-gesetze"
                      >
                        detektor.fm
                      </a>
                      .
                    </p>
                    <br />
                    <h4>
                      <i
                        className="fas fa-bell"
                        style={{ marginRight: '1rem' }}
                      />
                      Updates
                    </h4>
                    <p>
                      <div className="marquee">
                        10.12.2018: Launch von OffeneGesetze.de
                        <br />
                        23.12.2018, FAZ:{' '}
                        <a
                          className="highlight"
                          href="https://www.faz.net/aktuell/wirtschaft/diginomics/justizministerin-barley-nimmt-dumont-verlag-das-gesetzblatt-weg-15957231.html?GEPC=s3"
                        >
                          "Barley nimmt Dumont-Verlag das Gesetzblatt weg"
                        </a>
                      </div>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="section section-process">
          <div className="container content is-normal">
            <div className="columns is-tablet">
              <div className="column is-full">
                <h2>Wie tritt ein Gesetz in Kraft?</h2>
              </div>
            </div>

            <div className="columns is-tablet">
              <div className="column is-half">
                <h3>1. Gesetzgebungs&shy;initiative</h3>
              </div>
              <div className="column is-half">
                Die Bundesregierung, der Bundestag oder der Bundesrat starten
                eine Initiative für ein neues Gesetz.
              </div>
            </div>
            <div className="columns is-tablet">
              <div className="column is-half">
                <h3>2. Beratung und Zustimmung</h3>
              </div>
              <div className="column is-half">
                Der Bundestag und der Bundesrat beraten über den Gesetzentwurf
                und verabschieden ihn, meist mit Änderungen.
              </div>
            </div>
            <div className="columns is-tablet">
              <div className="column is-half">
                <h3>3. Gegen&shy;zeichnung</h3>
              </div>
              <div className="column is-half">
                Die Bundesregierung zeichnet den Gesetzentwurf gegen.
              </div>
            </div>
            <div className="columns is-tablet">
              <div className="column is-half">
                <h3>4. Ausfertigung</h3>
              </div>
              <div className="column is-half">
                Der Bundespräsident fertigt das Gesetz aus und unterzeichnet es.
              </div>
            </div>
            <div className="columns is-tablet">
              <div className="column is-half">
                <h3>5. Verkündung</h3>
              </div>
              <div className="column is-half">
                Das Gesetz wird im Bundesgesetzblatt verkündet. Der zuständige
                Bundesanzeiger Verlag ist ein privater Verlag. Er verbietet die
                Weiterverwendung der Gesetzesblätter online.
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container content is-normal">
            <h3 className="is-size-3 has-text-center">
              Bedeutende <wbr />
              Veröffentlichungen
            </h3>
            <Substantials highlight />

            <Link href="/veroeffentlichung#bedeutende">
              <a
                href="/veroeffentlichung#bedeutende"
                className="button is-primary"
              >
                Mehr bedeutende Veröffentlichungen
              </a>
            </Link>
          </div>
        </div>
        <Recent items={items} />
      </BaseIndex>
    );
  }
}

IndexPage.getInitialProps = async () => {
  try {
    const res = await fetch(
      'https://api.offenegesetze.de/v1/veroeffentlichung/'
    );
    const json = await res.json();
    return {
      items: json.results.slice(0, 5),
    };
  } catch (error) {
    console.log(error);
    return { items: [] };
  }
};

export default IndexPage;
