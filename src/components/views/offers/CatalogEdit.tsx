import { useState, useEffect } from "react";
import "../../views/AddOffer/addoffer.scss";
import "../../../index.scss";
import {
  MdCloudUpload,
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdDelete,
} from "react-icons/md";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import theme from "../AddOffer/styles";
import { ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import {
  fetchOfferAsync,
  offersSelectors,
  updateOfferAsync,
} from "./catalogSlice";
import { ImageAsset, Offer } from "../../models/offer";
import Loader from "../utils/Loader";
import AlertDialog from "../utils/AlertDialog";
import ButtonGroup from "../AddOffer/components/ButtonGroup";
import {
  style,
  typeLists,
  floorLists,
  roomLists,
  conditionList,
  parkingList,
  buildList,
  materialList,
  transportList,
  educationList,
  healthList,
  recreationList,
  othersList,
  amenitiesList,
  stateList,
  kitchenList,
  bathroomList,
  installationList,
  loudnessList,
  windowList,
  furnitureList,
  energyList,
  mediaList,
  directionsList,
} from "../AddOffer/components/Lists";
import SelectGroup from "../AddOffer/components/SelectGroup";
import { onChange } from "../AddOffer/components/onChangefunc";
import { resizeImage } from "../utils/resize";
const Parse = require("parse/dist/parse.min.js");

export default function CatalogEdit() {
  const { offerLoaded, status } = useAppSelector((state) => state.catalog);

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) =>
    offersSelectors.selectById(state, id!)
  );
  useEffect(() => {
    if (offer === undefined || !offerLoaded) dispatch(fetchOfferAsync(id!));

    console.log(offer)
    if (offer) {
      setTitle(offer[1].title);
      setSize(offer[1].size);
      setType(offer[1].type);
      setCity(offer[1].city);
      setLand(offer[1].land);
      setDistrict(offer[1].district);
      setStreet(offer[1].street);
      setStnum(offer[1].stnum);
      setFloor(offer[1].floor);
      setTitle(offer[1].title);
      setBuildType(offer[1].buildType);
      setMaterial(offer[1].material);
      setCosts(offer[1].costs);
      setYear(offer[1].year);
      setCondition(offer[1].condition);
      setParking(offer[1].patking);
      setTransport(offer[1].transport);
      setEducation(offer[1].education);
      setHealth(offer[1].health);
      setRecreation(offer[1].recreation);
      setOthers(offer[1].others);
      setAmenities(offer[1].amenities);
      setKitchen(offer[1].kitchen);
      setKitchenAm(offer[1].kitchenAm);
      setBathroom(offer[1].bathroom);
      setBathAm(offer[1].bathAm);
      setInstallation(offer[1].installation);
      setLoudness(offer[1].loudness);
      setWindows(offer[1].windows);
      setFurnitured(offer[1].furnitured);
      setEnergy(offer[1].energy);
      setMedia(offer[1].media);
      setDirection(offer[1].direction);
      setDescription(offer[1].description);
      setImageAsset(offer[1].imageAsset);
    }
  }, [offerLoaded, dispatch, id, offer]);

  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  const [transport, setTransport] = useState([""]);
  const [education, setEducation] = useState([""]);
  const [health, setHealth] = useState([""]);
  const [recreation, setRecreation] = useState([""]);
  const [others, setOthers] = useState([""]);
  const [amenities, setAmenities] = useState([""]);
  const [kitchen, setKitchen] = useState("");
  const [kitchenAm, setKitchenAm] = useState([""]);
  const [bathroom, setBathroom] = useState("");
  const [bathAm, setBathAm] = useState([""]);
  const [installation, setInstallation] = useState("");
  const [loudness, setLoudness] = useState("");
  const [windows, setWindows] = useState("");
  const [furnitured, setFurnitured] = useState([""]);
  const [energy, setEnergy] = useState([""]);
  const [media, setMedia] = useState([""]);
  const [direction, setDirection] = useState([""]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [priceM, setPriceM] = useState("0");
  const [imageAsset, setImageAsset] = useState<ImageAsset | null>({
    __type: "",
    name: "",
    url: "",
    agent: "",
    createdAt: "",
    updatedAt: "",
    objectId: "",
  });
  const [imgPrev, setImgPrev] = useState("");

  const offerData: Offer = {
    title: title,
    size: size,
    type: type,
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
    price: price,
    priceM: priceM,
    imageAsset: imageAsset,
  };

  const uploadImage = async (e: any) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const resizedImage = await resizeImage(imageFile);
    const imageUrl = new Parse.File("image.jpg", { base64: resizedImage });
    setImgPrev(URL.createObjectURL(imageFile));
    setImageAsset(imageUrl);
    setIsLoading(false);
  };
  const deleteImage = (e: any) => {
    setImageAsset(null);
  };
  const handleShowMore = (e: any) => {
    e.preventDefault();
    setShowMore(!showMore);
  };
  const editOffer = () => {
    dispatch(updateOfferAsync({ offerData: offerData, id: id }));

  };
  if (status.includes("pending")) return <h1>Loading</h1>;
  if (!offer) return <h1 style={{ marginTop: "150px" }}>Not found</h1>;

  return (
    <ThemeProvider theme={theme}>
      <article className="add-offer_box">
        <header>
          <h1>Edytuj ofertę</h1>
        </header>
        <AlertDialog id={id} />
        <form>
          <article className="add-title">
            <h3>Tytuł Twojego ogłoszenia</h3>
            <p>
              Tytuł powinien zawierać maksymalnie 80 znaków, nie powinien
              zawierać adresu e-mail oraz numeru telefonu.
            </p>
            <TextField
              id="outlined-basic"
              value={title || ""}
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
            />
          </article>
          <article>
            <h3>Podstawowe informacje </h3>
            <div className="flex-row">
              <FormControl style={style}>
                <InputLabel id="type">Typ transakcji</InputLabel>
                <SelectGroup
                  value={type || ""}
                  name="typ transakcji"
                  setFunc={setType}
                  values={typeLists}
                />
              </FormControl>
              <TextField
                id="outlined-basic"
                label="Powierzchnia w m2"
                variant="outlined"
                style={style}
                value={size || ""}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <h3>Lokalizacja</h3>
            <TextField
              id="outlined-basic"
              label="Miejscowość"
              variant="outlined"
              value={city || ""}
              style={style}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Województwo"
              value={land || ""}
              variant="outlined"
              style={style}
              onChange={(e) => setLand(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Dzielnica"
              value={district || ""}
              style={style}
              variant="outlined"
              onChange={(e) => setDistrict(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              value={street || ""}
              label="Ulica"
              style={style}
              variant="outlined"
              onChange={(e) => setStreet(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              value={stnum || ""}
              label="Numer budynku"
              style={style}
              variant="outlined"
              onChange={(e) => setStnum(e.target.value)}
            />
          </article>
          <article>
            <h3>Galeria zdjęć</h3>
            <div className="add-img-box">
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {!imageAsset ? (
                    <>
                      <label>
                        <div>
                          <MdCloudUpload
                            style={{ fontSize: "35px", color: "gray" }}
                          />
                          <p>Kliknij aby dodać zdjęcie</p>
                        </div>
                        <input
                          type="file"
                          name="uploadimage"
                          accept="image/*"
                          onChange={uploadImage}
                        />
                      </label>
                    </>
                  ) : !imgPrev ? (
                    <>
                      <div className="image-holder">
                        <img src={imageAsset.url} alt="uploaded" />
                        <button
                          type="button"
                          className="delete-button"
                          onClick={deleteImage}
                        >
                          <MdDelete style={{ color: "white" }} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="image-holder">
                        <img src={imgPrev} alt="uploaded" />
                        <button
                          type="button"
                          className="delete-button"
                          onClick={deleteImage}
                        >
                          <MdDelete style={{ color: "white" }} />
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </article>
          <article>
            <h3>Dodatkowe informacje</h3>
            <FormControl style={style}>
              <InputLabel id="type">Piętro</InputLabel>
              <SelectGroup
                value={floor || ""}
                name="Piętro"
                setFunc={setFloor}
                values={floorLists}
              />
            </FormControl>
            <FormControl style={style}>
              <InputLabel id="type"> Liczba pokoi</InputLabel>
              <SelectGroup
                value={rooms || ""}
                name="Liczba pokoi"
                setFunc={setRooms}
                values={roomLists}
              />
            </FormControl>
            <FormControl style={style}>
              <InputLabel id="type">Stan</InputLabel>
              <SelectGroup
                value={condition || ""}
                name="Piętro"
                setFunc={setCondition}
                values={conditionList}
              />
            </FormControl>
            <FormControl style={style}>
              <InputLabel id="type">Parking</InputLabel>
              <SelectGroup
                value={parking || ""}
                name="Parking"
                setFunc={setParking}
                values={parkingList}
              />
            </FormControl>
            <FormControl style={style}>
              <InputLabel id="type">Typ zabudowy</InputLabel>
              <SelectGroup
                value={buildType || ""}
                name="Typ zabudowy"
                setFunc={setBuildType}
                values={buildList}
              />
            </FormControl>
            <FormControl style={style}>
              <InputLabel id="type">Materiał budynku</InputLabel>
              <SelectGroup
                value={material || ""}
                name="Materiał budynku"
                setFunc={setMaterial}
                values={materialList}
              />
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Opłaty (czynsz administracyjny, media)"
              variant="outlined"
              value={costs || ""}
              style={style}
              onChange={(e) => setCosts(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Rok budowy"
              variant="outlined"
              value={year || ""}
              style={style}
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
            )}
          </article>
          {showMore && (
            <>
              <article>
                <p className="subtitle">Obiekty w pobliżu</p>
                <ButtonGroup
                  title={"Komunikacja"}
                  classVal={transport}
                  values={transportList}
                  changeFunc={(e) =>
                    onChange({
                      e: e,
                      value: transport,
                      setFunc: setTransport,
                    })
                  }
                />
                <ButtonGroup
                  title={"Edukacja"}
                  classVal={education}
                  values={educationList}
                  changeFunc={(e) =>
                    onChange({
                      e: e,
                      value: education,
                      setFunc: setEducation,
                    })
                  }
                />
                <ButtonGroup
                  title={"Zdrowie i uroda"}
                  classVal={health}
                  values={healthList}
                  changeFunc={(e) =>
                    onChange({
                      e: e,
                      value: health,
                      setFunc: setHealth,
                    })
                  }
                />
                <ButtonGroup
                  title={"Rekreacja"}
                  classVal={recreation}
                  values={recreationList}
                  changeFunc={(e) =>
                    onChange({
                      e: e,
                      value: recreation,
                      setFunc: setRecreation,
                    })
                  }
                />
                <ButtonGroup
                  title={"Pozostałe"}
                  classVal={others}
                  values={othersList}
                  changeFunc={(e) =>
                    onChange({
                      e: e,
                      value: others,
                      setFunc: setOthers,
                    })
                  }
                />
                <ButtonGroup
                  title={"Udogodnienia"}
                  classVal={amenities}
                  values={amenitiesList}
                  changeFunc={(e) =>
                    onChange({
                      e: e,
                      value: amenities,
                      setFunc: setAmenities,
                    })
                  }
                />
              </article>
              <article>
                <h3>Kuchnia</h3>
                <div className="flex-row">
                  <FormControl style={style}>
                    <InputLabel id="type">Stan kuchni</InputLabel>
                    <SelectGroup
                      value={kitchen || ""}
                      name="Stan kuchni"
                      setFunc={setKitchen}
                      values={stateList}
                    />
                  </FormControl>
                  <div style={style}>
                    <ButtonGroup
                      title={"Forma kuchni"}
                      classVal={kitchenAm}
                      values={kitchenList}
                      changeFunc={(e) =>
                        onChange({
                          e: e,
                          value: kitchenAm,
                          setFunc: setKitchenAm,
                        })
                      }
                    />
                  </div>
                </div>
                <h3>Łazienka</h3>
                <div className="flex-row">
                  <FormControl style={style}>
                    <InputLabel id="type">Stan łazienki</InputLabel>
                    <SelectGroup
                      value={bathroom || ""}
                      name="Stan łazienki"
                      setFunc={setBathroom}
                      values={stateList}
                    />
                  </FormControl>
                  <div style={style}>
                    <ButtonGroup
                      title={"Forma / wyposażenie łazienki"}
                      classVal={bathAm}
                      values={bathroomList}
                      changeFunc={(e) =>
                        onChange({
                          e: e,
                          value: bathAm,
                          setFunc: setBathAm,
                        })
                      }
                    />
                  </div>
                </div>
                <h3>Wnętrze</h3>
                <FormControl style={style}>
                  <InputLabel id="type">Stan instalacji</InputLabel>
                  <SelectGroup
                    value={installation || ""}
                    name="Stan instalacji"
                    setFunc={setInstallation}
                    values={installationList}
                  />
                </FormControl>
                <FormControl style={style}>
                  <InputLabel id="type">Głośność</InputLabel>
                  <SelectGroup
                    value={loudness || ""}
                    name="Głośność"
                    setFunc={setLoudness}
                    values={loudnessList}
                  />
                </FormControl>
                <div className="flex-row">
                  <FormControl style={style}>
                    <InputLabel id="type">Okna</InputLabel>
                    <SelectGroup
                      value={windows || ""}
                      name="Okna"
                      setFunc={setWindows}
                      values={windowList}
                    />
                  </FormControl>{" "}
                  <div style={{ marginLeft: "5px" }}>
                    <ButtonGroup
                      title={"Umeblowane"}
                      classVal={furnitured}
                      values={furnitureList}
                      changeFunc={(e) =>
                        onChange({
                          e: e,
                          value: furnitured,
                          setFunc: setFurnitured,
                        })
                      }
                    />
                  </div>
                </div>
                <ButtonGroup
                  title={"Ogrzewanie"}
                  classVal={energy}
                  values={energyList}
                  changeFunc={(e) =>
                    onChange({
                      e: e,
                      value: energy,
                      setFunc: setEnergy,
                    })
                  }
                />

                <ButtonGroup
                  title={"Media"}
                  classVal={media}
                  values={mediaList}
                  changeFunc={(e) =>
                    onChange({
                      e: e,
                      value: media,
                      setFunc: setMedia,
                    })
                  }
                />
                <ButtonGroup
                  title={"Usytuowanie względem stron świata"}
                  classVal={direction}
                  values={directionsList}
                  changeFunc={(e) =>
                    onChange({
                      e: e,
                      value: direction,
                      setFunc: setDirection,
                    })
                  }
                />
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
              value={description || ""}
            />
          </article>
          <TextField
            id="outlined-basic"
            label="Cena"
            variant="outlined"
            value={price || "0"}
            style={style}
            onChange={(e: any) => setPrice(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Cena-m"
            variant="outlined"
            value={priceM || "0"}
            style={style}
            onChange={(e: any) => setPriceM(e.target.value)}
          />
          <button className="add-offer-button" onClick={() => editOffer()}>
            Zapisz zmiany
          </button>
        </form>
      </article>
    </ThemeProvider>
  );
}
