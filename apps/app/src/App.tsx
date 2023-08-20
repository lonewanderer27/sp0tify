/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
/* Theme variables */
import "./theme/variables.css";
/* Global CSS */
import "./theme/index.css";

import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { bookmarks, ellipse, glasses, home, library, search, square, triangle } from "ionicons/icons";

import Activity from "./pages/Activity";
import AlbumPage from "./pages/AlbumPage";
import Home from "./pages/Home";
import { IonReactRouter } from "@ionic/react-router";
import Library from "./pages/Library";
import Search from "./pages/Search";
import SidebarMenu from "./components/Sidebar";
import SongPage from "./pages/SongPage";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane when="md" contentId="main">
        <SidebarMenu/>
        <IonContent id="main">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/search">
                <Search />
              </Route>
              <Route path="/library">
                <Library />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/song/:id">
                <SongPage/>
              </Route>
              <Route exact path="/album/:id">
                <AlbumPage/>
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom" className="lg:hidden">
              <IonTabButton tab="tab1" href="/home">
                <IonIcon aria-hidden="true" icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/search">
                <IonIcon aria-hidden="true" icon={search} />
                <IonLabel>Search</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/library">
                <IonIcon aria-hidden="true" icon={library} />
                <IonLabel>Your Library</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonContent>
        {/* <Activity/> */}
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
