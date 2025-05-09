import Root from "./Root/Root";
import Card from "./Components/Card"
import CardDescription from "./Components/CardDescrption"
import Inicio from "./Components/inicio"
import Modificar from "./Components/Modificar"
import PlantModification from "./Components/PlantModification"

customElements.define('root-element', Root);
customElements.define("Card-Description", CardDescription);
customElements.define("Inicio", Inicio);
customElements.define("Modificar", Modificar);
customElements.define("Plant-Modification", PlantModification);
customElements.define("Card", Card);

