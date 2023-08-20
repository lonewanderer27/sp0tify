import { HitType, Section } from "../../models/search/all";

import Hits from "./Hits";
import TopHits from "./TopHits";

function SearchSections(props: { sections?: Section[] }) {
  return (
    <>
      {props.sections
        ?.filter((i) => i.type == HitType.top_hit)
        .map((section, index) => (
          <TopHits section={section} />
        ))}
      {props.sections
        ?.filter((i) => i.type !== HitType.top_hit)
        .map((section, index) => (
          <Hits key={section.type + "" + index} section={section} />
        ))}
    </>
  );
}

export default SearchSections;
