import React from 'react';

import BaseContent from '../components/layout/base-content';

const articlesLaunch = [
  'https://www.sueddeutsche.de/digital/offene-daten-aktivisten-stellen-alle-bundesgesetzblaetter-ins-netz-1.4246682',
  'https://netzpolitik.org/2018/offenegesetze-bundesgesetzblaetter-erstmals-frei-zugaenglich/',
  'https://www.lto.de/recht/hintergruende/h/offene-gesetze-inhalt-bundesgesetzblatt-datenbankschutz-urheberrecht/',
  'https://www.deutschlandfunkkultur.de/stiftung-veroeffentlicht-alle-bundesgesetze.265.de.html?drn:news_id=954611',
  'https://www.handelsblatt.com/dpa/wirtschaft-handel-und-finanzen-streit-um-urheberrecht-stiftung-veroeffentlicht-alle-bundesgesetze/23740910.html',
  'https://www.golem.de/news/open-data-okfn-befreit-bundesgesetzblaetter-1812-138167.html',
  'https://www.heise.de/newsticker/meldung/Urheberrecht-Open-Knowledge-Foundation-veroeffentlicht-alle-Bundesgesetze-4246696.html',
  'https://www.t-online.de/digital/id_84923282/open-knowledge-foundation-veroeffentlicht-alle-bundesgesetze.html',
  'https://www.chip.de/news/Neue-Plattform-veroeffentlicht-alle-neuen-Gesetze-Darum-machen-sich-die-Betreiber-damit-strafbar_155078480.html',
  'https://www.lawblog.de/index.php/archives/2018/12/10/bundesgesetzblatt-fuer-alle/',
  'https://blog.fefe.de/?ts=a2f0bcc2',
  'https://www.mydealz.de/deals/bundesgesetze-kostenlos-im-vollzugriff-1294111',
  'https://www.reddit.com/r/de/duplicates/a4v44e/offene_daten_aktivisten_stellen_alle/',
  'https://rivva.de/300714106',
  'https://www.die-stiftung.de/nachrichten-service/kurzmeldungen/open-knowledge-foundation-veroeffentlicht-alle-bundesgesetze-81135/',
  'https://www.saarbruecker-zeitung.de/sz-spezial/internet/stiftung-veroeffentlicht-alle-bundesgesetze-frei-zugaenglich-im-internet_aid-35037183',
  'https://www.pfaelzischer-merkur.de/ratgeber/stiftung-veroeffentlicht-alle-bundesgesetze-frei-zugaenglich-im-internet_aid-35039221',
  'http://www.digitalfernsehen.de/Urheberrechtsstreit-Stiftung-veroeffentlicht-alle-Bundesgesetze.172755.0.html',
  'https://www.finanzen.net/nachricht/aktien/wdh-streit-um-urheberrecht-stiftung-veroeffentlicht-alle-bundesgesetze-6921724',
  'https://osterreich-nachrichten.eu/nachrichten/streit-um-urheberrecht-stiftung-veroffentlicht-alle-bundesgesetze',
  'https://www.judid.de/bundesgesetzblatt-open-data-aktivisten-provozieren-dumont-verlagsgruppe/',
  'https://beck-online.beck.de/Dokument?vpath=bibdata%2Freddok%2Fbecklink%2F2011697.htm',
  'https://einspruch.faz.net/recht-und-steuern/2018-12-12/06d0a3c13ff477193ed599fd21a5ad9a/',
  'https://blogs.faz.net/einspruch/2018/12/12/wie-weiter-mit-may-428/',
  'http://www.urheberrecht.org/news/6141/',
  'https://www.wbs-law.de/urheberrecht/stiftung-stellt-bundesgesetzblatt-online-ist-das-erlaubt-78954/',
  'https://www.krz.de/Startseite/OffeneGesetze-de.php?object=tx,2669.73&ModID=7&FID=2669.909.1&NavID=2669.67&NavID=2669.3',
];

