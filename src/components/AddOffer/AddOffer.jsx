import { useState } from "react";
import "./addoffer.scss";
import "../../index.scss";
import {
  MdCloudUpload,
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import theme from "./styles";
import { ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

export default function AddOffer() {
  const [showMore, setShowMore] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [city, setCity] = useState("");
  const [land, setLand] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [stnum, setStnum] = useState("");
  const [floor, setFloor] = useState("");
  const [buildType, setBuildType] = useState("");
  const [material, setMaterial] = useState("");
  const [costs, setCosts] = useState("");
  const [year, setYear] = useState("");
  const [rooms, setRooms] = useState("");
  const [condition, setCondition] = useState("");
  const [parking, setParking] = useState("");
  const [transport, setTransport] = useState([]);
  const [education, setEducation] = useState([]);
  const [health, setHealth] = useState([]);
  const [recreation, setRecreation] = useState([]);
  const [others, setOthers] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [kitchen, setKitchen] = useState("");
  const [kitchenAm, setKitchenAm] = useState([]);
  const [bathroom, setBathroom] = useState("");
  const [bathAm, setBathAm] = useState([]);
  const [installation, setInstallation] = useState("");
  const [loudness, setLoudness] = useState("");
  const [windows, setWindows] = useState("");
  const [furnitured, setFurnitured] = useState([]);
  const [energy, setEnergy] = useState([]);
  const [media, setMedia] = useState([]);
  const [direction, setDirection] = useState([]);
  const [description, setDescription] = useState("");

  const data = {
    id: `${Date.now()}`,
    title: title,
    type: type,
    size: size,
    city: city,
    land: land,
    district: district,
    street: street,
    stnum: stnum,
    floor: floor,
    buildType: buildType,
    material: material,
    costs: costs,
    year: year,
    rooms: rooms,
    condition: condition,
    parking: parking,
    transport: transport,
    education: education,
    health: health,
    recreation: recreation,
    amenities: amenities,
    others: others,
    kitchen: kitchen,
    kitchenAm: kitchenAm,
    bathroom: bathroom,
    bathAm: bathAm,
    installation: installation,
    loudness: loudness,
    windows: windows,
    furnitured: furnitured,
    energy: energy,
    media: media,
    direction: direction,
    description: description,
  };
  console.log(data)

  const transportChange = (event) => {
    event.preventDefault();
    transport.includes(event.target.value)
      ? setTransport(transport.filter(check))
      : setTransport([event.target.value, ...transport]);
    function check(w) {
      return w !== event.target.value;
    }
  };

  const educationChange = (event) => {
    event.preventDefault();
    education.includes(event.target.value)
      ? setEducation(education.filter(check))
      : setEducation([event.target.value, ...education]);
    function check(w) {
      return w !== event.target.value;
    }
  };

  const healthChange = (event) => {
    event.preventDefault();
    health.includes(event.target.value)
      ? setHealth(education.filter(check))
      : setHealth([event.target.value, ...health]);
    function check(w) {
      return w !== event.target.value;
    }
  };

  const recreationChange = (event) => {
    event.preventDefault();
    recreation.includes(event.target.value)
      ? setRecreation(recreation.filter(check))
      : setRecreation([event.target.value, ...recreation]);
    function check(w) {
      return w !== event.target.value;
    }
  };

  const othersChange = (event) => {
    event.preventDefault();
    others.includes(event.target.value)
      ? setOthers(others.filter(check))
      : setOthers([event.target.value, ...others]);
    function check(w) {
      return w !== event.target.value;
    }
  };
  const amenitiesChange = (event) => {
    event.preventDefault();
    amenities.includes(event.target.value)
      ? setAmenities(amenities.filter(check))
      : setAmenities([event.target.value, ...amenities]);
    function check(w) {
      return w !== event.target.value;
    }
  };

  const kitchenChange = (event) => {
    event.preventDefault();
    kitchenAm.includes(event.target.value)
      ? setKitchenAm(kitchenAm.filter(check))
      : setKitchenAm([event.target.value, ...kitchenAm]);
    function check(w) {
      return w !== event.target.value;
    }
  };
  const furnitureChange = (event) => {
    event.preventDefault();
    furnitured.includes(event.target.value)
      ? setFurnitured(furnitured.filter(check))
      : setFurnitured([event.target.value, ...furnitured]);
    function check(w) {
      return w !== event.target.value;
    }
  };

  const bathroomChange = (event) => {
    event.preventDefault();
    bathAm.includes(event.target.value)
      ? setBathAm(bathAm.filter(check))
      : setBathAm([event.target.value, ...bathAm]);
    function check(w) {
      return w !== event.target.value;
    }
  };

  const energyChange = (event) => {
    event.preventDefault();
    energy.includes(event.target.value)
      ? setEnergy(energy.filter(check))
      : setEnergy([event.target.value, ...energy]);
    function check(w) {
      return w !== event.target.value;
    }
  };
  const mediaChange = (event) => {
    event.preventDefault();
    media.includes(event.target.value)
      ? setMedia(media.filter(check))
      : setMedia([event.target.value, ...media]);
    function check(w) {
      return w !== event.target.value;
    }
  };
  const directionChange = (event) => {
    event.preventDefault();
    direction.includes(event.target.value)
      ? setDirection(direction.filter(check))
      : setDirection([event.target.value, ...direction]);
    function check(w) {
      return w !== event.target.value;
    }
  };

  const handleShowMore = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <ThemeProvider theme={theme}>
      <article className="add-offer_box">
        <header>
          <h1>Dodaj swoją ofertę</h1>
        </header>
        <form>
          <article className="add-title">
            <h3>Tytuł Twojego ogłoszenia</h3>
            <p>
              Tytuł powinien zawierać maksymalnie 80 znaków, nie powinien
              zawierać adresu e-mail oraz numeru telefonu.
            </p>
            <TextField
              id="outlined-basic"
              label="Wpisz tytuł ogłoszenia"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
            />
          </article>
          <article>
            <h3>Podstawowe informacje </h3>
            <div className="flex-row">
              <FormControl style={{ width: "49%", margin: "5px" }}>
                <InputLabel id="type">Typ transakcji</InputLabel>
                <Select
                  labelId="type"
                  id="demo-simple-select"
                  value={type}
                  label="type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={"sell"}>Sprzedaż</MenuItem>
                  <MenuItem value={"rent"}>Wynajem</MenuItem>
                  <MenuItem value={"other"}>inne</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="marginoutlined-basic"
                label="Powierzchnia w m2"
                variant="outlined"
                style={{ width: "49%", margin: "5px" }}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <h3>Lokalizacja</h3>
            <TextField
              id="outlined-basic"
              label="Miejscowość"
              variant="outlined"
              value={city}
              style={{ width: "49%", margin: "5px" }}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Województwo"
              value={land}
              variant="outlined"
              style={{ width: "49%", margin: "5px" }}
              onChange={(e) => setLand(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Dzielnica"
              value={district}
              style={{ width: "49%", margin: "5px" }}
              variant="outlined"
              onChange={(e) => setDistrict(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              value={street}
              label="Ulica"
              style={{ width: "49%", margin: "5px" }}
              variant="outlined"
              onChange={(e) => setStreet(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              value={stnum}
              label="Numer budynku"
              style={{ width: "49%", margin: "5px" }}
              variant="outlined"
              onChange={(e) => setStnum(e.target.value)}
            />
          </article>

          <article>
            <h3>Galeria zdjęć</h3>
            <div className="add-img-box">
              <label>
                <div>
                  <MdCloudUpload style={{ fontSize: "35px", color: "gray" }} />
                  <p>Kliknij aby dodać zdjęcia</p>
                </div>
                <input type="file" name="uploadimage" accept="image/*" />
              </label>
            </div>
          </article>

          <article>
            <h3>Dodatkowe informacje</h3>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Piętro</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={floor}
                label="Piętro"
                onChange={(e) => setFloor(e.target.value)}
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
                <MenuItem value={"4"}>4</MenuItem>
                <MenuItem value={"5"}>5</MenuItem>
                <MenuItem value={"6"}>6</MenuItem>
                <MenuItem value={"7"}>7</MenuItem>
                <MenuItem value={"8+"}>Więcej niż 7</MenuItem>*
              </Select>
            </FormControl>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type"> Liczba pokoi</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={rooms}
                label="Liczba pokoi"
                onChange={(e) => setRooms(e.target.value)}
              >
                <MenuItem value={"poddasze"}>Poddasze</MenuItem>
                <MenuItem value={"piwnica"}>Piwnica mieszkalna</MenuItem>
                <MenuItem value={"parter"}>Parter</MenuItem>
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
                <MenuItem value={"4"}>4</MenuItem>
                <MenuItem value={"5"}>5</MenuItem>
                <MenuItem value={"6"}>6</MenuItem>
                <MenuItem value={"7"}>7</MenuItem>
                <MenuItem value={"8"}>8</MenuItem>
                <MenuItem value={"8"}>9</MenuItem>
                <MenuItem value={"10"}>10</MenuItem>
                <MenuItem value={"11"}>11</MenuItem>
                <MenuItem value={"12"}>12</MenuItem>
                <MenuItem value={"13"}>13</MenuItem>
                <MenuItem value={"14"}>14</MenuItem>
                <MenuItem value={"15"}>15</MenuItem>
                <MenuItem value={"16"}>16</MenuItem>
                <MenuItem value={"17"}>17</MenuItem>
                <MenuItem value={"18"}>18</MenuItem>
                <MenuItem value={"19"}>19</MenuItem>
                <MenuItem value={"20"}>20</MenuItem>
                <MenuItem value={"21"}>21</MenuItem>
                <MenuItem value={"22"}>22</MenuItem>
                <MenuItem value={"23"}>23</MenuItem>
                <MenuItem value={"24"}>24</MenuItem>
                <MenuItem value={"25"}>25</MenuItem>
                <MenuItem value={"26"}>26</MenuItem>
                <MenuItem value={"27"}>27</MenuItem>
                <MenuItem value={"28"}>28</MenuItem>
                <MenuItem value={"29"}>29</MenuItem>
                <MenuItem value={"30"}>30</MenuItem>
                <MenuItem value={"30+"}>Powyżej 30</MenuItem>*
              </Select>
            </FormControl>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Stan</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={condition}
                label="Piętro"
                onChange={(e) => setCondition(e.target.value)}
              >
                <MenuItem value={"wysoki-standard"}>Wysoki standard</MenuItem>
                <MenuItem value={"swiezo-po-remoncie"}>
                  Świeżo po remonce
                </MenuItem>
                <MenuItem value={"dobry"}>Dobry</MenuItem>
                <MenuItem value={"do-odswiezenia"}>Do odświeżenia</MenuItem>
                <MenuItem value={"do-remontu"}>Do remontu</MenuItem>
                <MenuItem value={"deweloperski"}>Stan deweloperski</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Parking</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={parking}
                label="Parking"
                onChange={(e) => setParking(e.target.value)}
              >
                <MenuItem value={"wysoki-standard"}>
                  Brak miejsca parkingowego
                </MenuItem>
                <MenuItem value={"swiezo-po-remoncie"}>
                  Przynależne na ulicy
                </MenuItem>
                <MenuItem value={"dobry"}>Parking strzeżony</MenuItem>
                <MenuItem value={"do-odswiezenia"}>W garażu</MenuItem>
                <MenuItem value={"do-remontu"}>Pod wiatą</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Typ zabudowy</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={buildType}
                label="Typ zabudowy"
                onChange={(e) => setBuildType(e.target.value)}
              >
                <MenuItem value={"blok"}>blok </MenuItem>
                <MenuItem value={"kamienica"}>kamienica </MenuItem>
                <MenuItem value={"wielorodzinny"}>
                  dom wielorodzinny / szeregowiec
                </MenuItem>
                <MenuItem value={"apartamentoweic"}>apartamentowiec</MenuItem>
                <MenuItem value={"loft"}>loft</MenuItem>
                <MenuItem value={"plomba"}>plomba</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Materiał budynku</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={material}
                label="Typ zabudowy"
                onChange={(e) => setMaterial(e.target.value)}
              >
                <MenuItem value={"beton"}>beton </MenuItem>
                <MenuItem value={"cegła"}>cegła </MenuItem>
                <MenuItem value={"pustak"}>pustak</MenuItem>
                <MenuItem value={"płyta"}>płyta</MenuItem>
                <MenuItem value={"ramah"}>rama H</MenuItem>
                <MenuItem value={"silikat"}>silikat</MenuItem>
                <MenuItem value={"kamien"}>kamień</MenuItem>
                <MenuItem value={"drewno"}>drewno</MenuItem>
                <MenuItem value={"stal"}>konstrukcja stalowa</MenuItem>
                <MenuItem value={"inne"}>inne</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Opłaty (czynsz administracyjny, media)"
              variant="outlined"
              value={costs}
              style={{ width: "49%", margin: "5px" }}
              onChange={(e) => setCosts(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Rok budowy"
              variant="outlined"
              value={year}
              style={{ width: "49%", margin: "5px" }}
              onChange={(e) => setYear(e.target.value)}
            />
            {!showMore && (
              <div className="button-showmore">
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  onClick={(e) => handleShowMore(e)}
                >
                  Pokaż więcej <MdOutlineKeyboardArrowDown />
                </motion.button>
              </div>
            )}{" "}
          </article>

          {showMore && (
            <>
              <article>
                <p className="subtitle">Obiekty w pobliżu</p>
                <h3>Komunikacja</h3>
                <div>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"autobus"}
                    onClick={transportChange}
                    className={
                      transport.includes("autobus") ? "button-selected" : ""
                    }
                  >
                    autobus
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"tramwaj"}
                    onClick={transportChange}
                    className={
                      transport.includes("tramwaj") ? "button-selected" : ""
                    }
                  >
                    tramwaj
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"trolejbus"}
                    onClick={transportChange}
                    className={
                      transport.includes("trolejbus") ? "button-selected" : ""
                    }
                  >
                    trolejbus
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"kolej podmiejska"}
                    onClick={transportChange}
                    className={
                      transport.includes("kolej podmiejska")
                        ? "button-selected"
                        : ""
                    }
                  >
                    kolej podmiejska
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"metro"}
                    onClick={transportChange}
                    className={
                      transport.includes("metro") ? "button-selected" : ""
                    }
                  >
                    metro
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"pkp"}
                    onClick={transportChange}
                    className={
                      transport.includes("PKP") ? "button-selected" : ""
                    }
                  >
                    PKP
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"pks"}
                    onClick={transportChange}
                    className={
                      transport.includes("PKS") ? "button-selected" : ""
                    }
                  >
                    PKS
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"lotnisko"}
                    onClick={transportChange}
                    className={
                      transport.includes("lotnisko") ? "button-selected" : ""
                    }
                  >
                    lotnisko
                  </motion.button>
                </div>
                <h3>Edukacja</h3>
                <div>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"żłobek"}
                    onClick={educationChange}
                    className={
                      education.includes("żłobek") ? "button-selected" : ""
                    }
                  >
                    żłobek
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"przedszkole"}
                    onClick={educationChange}
                    className={
                      education.includes("przedszkole") ? "button-selected" : ""
                    }
                  >
                    przedszkole
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"szkoła podstawowa"}
                    onClick={educationChange}
                    className={
                      education.includes("szkoła podstawowa")
                        ? "button-selected"
                        : ""
                    }
                  >
                    szkoła podstawowa
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"szkoła średnia"}
                    onClick={educationChange}
                    className={
                      education.includes("szkoła średnia")
                        ? "button-selected"
                        : ""
                    }
                  >
                    szkoła średnia
                  </motion.button>{" "}
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"uczelnia"}
                    onClick={educationChange}
                    className={
                      education.includes("uczelnia") ? "button-selected" : ""
                    }
                  >
                    uczelnia{" "}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"gimnazjum"}
                    onClick={educationChange}
                    className={
                      education.includes("gimnazjum") ? "button-selected" : ""
                    }
                  >
                    gimnazjum{" "}
                  </motion.button>
                </div>
                <h3>Zdrowie i uroda</h3>
                <div>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"szpital"}
                    onClick={healthChange}
                    className={
                      health.includes("szpital") ? "button-selected" : ""
                    }
                  >
                    przychodnia / szpital
                  </motion.button>{" "}
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"apteka"}
                    onClick={healthChange}
                    className={
                      health.includes("apteka") ? "button-selected" : ""
                    }
                  >
                    apteka
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"weterynarz"}
                    onClick={healthChange}
                    className={
                      health.includes("weterynarz") ? "button-selected" : ""
                    }
                  >
                    weterynarz
                  </motion.button>
                </div>
                <h3>Rekreacja</h3>
                <div>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"basen"}
                    onClick={recreationChange}
                    className={
                      recreation.includes("basen") ? "button-selected" : ""
                    }
                  >
                    basen
                  </motion.button>{" "}
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"siłownia"}
                    onClick={recreationChange}
                    className={
                      recreation.includes("siłownia") ? "button-selected" : ""
                    }
                  >
                    siłownia / fitness
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"plac zabaw"}
                    onClick={recreationChange}
                    className={
                      recreation.includes("plac zabaw") ? "button-selected" : ""
                    }
                  >
                    plac zabaw
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"park"}
                    onClick={recreationChange}
                    className={
                      recreation.includes("park") ? "button-selected" : ""
                    }
                  >
                    park{" "}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"las"}
                    onClick={recreationChange}
                    className={
                      recreation.includes("las") ? "button-selected" : ""
                    }
                  >
                    las
                  </motion.button>{" "}
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"jezioro"}
                    onClick={recreationChange}
                    className={
                      recreation.includes("jezioro") ? "button-selected" : ""
                    }
                  >
                    jezioro{" "}
                  </motion.button>
                </div>
                <h3>Pozostałe</h3>

                <div>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"centrum handlowe"}
                    onClick={othersChange}
                    className={
                      others.includes("centrum handlowe")
                        ? "button-selected"
                        : ""
                    }
                  >
                    centrum handlowe
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"sklep"}
                    onClick={othersChange}
                    className={
                      others.includes("sklep") ? "button-selected" : ""
                    }
                  >
                    sklep{" "}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"bazarek"}
                    onClick={othersChange}
                    className={
                      others.includes("bazarek") ? "button-selected" : ""
                    }
                  >
                    bazarek
                  </motion.button>
                </div>
                <h3>Udogodnienia</h3>
                <div>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"winda"}
                    onClick={amenitiesChange}
                    className={
                      amenities.includes("winda") ? "button-selected" : ""
                    }
                  >
                    winda
                  </motion.button>{" "}
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"teren zamknięty"}
                    onClick={amenitiesChange}
                    className={
                      amenities.includes("teren zamknięty")
                        ? "button-selected"
                        : ""
                    }
                  >
                    teren zamknięty
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"ochrona"}
                    onClick={amenitiesChange}
                    className={
                      amenities.includes("ochrona") ? "button-selected" : ""
                    }
                  >
                    ochrona
                  </motion.button>{" "}
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"recepcja"}
                    onClick={amenitiesChange}
                    className={
                      amenities.includes("recepcja") ? "button-selected" : ""
                    }
                  >
                    recepcja
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"podjazd dla niepełnosprawnych"}
                    onClick={amenitiesChange}
                    className={
                      amenities.includes("podjazd dla niepełnosprawnych")
                        ? "button-selected"
                        : ""
                    }
                  >
                    podjazd dla niepełnosprawnych
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"patio"}
                    onClick={amenitiesChange}
                    className={
                      amenities.includes("patio") ? "button-selected" : ""
                    }
                  >
                    patio
                  </motion.button>{" "}
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"domofon"}
                    onClick={amenitiesChange}
                    className={
                      amenities.includes("domofon") ? "button-selected" : ""
                    }
                  >
                    domofon
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    value={"wideofon"}
                    onClick={amenitiesChange}
                    className={
                      amenities.includes("wideofon") ? "button-selected" : ""
                    }
                  >
                    wideofon
                  </motion.button>
                </div>
              </article>
              <article>
                <h3>Kuchnia</h3>
                <div className="flex-row">
                  <FormControl style={{ width: "49%", margin: "5px" }}>
                    <InputLabel id="type">Stan kuchni</InputLabel>
                    <Select
                      labelId="type"
                      id="demo-simple-select"
                      value={kitchen}
                      label="stan kuchni"
                      onChange={(e) => setKitchen(e.target.value)}
                    >
                      <MenuItem value={"bardzo dobry"}>bardzo dobry</MenuItem>
                      <MenuItem value={"dobry"}>dobry</MenuItem>
                      <MenuItem value={"do odnowienia"}>do odnowienia</MenuItem>
                      <MenuItem value={"do remontu"}>do remontu</MenuItem>
                    </Select>
                  </FormControl>
                  <div style={{ width: "49%", margin: "5px" }}>
                    <p>Forma kuchni</p>
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      value={"w aneksie"}
                      onClick={kitchenChange}
                      className={
                        kitchenAm.includes("w aneksie") ? "button-selected" : ""
                      }
                    >
                      w aneksie
                    </motion.button>{" "}
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      value={"oddzielna"}
                      onClick={kitchenChange}
                      className={
                        kitchenAm.includes("oddzielna") ? "button-selected" : ""
                      }
                    >
                      oddzielna
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      value={"prześwit"}
                      onClick={kitchenChange}
                      className={
                        kitchenAm.includes("prześwit") ? "button-selected" : ""
                      }
                    >
                      prześwit
                    </motion.button>
                  </div>
                </div>
                <h3>Łazienka</h3>
                <div className="flex-row">
                  <FormControl style={{ width: "49%", margin: "5px" }}>
                    <InputLabel id="type">Stan łazienki</InputLabel>
                    <Select
                      labelId="type"
                      id="demo-simple-select"
                      value={bathroom}
                      label="stan łazienki"
                      onChange={(e) => setBathroom(e.target.value)}
                    >
                      <MenuItem value={"bardzo dobry"}>bardzo dobry</MenuItem>
                      <MenuItem value={"dobry"}>dobry</MenuItem>
                      <MenuItem value={"do odnowienia"}>do odnowienia</MenuItem>
                      <MenuItem value={"do remontu"}>do remontu</MenuItem>
                    </Select>
                  </FormControl>
                  <div style={{ width: "49%", margin: "5px" }}>
                    <p>Forma / wyposażenie łazienki</p>
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      value={"osobne WC"}
                      onClick={bathroomChange}
                      className={
                        bathAm.includes("osobne WC") ? "button-selected" : ""
                      }
                    >
                      osobne WC{" "}
                    </motion.button>{" "}
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      value={"z oknem"}
                      onClick={bathroomChange}
                      className={
                        bathAm.includes("z oknem") ? "button-selected" : ""
                      }
                    >
                      z oknem
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      value={"wanna"}
                      onClick={bathroomChange}
                      className={
                        bathAm.includes("wanna") ? "button-selected" : ""
                      }
                    >
                      wanna
                    </motion.button>{" "}
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      value={"prysznic"}
                      onClick={bathroomChange}
                      className={
                        bathAm.includes("prysznic") ? "button-selected" : ""
                      }
                    >
                      prysznic{" "}
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      value={"jacuzzi"}
                      onClick={bathroomChange}
                      className={
                        bathAm.includes("jacuzzi") ? "button-selected" : ""
                      }
                    >
                      jacuzzi
                    </motion.button>
                  </div>
                </div>
                <h3>Wnętrze</h3>
                <FormControl style={{ width: "49%", margin: "5px" }}>
                  <InputLabel id="type">Stan instalacji</InputLabel>
                  <Select
                    labelId="type"
                    id="demo-simple-select"
                    value={installation}
                    label="stan instalacji"
                    onChange={(e) => setInstallation(e.target.value)}
                  >
                    <MenuItem value={"nowa"}>nowa</MenuItem>
                    <MenuItem value={"po wymianie"}>po wymianie</MenuItem>
                    <MenuItem value={"częściowo wymieniona"}>
                      częściowo wymieniona
                    </MenuItem>
                    <MenuItem value={"do wymiany"}>do wymiany</MenuItem>
                  </Select>
                </FormControl>
                <FormControl style={{ width: "49%", margin: "5px" }}>
                  <InputLabel id="type">Głośność</InputLabel>
                  <Select
                    labelId="type"
                    id="demo-simple-select"
                    value={loudness}
                    label="głośność"
                    onChange={(e) => setLoudness(e.target.value)}
                  >
                    <MenuItem value={"bdobry"}>ciche</MenuItem>
                    <MenuItem value={"dobry"}>umiarkowane ciche</MenuItem>
                    <MenuItem value={"doodnowienia"}>
                      umiarkowane głośne
                    </MenuItem>
                    <MenuItem value={"doremontu"}>głośne</MenuItem>
                  </Select>
                </FormControl>
                <div className="flex-row">
                  <FormControl style={{ width: "49%", margin: "5px" }}>
                    <InputLabel id="type">Okna</InputLabel>
                    <Select
                      labelId="type"
                      id="demo-simple-select"
                      value={windows}
                      label="okna"
                      onChange={(e) => setWindows(e.target.value)}
                    >
                      <MenuItem value={"drewniane"}>drewniane</MenuItem>
                      <MenuItem value={"plastikowe"}>platikowe / PCV</MenuItem>
                      <MenuItem value={"aluminiowe"}>aluminiowe</MenuItem>
                    </Select>
                  </FormControl>{" "}
                  <div style={{ marginLeft: "5px" }}>
                    <p>Umeblowane</p>
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      value={"tak"}
                      onClick={furnitureChange}
                      className={
                        furnitured.includes("tak") ? "button-selected" : ""
                      }
                    >
                      tak
                    </motion.button>{" "}
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      onClick={furnitureChange}
                      value={"nie"}
                      className={
                        furnitured.includes("nie") ? "button-selected" : ""
                      }
                    >
                      nie
                    </motion.button>{" "}
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      value={"częściowo"}
                      onClick={furnitureChange}
                      className={
                        furnitured.includes("częściowo")
                          ? "button-selected"
                          : ""
                      }
                    >
                      częściowo
                    </motion.button>
                  </div>{" "}
                </div>{" "}
                <h3>Ogrzewanie</h3>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"CO miejskie"}
                  onClick={energyChange}
                  className={
                    energy.includes("CO miejskie") ? "button-selected" : ""
                  }
                >
                  CO miejskie{" "}
                </motion.button>{" "}
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"CO własne"}
                  onClick={energyChange}
                  className={
                    energy.includes("CO własne") ? "button-selected" : ""
                  }
                >
                  CO własne{" "}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"biomasa"}
                  onClick={energyChange}
                  className={
                    energy.includes("biomasa") ? "button-selected" : ""
                  }
                >
                  biomasa{" "}
                </motion.button>{" "}
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"podłogowe"}
                  onClick={energyChange}
                  className={
                    energy.includes("podłogowe") ? "button-selected" : ""
                  }
                >
                  podłogowe
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"geotermika"}
                  onClick={energyChange}
                  className={
                    energy.includes("geotermika") ? "button-selected" : ""
                  }
                >
                  geoterminka
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"klimatyzacja"}
                  onClick={energyChange}
                  className={
                    energy.includes("klimatyzacja") ? "button-selected" : ""
                  }
                >
                  klimatyzacja
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"kominkowe"}
                  onClick={energyChange}
                  className={
                    energy.includes("kominkowe") ? "button-selected" : ""
                  }
                >
                  kominkowe
                </motion.button>{" "}
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"słoneczne"}
                  onClick={energyChange}
                  className={
                    energy.includes("słoneczne") ? "button-selected" : ""
                  }
                >
                  słoneczne
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"węglowe"}
                  onClick={energyChange}
                  className={
                    energy.includes("węglowe") ? "button-selected" : ""
                  }
                >
                  węglowe
                </motion.button>{" "}
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"olejowe"}
                  onClick={energyChange}
                  className={
                    energy.includes("olejowe") ? "button-selected" : ""
                  }
                >
                  olejowe
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"elektryczne"}
                  onClick={energyChange}
                  className={
                    energy.includes("elektryczne") ? "button-selected" : ""
                  }
                >
                  elektryczne
                </motion.button>{" "}
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"gazowe"}
                  onClick={energyChange}
                  className={energy.includes("gazowe") ? "button-selected" : ""}
                >
                  gazowe{" "}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"pompa ciepła"}
                  onClick={energyChange}
                  className={
                    energy.includes("pompa ciepła") ? "button-selected" : ""
                  }
                >
                  pompa ciepła
                </motion.button>{" "}
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"brak"}
                  onClick={energyChange}
                  className={energy.includes("brak") ? "button-selected" : ""}
                >
                  brak
                </motion.button>{" "}
                <h3>Media</h3>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"woda"}
                  onClick={mediaChange}
                  className={media.includes("woda") ? "button-selected" : ""}
                >
                  woda
                </motion.button>{" "}
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"prąd"}
                  onClick={mediaChange}
                  className={media.includes("prąd") ? "button-selected" : ""}
                >
                  prąd
                </motion.button>{" "}
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"siła"}
                  onClick={mediaChange}
                  className={media.includes("siła") ? "button-selected" : ""}
                >
                  siła
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"gaz"}
                  onClick={mediaChange}
                  className={media.includes("gaz") ? "button-selected" : ""}
                >
                  gaz
                </motion.button>{" "}
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"internet"}
                  onClick={mediaChange}
                  className={
                    media.includes("internet") ? "button-selected" : ""
                  }
                >
                  internet
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"telewizja kablowa"}
                  onClick={mediaChange}
                  className={
                    media.includes("telewizja kablowa") ? "button-selected" : ""
                  }
                >
                  telewizja kablowa
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"telefon"}
                  onClick={mediaChange}
                  className={media.includes("telefon") ? "button-selected" : ""}
                >
                  telefon
                </motion.button>
                <h3>Usytuowanie względem stron świata</h3>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"północ"}
                  onClick={directionChange}
                  className={
                    direction.includes("północ") ? "button-selected" : ""
                  }
                >
                  północne
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"południe"}
                  onClick={directionChange}
                  className={
                    direction.includes("południe") ? "button-selected" : ""
                  }
                >
                  południowe
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"wschód"}
                  onClick={directionChange}
                  className={
                    direction.includes("wschód") ? "button-selected" : ""
                  }
                >
                  wschodnie
                </motion.button>{" "}
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  value={"zachód"}
                  onClick={directionChange}
                  className={
                    direction.includes("zachód") ? "button-selected" : ""
                  }
                >
                  zachodnie
                </motion.button>
                <br />
                <div className="button-showmore">
                  <button onClick={(e) => handleShowMore(e)}>
                    Zwiń <MdOutlineKeyboardArrowUp />
                  </button>
                </div>
              </article>
            </>
          )}
          <article>
            <h3>Opis</h3>
            <p>Opis powinien zawierać minimalnie 30 znaków</p>
            <p>Opis {description.length} / 4000</p>
            <textarea
              maxLength={4000}
              minLength={30}
              placeholder="Wpisz treść ogłoszenia"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </article>
        </form>
      </article>
 
    </ThemeProvider>
  );
}
