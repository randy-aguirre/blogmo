import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./articles/landing/Landing";
import Index from "./articles/index/Index";
import IndexAbout from "./articles/about/index/Index";
import Intro from "./articles/about/intro/Intro";
import Justification from "./articles/about/justification/Justification";
import Target from "./articles/about/target/Target";
import Theory from "./articles/about/theory/Theory";
import Methodology from "./articles/about/methodology/Methodology";
import IndexBodyScheme from "./articles/body_scheme/index/Index";
import Songs from "./articles/body_scheme/songs/Songs";
import Exercises from "./articles/body_scheme/exercises/Exercises";
import IndexActions from "./articles/basic_actions/index/Index";
import SongsActions from "./articles/basic_actions/songs/Songs";
import ExercisesActions from "./articles/basic_actions/exercises/Exercises";
import IndexBalance from "./articles/balance/index/Index";
import SongsBalance from "./articles/balance/songs/Songs";
import ExercisesBalance from "./articles/balance/exercises/Exercises";
import IndexCoordination from "./articles/coordination/index/Index";
import SongsCoordination from "./articles/coordination/songs/Songs";
import ExercisesCoordination from "./articles/coordination/exercises/Exercises";
import IndexEyeHandCoordination from "./articles/eye_hand_coordination/index/Index";
import SongsEyeHandCoordination from "./articles/eye_hand_coordination/songs/Songs";
import ExercisesEyeHandCoordination from "./articles/eye_hand_coordination/exercises/Exercises";
import IndexEyeFootCoordination from "./articles/eye_foot_coordination/index/Index";
import SongsEyeFootCoordination from "./articles/eye_foot_coordination/songs/Songs";
import ExercisesEyeFootCoordination from "./articles/eye_foot_coordination/exercises/Exercises";
import IndexLaterality from "./articles/laterality/index/Index";
import SongsLaterality from "./articles/laterality/songs/Songs";
import ExercisesLaterality from "./articles/laterality/exercises/Exercises";
import IndexMotorSkills from "./articles/motor_skills/index/Index";
import SongsMotorSkills from "./articles/motor_skills/songs/Songs";
import ExercisesMotorSkills from "./articles/motor_skills/exercises/Exercises";
import MoreResources from "./articles/alternative_resources/Resources";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="index" element={<Index />} />

          <Route path="about">
            <Route index element={<IndexAbout />} />
            <Route path="intro" element={<Intro />} />
            <Route path="justification" element={<Justification />} />
            <Route path="objective" element={<Target />} />
            <Route path="theory-considetarions" element={<Theory />} />
            <Route path="methodology" element={<Methodology />} />
          </Route>

          <Route path="body-scheme">
            <Route index element={<IndexBodyScheme />} />
            <Route path="songs" element={<Songs />} />
            <Route path="exercises" element={<Exercises />} />
          </Route>

          <Route path="motor-skills">
            <Route index element={<IndexMotorSkills />} />
            <Route path="songs" element={<SongsMotorSkills />} />
            <Route path="exercises" element={<ExercisesMotorSkills />} />
          </Route>

          <Route path="basic-actions">
            <Route index element={<IndexActions />} />
            <Route path="songs" element={<SongsActions />} />
            <Route path="exercises" element={<ExercisesActions />} />
          </Route>

          <Route path="balance">
            <Route index element={<IndexBalance />} />
            <Route path="songs" element={<SongsBalance />} />
            <Route path="exercises" element={<ExercisesBalance />} />
          </Route>

          <Route path="coordination">
            <Route index element={<IndexCoordination />} />
            <Route path="songs" element={<SongsCoordination />} />
            <Route path="exercises" element={<ExercisesCoordination />} />
          </Route>

          <Route path="eye-hand-coordination">
            <Route index element={<IndexEyeHandCoordination />} />
            <Route path="songs" element={<SongsEyeHandCoordination />} />
            <Route
              path="exercises"
              element={<ExercisesEyeHandCoordination />}
            />
          </Route>

          <Route path="eye-foot-coordination">
            <Route index element={<IndexEyeFootCoordination />} />
            <Route path="songs" element={<SongsEyeFootCoordination />} />
            <Route
              path="exercises"
              element={<ExercisesEyeFootCoordination />}
            />
          </Route>

          <Route path="laterality">
            <Route index element={<IndexLaterality />} />
            <Route path="songs" element={<SongsLaterality />} />
            <Route path="exercises" element={<ExercisesLaterality />} />
          </Route>

          <Route path="alternative-resources">
            <Route index element={<MoreResources />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
