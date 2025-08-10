import React from "react";
import Head from "next/head";
import Link from "next/link";

// Importieren der globalen Layout-Komponente
import Layout from "../../components/Layout/Layout";

// Importieren der spezifischen Layout-Komponente für Strafrecht-Unterseiten
import StrafrechtSubPageLayout from "../../components/StrafrechtSubPageLayout/StrafrechtSubPageLayout";

const SexualstrafrechtPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sexualstrafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Spezialisierte Verteidigung im Sexualstrafrecht. Absolute Diskretion und professionelle Beratung bei sensiblen Vorwürfen."
        />
      </Head>

      {/* Die StrafrechtSubPageLayout-Komponente umschließt den gesamten Seiteninhalt.
          Sie kümmert sich um das Rendering von PageHeader, der Seitennavigation und der ContactSection.
          Der Titel wird vom Layout-Component selbst ermittelt. */}
      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Als Beschuldigter einer Sexualstraftat steht man regelmäßig nicht
            nur staatsanwaltschaftlichen Ermittlungen, sondern auch raschen
            Vorverurteilungen gegenüber. Eine diskrete und professionelle
            Verteidigung ist hierbei von höchster Wichtigkeit.
          </p>
          <p>
            Da das Bekanntwerden derartiger Vorwürfe die soziale Existenz des
            Betroffenen nachhaltig zerstören kann, legen wir größten Wert auf
            eine absolut anonyme Behandlung des Falles, die weit über die
            Wahrung des Mandatsgeheimnisses hinausgeht. Auch der Umgang mit
            inhaftierten Mandanten in diesem Bereich wird unter größter
            Beachtung dessen behandelt, dass der entsprechende Vorwurf nicht
            publik wird, da in Justizvollzugsanstalten nicht nur das Problem
            sozialer Ächtung besteht, sondern vor allem die körperliche
            Integrität des Beschuldigten im Vordergrund steht.
          </p>
          <p>
            Gerade in Verteidigungen im Bereich des Sexualstrafrechts ist darauf
            zu achten, dass sie frei von Vorurteilen geführt wird und dass die
            <strong>Unschuldsvermutung</strong> gemäß Artikel 6 Abs. 2 EMRK
            nicht aus den Augen verloren wird. Aufgrund medialer
            Berichterstattung gewinnt man oft den Eindruck, dass die
            Unschuldsvermutung in derartigen Verfahren nicht mehr gilt.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Wir verteidigen Sie unter anderem gegen folgende Vorwürfe:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Sexueller Missbrauch von Schutzbefohlenen (§ 174 StGB)</li>
            <li>
              Sexueller Missbrauch unter Ausnutzung eines Beratungs-,
              Behandlungs- oder Betreuungsverhältnisses (§ 174c StGB)
            </li>
            <li>
              Sexueller Missbrauch unter Ausnutzung der Amtsstellung (§ 174b
              StGB)
            </li>
            <li>Sexueller Missbrauch von Kindern (§ 176 StGB)</li>
            <li>Schwerer sexueller Missbrauch von Kindern (§ 176a StGB)</li>
            <li>Sexuelle Nötigung, sexueller Übergriff (§ 177 Abs. 1 StGB)</li>
            <li>Vergewaltigung (§ 177 Abs. 2 Ziff. 1 StGB)</li>
            <li>
              Sexueller Missbrauch widerstandsunfähiger Personen (§ 179 StGB)
            </li>
            <li>Sexueller Missbrauch von Jugendlichen (§ 182 StGB)</li>
            <li>Exhibitionistische Handlungen (§ 183 StGB)</li>
            <li>Erregung öffentlichen Ärgernisses (§ 183a StGB)</li>
            <li>Verbreitung pornographischer Schriften (§ 184 StGB)</li>
            <li>
              Verbreitung gewalt- oder tierpornographischer Inhalte (§ 184a
              StGB)
            </li>
            <li>
              Verbreitung, Erwerb und Besitz von Kinderpornografie (§ 184b StGB)
            </li>
            <li>
              Verbreitung, Erwerb und Besitz von Jugendpornografie (§ 184c StGB)
            </li>
            <li>Ausübung der verbotenen Prostitution (§ 184f StGB)</li>
            <li>Sexuelle Belästigung (§ 184i StGB)</li>
            <li>
              Verletzung des Intimbereichs durch Bildaufnahmen (§184k StGB)
            </li>
          </ul>

          <p className="mt-8 font-semibold">
            Bei Fragen zum Thema Sexualstrafrecht können Sie gerne jederzeit{" "}
            <Link
              href="/kontakt"
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Kontakt
            </Link>{" "}
            mit uns aufnehmen.
          </p>
        </div>
      </StrafrechtSubPageLayout>
    </Layout>
  );
};

export default SexualstrafrechtPage;
