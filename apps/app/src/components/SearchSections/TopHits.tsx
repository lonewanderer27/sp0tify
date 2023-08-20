import { IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";

import Hit from "./Hit";
import { Section } from "../../models/search/all";

function TopHits(props: { section: Section }) {
  const topHit = props.section.hits?.slice(0, 1)[0];

  return (
    <IonGrid className="ion-padding">
      <IonRow>
        <h1 className="text-3xl font-bold">Top Hits</h1>
      </IonRow>
      <IonRow>
        {props.section.hits?.slice(0, 2).map((hit, index) => (
          <IonCol size="12" sizeLg="6" className="p-0 lg:p-2">
            <Hit hit={hit} card showLyric landscape />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
}

export default TopHits;
