/**
 * RoutersList.tsx
 * Author: Wenlei Cai
 * Date: 2024-04-27
 * Description: RoutersList component for the application
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContentPage from "../pages/MainContentPage.tsx";
import InstallationPage from "../pages/InstallationAndUpgrade/InstallationContentPage.tsx";
import UpgradeFrom2xPage from "../pages/InstallationAndUpgrade/UpgradeFrom2xPage.tsx";
import GetStartedContentPage from "../pages/GetStarted/GetStartedContentpage.tsx";
import ComingSoonPage from "../pages/ComingSoonPage.tsx";
import TrackingScenario3DPage from "../pages/3DTrackingScenarios/TrackingScenario3DPage.tsx";
import TopDownGamesAnd2DPage from "../pages/2DAndTopDown/TopDownGamesAnd2DPage.tsx";
import ConstrainCameraToPathPage from "../pages/ConstrainCameraToPath/ConstrainCameraToPathPage.tsx";
import ApplyNoiseSimulationPage from "../pages/ApplyNoiseSimulation/ApplyNoiseSimulationPage.tsx";
import ManageGroupedCamerasPage from "../pages/ManageGroupedCameras/ManageGroupedCamerasPage.tsx";
import AvoidCollisionsAndEvaluateShotsPage from "../pages/AvoidCollisions/AvoidCollisionsAndEvaluateShots.tsx";
import CinemachineEventsPage from "../pages/CinemachineEvents/CinemachineEventsPage.tsx";
import CinemachineImpulsePage from "../pages/CinemachineImpulse/CinemachineImpulsePage.tsx";
import SplitScreenMultipleCamerasPage from "../pages/SplitScreen/SplitScreenMultipleCamerasPage.tsx";
import UseInputSystemPage from "../pages/UseInputSystem/UseInputSystemPage.tsx";
import KnownIssuesPage from "../pages/KnownIssues/KnownIssuesPage.tsx";
import DiscoverConceptsPage from "../pages/GetStarted/DiscoverConcepts/DiscoverConceptsPage.tsx";
import EssentialElementsPage from "../pages/GetStarted/DiscoverConcepts/EssentialElements/EssentialElementsPage.tsx";
import ControlAndTransationsPage from "../pages/GetStarted/DiscoverConcepts/ControlAndTransations/ControlAndTransationsPage.tsx";
import CinemachineTimelinePage from "../pages/GetStarted/DiscoverConcepts/Timeline/CinemachineTimelinePage.tsx";
import ProceduralMotionPage from "../pages/GetStarted/DiscoverConcepts/ProceduralMotion/ProceduralMotionPage.tsx";
import SetupEnvironmentPage from "../pages/GetStarted/SetupEnvironmentPage.tsx";
import SetupMultipleCamPage from "../pages/GetStarted/SetupMultipleCamPage.tsx";
import SetupProcedualBehaviorPage from "../pages/GetStarted/SetupProcedualBehaviorPage.tsx";
import SetupTimelinePage from "../pages/GetStarted/SetupTimelinePage.tsx";
import UseToolsAndShortcutsPage from "../pages/GetStarted/UseToolAndShortcuts/UseToolsAndShotcutsPage.tsx";
import PreBuiltCamerasPage from "../pages/GetStarted/UseToolAndShortcuts/ToolsAndShortcutsPages/PreBuiltCamerasPage.tsx";
import SceneHandlesPage from "../pages/GetStarted/UseToolAndShortcuts/ToolsAndShortcutsPages/SceneHandlesPage.tsx";
import SavingInPlayModePage from "../pages/GetStarted/UseToolAndShortcuts/ToolsAndShortcutsPages/SavingInPlayModePage.tsx";
import FollowFrameCharacterPage from "../pages/3DTrackingScenarios/3DTrackingPages/FollowFrameCharacterPage.tsx";
import FollowFrameGroupPage from "../pages/3DTrackingScenarios/3DTrackingPages/FollowFrameGroupPage.tsx";
import CreateFreeLookCameraPage from "../pages/3DTrackingScenarios/3DTrackingPages/CreateFreeLookCamPage.tsx";
import CreateThirdPersonCameraPage from "../pages/3DTrackingScenarios/3DTrackingPages/CreateThirdPersonCamPage.tsx";
import Cinemachine2DGraphicsPage from "../pages/2DAndTopDown/2DTopDownSubpages/2DGraphicsPage.tsx";
import TopDownGamesPage from "../pages/2DAndTopDown/2DTopDownSubpages/TopDownGamesPage.tsx";

const RoutersList: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContentPage />} />
      <Route path="/cinemachine_doc_Chinese" element={<MainContentPage />} />
      <Route
        path="/section1-Cinemachine-package"
        element={<MainContentPage />}
      />
      {/* Section2 */}
      <Route
        path="/section2-Installation-and-upgrade"
        element={<InstallationPage />}
      />
      <Route
        path="/section2-1-Upgrading-from-Cinemachine-2.x"
        element={<UpgradeFrom2xPage />}
      />

      {/* Section3 */}
      <Route path="/section3-Get-started" element={<GetStartedContentPage />} />

      <Route
        path="section3-1-Discover-Cinemachine-concepts"
        element={<DiscoverConceptsPage />}
      />

      <Route
        path="section3-1-1-Cinemachine-essential-elements"
        element={<EssentialElementsPage />}
      />

      <Route
        path="section3-1-2-Camera-control-and-transitions"
        element={<ControlAndTransationsPage />}
      />
      <Route
        path="section3-1-3-Procedural-motion"
        element={<ProceduralMotionPage />}
      />
      <Route
        path="section3-1-4-Cinemachine-and-Timeline"
        element={<CinemachineTimelinePage />}
      />

      <Route
        path="section3-2-Set-up-a-basic-Cinemachine-environment"
        element={<SetupEnvironmentPage />}
      />

      <Route
        path="section3-3-Set-up-multiple-Cinemachine-Cameras-and-transitions"
        element={<SetupMultipleCamPage />}
      />

      <Route
        path="section3-4-Add-procedural-behavior-to-a-Cinemachine-Camera"
        element={<SetupProcedualBehaviorPage />}
      />

      <Route
        path="section3-5-Set-up-Timeline-with-Cinemachine-Cameras"
        element={<SetupTimelinePage />}
      />

      <Route
        path="section3-6-Use-convenient-tools-and-shortcuts"
        element={<UseToolsAndShortcutsPage />}
      />

      <Route
        path="section3-6-1-Pre-built-cameras"
        element={<PreBuiltCamerasPage />}
      />
      <Route path="section3-6-2-Scene-Handles" element={<SceneHandlesPage />} />
      <Route
        path="section3-6-3-Saving-in-Play-Mode"
        element={<SavingInPlayModePage />}
      />
      {/* Section4 */}
      <Route
        path="/section4-3D-tracking-scenarios"
        element={<TrackingScenario3DPage />}
      />

      <Route
        path="section4-1-Follow-and-frame-a-character"
        element={<FollowFrameCharacterPage />}
      />
      <Route
        path="section4-2-Follow-and-frame-a-group"
        element={<FollowFrameGroupPage />}
      />

      <Route
        path="section4-3-Create-a-FreeLook-Camera"
        element={<CreateFreeLookCameraPage />}
      />

      <Route
        path="section4-4-Create-a-Third-Person-Camera"
        element={<CreateThirdPersonCameraPage />}
      />

      {/* Section5 */}
      <Route
        path="/section5-2D-and-top-down-games"
        element={<TopDownGamesAnd2DPage />}
      />

      <Route
        path="section5-1-Cinemachine-and-2D-graphics"
        element={<Cinemachine2DGraphicsPage />}
      />

      <Route
        path="section5-2-Cinemachine-and-top-down-games"
        element={<TopDownGamesPage />}
      />

      {/* Section6 */}
      <Route
        path="/section6-Constraint-a-camera-to-a-path"
        element={<ConstrainCameraToPathPage />}
      />

      {/* Section7 */}
      <Route
        path="section7-Apply-noise-to-simulate-camera-shake"
        element={<ApplyNoiseSimulationPage />}
      />

      {/* Section8 */}
      <Route
        path="section8-Manage-grouped-cameras"
        element={<ManageGroupedCamerasPage />}
      />

      {/* Section9 */}
      <Route
        path="section9-Avoid-collisions-and-evaluate-shots"
        element={<AvoidCollisionsAndEvaluateShotsPage />}
      />

      {/* Section10 */}
      <Route
        path="section10-Cinemachine-Events"
        element={<CinemachineEventsPage />}
      />

      {/* Section11 */}
      <Route
        path="section11-Cinemachine-Impulse"
        element={<CinemachineImpulsePage />}
      />

      {/* Section12 */}
      <Route
        path="section12-Split-screen-and-multiple-Unity-Cameras"
        element={<SplitScreenMultipleCamerasPage />}
      />

      {/* Section13 */}
      <Route
        path="section13-Use-Input-System-with-Cinemachine"
        element={<UseInputSystemPage />}
      />

      {/* Section16 */}
      <Route path="section16-Known-Issues" element={<KnownIssuesPage />} />
      {/* ComingSoon page for unknown path */}
      <Route path="*" element={<ComingSoonPage />} />
    </Routes>
  );
};

export default RoutersList;
