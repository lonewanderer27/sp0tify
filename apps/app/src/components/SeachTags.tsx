import { IonChip } from "@ionic/react";
import { Section } from "../models/search/all";
import { titleCase } from "../utils";

function SearchTags(props: {
  sections?: Section[]
}) {
  return (
    <div className="ion-padding">
      {props.sections?.filter(i => i.hits?.length! > 0).map((section, index) => (
        <IonChip key={section.type}>
          {titleCase(section.type!)}s
        </IonChip>
      ))}
    </div>
  )
}

export default SearchTags;