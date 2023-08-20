import { Hit as HitProps, HitType } from "../../models/search/all";
import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonItem,
  IonLabel,
} from "@ionic/react";

import { titleCase } from "../../utils";
import { useIonRouter } from "@ionic/react";

function Hit(props: {
  hit: HitProps;
  card?: boolean;
  landscape?: boolean;
  showLyric?: boolean;
}) {
  const h = useIonRouter();

  const routerLink = () => {
    switch (props.hit.type) {
      case HitType.article:
        return `article/${props.hit?.result?.url}`;
      case HitType.user:
        return `user/${props.hit?.result?.id}`;
      case HitType.album:
        return `album/${props.hit?.result?.id}?url=${props.hit.result?.url}`;
      case HitType.song:
        return `song/${props.hit?.result?.id}?url=${props.hit.result?.url}`;
      default:
        return `${props.hit.result}/${props.hit?.result?.id}?url=${props.hit.result?.url}`;
    }
  };

  const image = () => {
    switch (props.hit.type) {
      case HitType.song:
        return (
          <img
            src={props.hit.result?.header_image_url!}
            className={props.showLyric ? "float-left max-h-36" : ""}
          />
        );
      case HitType.album:
        return (
          <img
            src={props.hit.result?.cover_art_thumbnail_url!}
            className={props.showLyric ? "float-left max-h-36" : ""}
          />
        );
      case HitType.video:
        return (
          <img
            src={props.hit.result?.poster_url!}
            className={props.showLyric ? "float-left max-h-36" : ""}
          />
        );
      case HitType.article:
        return (
          <img
            src={props.hit.result?.preview_image!}
            className={props.showLyric ? "float-left max-h-36" : ""}
          />
        );
      case HitType.user:
        return (
          <img
            src={props.hit.result?.avatar?.thumb?.url}
            className={props.showLyric ? "float-left" : ""}
          />
        );
      default:
        return (
          <img
            src={props.hit.result?.image_url!}
            className={props.showLyric ? "float-left" : ""}
          />
        );
    }
  };

  const label = () => {
    switch (props.hit.type) {
      case HitType.song:
        return props.hit.result?.title;
      case HitType.artist:
        return props.hit.result?.name;
      case HitType.album:
        return props.hit.result?.name;
      case HitType.user:
        return props.hit.result?.name;
      default:
        return props.hit.result?.title;
    }
  };

  const author = () => {
    switch (props.hit.type) {
      case HitType.song:
        return props.hit.result?.primary_artist?.name;
      case HitType.artist:
        return props.hit.result?.name;
      case HitType.album:
        return props.hit.result?.artist?.name;
      case HitType.video:
        return props.hit.result?.author?.name;
      case HitType.article:
        return props.hit.result?.author_list_for_display;
      case HitType.user:
        return props.hit.result?.human_readable_role_for_display;
      default:
        return props.hit.result?.primary_artist?.name;
    }
  };

  if (props.card) {
    return (
      <IonCard routerLink={routerLink()} className="mx-0">
        {image()}
        <IonCardHeader>
          <IonCardTitle>
            <span className="line-clamp-1 font-bold">{label()}</span>
          </IonCardTitle>
          <IonCardSubtitle>
            <span className="font-bold">{author()} {"       "}</span>
            <IonChip>
              <IonLabel>{titleCase(props.hit.type!)}</IonLabel>
            </IonChip>
          </IonCardSubtitle>
        </IonCardHeader>
        {props.showLyric && (
          <>
            <IonCardContent>
              {props.hit.highlights?.map((highlight) => (
                <span className="text-slate-300 ion-padding">
                  {highlight.value}...
                </span>
              ))}
            </IonCardContent>
          </>
        )}
      </IonCard>
    );
  }

  return (
    <IonItem routerLink={routerLink()}>
      <IonAvatar slot="start">{image()}</IonAvatar>
      <div className="flex flex-col">
        <IonLabel>{label()}</IonLabel>
        <span className="text-sm text-slate-300">
          {`${titleCase(props.hit.type!)} ・ `}
          {author()}
        </span>
      </div>
    </IonItem>
  );
}

export default Hit;
