import React from "react";
import Head from "next/head";
import Link from "next/link";

// Globale Komponenten
import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Footer from "../../../components/Footer/Footer";
import ContactSection from "../../../components/ContactSection/ContactSection";

// Die neue Layout-Komponente für Unterseiten
import StrafrechtSubPageLayout from "../../../components/StrafrechtSubPageLayout/StrafrechtSubPageLayout";

const BetaeubungsmittelPage = () => {
  return (
    <>
      <Head>
        <title>Betäubungsmittelstrafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Spezialisierte Verteidigung im Betäubungsmittelstrafrecht. Wir beraten Sie bei Drogenbesitz, -handel und allen relevanten Delikten nach dem BtMG."
        />
      </Head>

      <Header />

      <PageHeader title="Betäubungsmittelstrafrecht" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Wir verteidigen Sie bei Delikten nach dem Betäubungsmittelgesetz
            (BtMG). Nehmen Sie frühzeitig Kontakt zu uns auf, um Ihre
            Verteidigungsstrategie zu entwickeln.
          </p>
          <p>
            In der täglichen Praxis der Kanzlei Korff Rechtsanwälte in München
            nimmt das Betäubungsmittelstrafrecht einen hohen Stellenwert ein.
            Wenn unerlaubte Substanzen nach dem Betäubungsmittelgesetz in den
            Umlauf gebracht oder verwendet werden, ist das Drogenstrafrecht
            einschlägig. Für Laien ist dabei meist nicht erkennbar, wann eine
            Straftat vorliegt. In solchen Fällen kann lediglich ein kompetenter
            Anwalt seinen Mandanten vor einer drohenden Ahndung bewahren.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Was gilt als Betäubungsmittel?
          </h3>
          <p>
            Die in der Strafverteidigung wichtigsten Betäubungsmittel sind
            natürliche Substanzen wie Cannabis, Marihuana, THC, Opium, Kokain
            und Pilze, sowie künstliche Substanzen wie Heroin, LSD, Amphetamine,
            MDMA, MDA, MDE und Ecstasy. Die strafrechtlich relevanten Substanzen
            sind in den Anlagen 1 bis 3 des Betäubungsmittelgesetzes (BtMG)
            aufgeführt. Schon der bloße Besitz ist grundsätzlich strafbar.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Strafbare Handlungen nach dem BtMG
          </h3>
          <p>
            Das BtMG listet eine Vielzahl von strafbaren Handlungsvarianten auf.
            Zu den bekanntesten gehören neben dem Besitz auch der Erwerb, das
            (gewerbsmäßige) Handeltreiben und das sogenannte bewaffnete
            Handeltreiben, für das empfindliche Strafen drohen können. Nach §
            30a Abs. 2 Ziff. 2 BtMG etwa wird demjenigen, der mit einer nicht
            geringen Menge Drogen handelt und dabei eine Waffe mit sich führt,
            eine Mindeststrafe von fünf Jahren angedroht.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Verteidigungsmöglichkeiten und Mengenbegriffe
          </h3>
          <p>
            Neben der Möglichkeit einer Verfahrenseinstellung bei geringen
            Verstößen (insbesondere bei Eigenkonsum „weicher Drogen“), ist die
            genaue Kenntnis der unterschiedlichen Mengenbegriffe nach dem BtMG
            entscheidend. Es gibt die „geringe Menge“, die „normale“ Menge und
            die „nicht geringe Menge“. Die Einordnung hat einen großen Einfluss
            darauf, ob ein Vergehen oder ein Verbrechen vorliegt. Beispielsweise
            droht § 29a Abs. 1 Ziff. 2 BtMG für den Besitz von Betäubungsmitteln
            in nicht geringer Menge eine Mindestfreiheitsstrafe von einem Jahr
            an. Bei Marihuana liegt die „nicht geringe Menge“ bei 7,5 Gramm
            reinem THC. Bei einem Wirkstoffgehalt von 10% kann der Besitz von
            bereits 75 Gramm Marihuana zu einem Strafrahmen von mindestens einem
            Jahr führen.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Der Sonderfall § 31 BtMG: Die Kronzeugenregelung
          </h3>
          <p>
            § 31 BtMG ist eine der wenigen Kronzeugenregelungen im deutschen
            Strafrecht. Das Gericht kann von einer Bestrafung absehen oder die
            Strafe mildern, wenn der Täter durch seine Angaben zur Aufdeckung
            einer im Zusammenhang stehenden Tat beiträgt oder durch rechtzeitige
            Preisgabe seiner Kenntnisse die Verhinderung einer solchen
            ermöglicht. Diese Angaben müssen bis spätestens zur Eröffnung des
            Hauptverfahrens gemacht werden. Wer also Wissen über Mittäter oder
            Hinterleute preisgibt, die zur Aufklärung von Straftaten führt, wird
            milder oder gar nicht bestraft.
          </p>

          <p className="mt-8 font-semibold">
            Die Kenntnis der jeweiligen Mengen nach dem BtMG ist ein
            unerlässlicher Bestandteil einer erfolgreichen Verteidigung. Nehmen
            Sie daher frühzeitig{" "}
            <Link
              href="/kontakt"
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Kontakt
            </Link>{" "}
            mit uns auf, um von Anfang an auf das Ermittlungsverfahren Einfluss
            nehmen zu können.
          </p>
        </div>
      </StrafrechtSubPageLayout>

      <ContactSection />
      <Footer />
    </>
  );
};

export default BetaeubungsmittelPage;
