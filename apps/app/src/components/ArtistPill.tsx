import { IonAvatar, IonChip, IonLabel } from "@ionic/react";

function AuthorChip(props: {
  name?: string,
  avatar?: string,
}) {
  return (
    <IonChip>
      <IonAvatar>
        <img src={props?.avatar} />
      </IonAvatar>
      <IonLabel>{props?.name}</IonLabel>
    </IonChip>
  )
}

export default AuthorChip;