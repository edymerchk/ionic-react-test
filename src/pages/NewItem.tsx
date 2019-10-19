import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
  IonIcon
} from '@ionic/react';

import React from 'react';

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    <IonItem>
      <IonInput placeholder="Your Idea"></IonInput>
    </IonItem >
      <IonButton  expand="block">
        Save!
      </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default NewItem;
