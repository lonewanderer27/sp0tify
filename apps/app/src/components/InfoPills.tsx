import { IonAvatar, IonChip, IonLabel, useIonRouter } from "@ionic/react";

import { Album } from "../models/song";

function InfoPills(props: {
  date?: string;
  songCount?: number;
  album?: Album;
}) {
  const r = useIonRouter()

  return (
    <>
      <IonChip>
        <IonLabel>Released: {props?.date}</IonLabel>
      </IonChip>
      {props.album && (
        <IonChip onClick={() => r.push(`/album/${props.album?.id}?url=${props.album?.url}`)}>
          <IonAvatar>
            <img src={props?.album?.cover_art_url} />
          </IonAvatar>
          <IonLabel>Album: {props?.album?.name}</IonLabel>
        </IonChip>
      )}
      {props.songCount && (
        <IonChip>
          <IonLabel>{props?.songCount} songs</IonLabel>
        </IonChip>
      )}
    </>
  );
}

export default InfoPills;