const articlesXmas = [
  'https://www.faz.net/aktuell/wirtschaft/diginomics/justizministerin-barley-nimmt-dumont-verlag-das-gesetzblatt-weg-15957231.html?GEPC=s3',
  'https://www.bild.de/politik/inland/politik-inland/justizministerin-barley-schafft-bezahl-gesetzblatt-ab-bald-alles-kostenfrei-onli-59203758.bild.html',
  'http://www.turi2.de/aktuell/faz-dumont-verliert-den-druckauftrag-fuer-das-bundesgesetzblatt/',
  'https://www.heise.de/newsticker/meldung/Elektronische-Gesetze-Offenes-Buergerportal-soll-Bundesgesetzblatt-abloesen-4259011.html',
  'https://www.golem.de/news/bundesjustizministerin-barley-gesetze-sollen-digital-wirksam-werden-1812-138393.html',
  'https://www.zdf.de/nachrichten/heute/zugriff-auf-gesetzestexte-barley-fuer-bessere-handhabung-100.html',
  'https://www.zeit.de/news/2018-12/23/buerger-sollen-leichter-digital-auf-gesetze-zugreifen-koennen-181223-99-334216',
  'https://blog.fefe.de/?ts=a2dfc1b3',
  'https://www.lto.de/recht/presseschau/p/2018-12-24-digitales-bgbl-gewerkschaftsmitglieder-ss-mann/',
];

const Presse = () => (
  <BaseContent>
    <h1 className="title">Presse</h1>
    <p>
      Presseanfragen bitte an Arne Semsrott, info@offenegesetze.de, Telefon: 030
      57703666 0
    </p>
    <h2>Pressemittelung</h2>
    <h3>
      OffeneGesetze - zentrale Dokumente der Demokratie erstmals frei zugänglich
    </h3>
    <p>
      Berlin, 10.12.2018 - Die Bundesgesetzblätter sind die zentralen Dokumente
      der deutschen Demokratie. Unter OffeneGesetze.de sind sie jetzt erstmals
      frei zugänglich. Auf dem Portal stellt die gemeinnützige Open Knowledge
      Foundation Deutschland die Dokumente kostenfrei und zur freien
      Weiterverwendung bereit.
    </p>
    <p>
      Bisher sind Bundesgesetzblätter nur über die Website bgbl.de des
      Bundesanzeiger Verlags verfügbar. Der private Verlag verlangt für
      grundlegende Funktionen, zum Beispiel die Durchsuchbarkeit oder das
      Drucken von Gesetzblättern, Abogebühren. Eine Weiterverwendung der
      Dokumente untersagt der Verlag mit Verweis auf das Urheberrecht.{' '}
    </p>
    <p>
      Arne Semsrott, Projektleiter Open Knowledge Foundation Deutschland: “Das
      Urheberrecht darf der Demokratie nicht im Wege stehen. Daten und Dokumente
      des Staates müssen frei für alle Menschen zugänglich sein. Wenn das
      Justizministerium nicht dafür sorgt, muss eben die Zivilgesellschaft
      einspringen.”
    </p>
    <p>
      Der vormals staatliche Bundesanzeiger Verlag wurde 2006 privatisiert. In
      einem umstrittenen Verfahren sicherte sich der Dumont-Verlag das
      Unternehmen. Die genauen Bedingungen der Kooperation des Bundes mit dem
      Verlag hält das zuständige Justizministerium geheim. Neben dem Vertrieb
      des Bundesgesetzblatts erhielt der Verlag ohne Ausschreibung auch den
      Auftrag zum Betrieb von anderen staatlichen Plattformen, zum Beispiel dem
      Transparenzregister.
    </p>
    <p>
      Durch die Funktionen von OffeneGesetze.de, etwa den Gesamt-Download aller
      Bundesgesetzblätter seit 1949, wird es erstmals möglich, den Textbestand
      der Gesetzblätter zu analysieren und Veränderungen in Gesetzen der letzten
      Jahrzehnte nachzuvollziehen. Außerdem können anders als bisher einzelne
      Dokumente verlinkt und durchsucht werden. Auf der offiziellen Seite des
      Bundesanzeiger Verlags ist hingegen zum Beispiel das erste
      Bundesgesetzblatt, die Verkündung des Grundgesetzes 1949, nur als schiefer
      Bilderscan vorhanden.
    </p>
    <h2>Presse-Artikel über uns</h2>
    <h3>OffeneGesetze.de Launch: 10.12.2018</h3>
    {articlesLaunch.map((x) => (
      <p>
        <a href={x}>{x}</a>
      </p>
    ))}
    <h3>BMJV will eigene Plattform: 23.12.2018</h3>
    {articlesXmas.map((x) => (
      <p>
        <a href={x}>{x}</a>
      </p>
    ))}
  </BaseContent>
);

export default Presse;
