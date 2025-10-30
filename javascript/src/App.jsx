import './App.css'
import {Route, Switch} from "wouter";
import {Main} from "./components/Main.jsx";
import {FormBuilderExample} from "./components/FormBuilderExample.jsx";
import {FormViewerExample} from "./components/FormViewerExample.jsx";

function App() {
  return (
      <Switch>
        <Route path="/" component={Main}/>
        <Route path="/form-builder" component={FormBuilderExample}/>
        <Route path="/form-viewer" component={FormViewerExample}/>
      </Switch>
  )
}

export default App
