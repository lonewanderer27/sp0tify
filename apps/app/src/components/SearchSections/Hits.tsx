import { IonLabel, IonList, IonListHeader } from "@ionic/react";

import Hit from "./Hit";
import { Section } from "../../models/search/all";
import { titleCase } from "../../utils";

function Hits(props: { section: Section }) {
  return (
    <IonList className={`${props.section.hits?.length! == 0 && "hidden"}`}>
      <IonListHeader className="hidden lg:block">
        <IonLabel className="text-2xl font-bold">
          {titleCase(props.section.type!)}s
        </IonLabel>
      </IonListHeader>
      {props.section?.hits?.map((hit, index) => (
        <Hit key={hit.type + "" + index} hit={hit} />
      ))}
    </IonList>
  );
}

export default Hits;
