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
import { Offer } from "../../models/offer";
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
import i18next from 'i18n';

const Parse = require("parse/dist/parse.min.js");

export default function CatalogEdit() {
  const { offerLoaded, status } = useAppSelector((state) => state.catalog);
  const t = i18next.t;
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) =>
    offersSelectors.selectById(state, id!)
  );
  useEffect(() => {
    if (offer === undefined || !offerLoaded) dispatch(fetchOfferAsync(id!));
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
      setImageAsset(Object.values(offer[1].imageAsset));
      setPrice(offer[1].price);
      setPriceM(offer[1].priceM);
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
  const [price, setPrice] = useState("0");
  const [priceM, setPriceM] = useState("0");
  const [imageAsset, setImageAsset] = useState<string[]>([]);
  const [imageError, setImageError] = useState("");

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
    imageAsset: { ...imageAsset },
  };
  const uploadImage = async (e: any) => {
    setIsLoading(true);
    try {
      const files = Array.from(e.target.files || []);
      if (files.length > 8) {
        setImageError(t("addOffer:max-photos"));
        return;
      }

      const processedImages = await Promise.all(
        files.map(async (file: any) => {
          const resizedImage = await resizeImage(file);
          const image = new Parse.File("image.jpg", { base64: resizedImage });
          await image.save();
          const imageUrl = image.url();
          return imageUrl;
        })
      );
      setImageAsset((prevImageAsset) => [
        ...prevImageAsset,
        ...processedImages,
      ]);
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteImage = (i: string) => {
    setImageAsset(
      imageAsset.filter(function (img) {
        return img.toString() !== i.toString();
      })
    );
  };

  const handleShowMore = (e: any) => {
    e.preventDefault();
    setShowMore(!showMore);
  };
  const editOffer = () => {
    dispatch(updateOfferAsync({ offerData: offerData, id: id }));
  };
  if (status.includes("pending")) return <h1>{t("offers:loading")}</h1>;
  if (!offer) return <h1 style={{ marginTop: "150px" }}>{t("offers:not-found")}</h1>;

  return (
    <ThemeProvider theme={theme}>
      <article className="add-offer_box">
        <header>
          <h1>{t("offers:edit-offer")}</h1>
        </header>
        <form>
          <article className="add-title">
            <h3>{t("addOffer:the-title-of-your-ad")}</h3>
            <p>
              {t("addOffer:title-max-char")}
            </p>
            <TextField
              id="outlined-basic"
              value={title || ""}
              variant="outlined"
              style={{ margin: "0px 8px 4px" }}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="add-price">
              <TextField
                id="outlined-basic"
                label={t("addOffer:price")}
                variant="outlined"
                type="number"
                value={price || ""}
                style={style}
                onChange={(e: any) => setPrice(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label={t("addOffer:price-per-square")}
                variant="outlined"
                type="number"
                value={priceM || ""}
                style={style}
                onChange={(e: any) => setPriceM(e.target.value)}
              />
            </div>
          </article>
          <article>
            <h3>{t("addOffer:basic-information")}</h3>
            <div className="flex-row">
              <FormControl style={style}>
                <InputLabel id="type">{t("addOffer:transaction-type")}</InputLabel>
                <SelectGroup
                  value={type || ""}
                  name="typ transakcji"
                  setFunc={setType}
                  values={typeLists}
                />
              </FormControl>
              <TextField
                id="outlined-basic"
                label={t("addOffer:area-in-m2")}
                variant="outlined"
                style={style}
                value={size || ""}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <h3>{t("addOffer:location")}</h3>
            <TextField
              id="outlined-basic"
              label={t("addOffer:town")}
              variant="outlined"
              value={city || ""}
              style={style}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label={t("addOffer:province")}
              value={land || ""}
              variant="outlined"
              style={style}
              onChange={(e) => setLand(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label={t("addOffer:district")}
              value={district || ""}
              style={style}
              variant="outlined"
              onChange={(e) => setDistrict(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              value={street || ""}
              label={t("addOffer:street")}
              style={style}
              variant="outlined"
              onChange={(e) => setStreet(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              value={stnum || ""}
              label={t("addOffer:number-of-the-building")}
              style={style}
              variant="outlined"
              onChange={(e) => setStnum(e.target.value)}
            />
          </article>
          <article>
            <h3>{t("addOffer:gallery")}</h3>
            <div className="add-img-box">
              {imageAsset.map((i) => (
                <div className="image-holder" key={i.length}>
                  <img src={i} alt="uploaded" />
                  <button type="button" className="delete-button">
                    <MdDelete
                      style={{ color: "white" }}
                      onClick={(e) => {
                        deleteImage(i);
                      }}
                    />
                  </button>
                </div>
              ))}
              {imageAsset.length < 8 && (
                <label className="add-img-but">
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <>
                      <MdCloudUpload
                        style={{ fontSize: "35px", color: "gray" }}
                      />
                      <p>{t("addOffer:click-add-photo")}</p>
                      <input
                        type="file"
                        name="uploadimage"
                        accept="image/*"
                        multiple
                        style={{ display: "none" }}
                        onChange={uploadImage}
                      />
                    </>
                  )}
                </label>
              )}
            </div>
            {imageError && <h3>{imageError}</h3>}
          </article>
          <article>
            <h3>{t("addOffer:extra-info")}</h3>
            <FormControl style={style}>
              <InputLabel id="type">{t("addOffer:floor")}</InputLabel>
              <SelectGroup
                value={floor || ""}
                name="Piętro"
                setFunc={setFloor}
                values={floorLists}
              />
            </FormControl>
            <FormControl style={style}>
              <InputLabel id="type">{t("addOffer:count-rooms")}</InputLabel>
              <SelectGroup
                value={rooms || ""}
                name="Liczba pokoi"
                setFunc={setRooms}
                values={roomLists}
              />
            </FormControl>
            <FormControl style={style}>
              <InputLabel id="type">{t("addOffer:state")}</InputLabel>
              <SelectGroup
                value={condition || ""}
                name="Piętro"
                setFunc={setCondition}
                values={conditionList}
              />
            </FormControl>
            <FormControl style={style}>
              <InputLabel id="type">{t("addOffer:parking")}</InputLabel>
              <SelectGroup
                value={parking || ""}
                name="Parking"
                setFunc={setParking}
                values={parkingList}
              />
            </FormControl>
            <FormControl style={style}>
              <InputLabel id="type">{t("addOffer:type-of-development")}</InputLabel>
              <SelectGroup
                value={buildType || ""}
                name="Typ zabudowy"
                setFunc={setBuildType}
                values={buildList}
              />
            </FormControl>
            <FormControl style={style}>
              <InputLabel id="type">{t("addOffer:building-material")}</InputLabel>
              <SelectGroup
                value={material || ""}
                name="Materiał budynku"
                setFunc={setMaterial}
                values={materialList}
              />
            </FormControl>
            <TextField
              id="outlined-basic"
              label={t("addOffer:fees")}
              variant="outlined"
              value={costs || ""}
              style={style}
              onChange={(e) => setCosts(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label={t("addOffer:year-of-construction")}
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
                  {t("addOffer:show-more")} <MdOutlineKeyboardArrowDown />
                </motion.button>
              </div>
            )}
          </article>
          {showMore && (
            <>
              <article>
                <p className="subtitle">{t("addOffer:facilities-nearby")}</p>
                <ButtonGroup
                  title={t("addOffer:communication")}
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
                  title={t("addOffer:education")}
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
                  title={t("addOffer:health-and-beauty")}
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
                  title={t("addOffer:recreation")}
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
                  title={t("addOffer:remaining")}
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
                  title={t("addOffer:amenities")}
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
                <h3>{t("addOffer:kitchen")}</h3>
                <div className="flex-row">
                  <FormControl style={style}>
                    <InputLabel id="type">{t("addOffer:kitchen-condition")}</InputLabel>
                    <SelectGroup
                      value={kitchen || ""}
                      name="Stan kuchni"
                      setFunc={setKitchen}
                      values={stateList}
                    />
                  </FormControl>
                  <div style={style}>
                    <ButtonGroup
                      title={t("addOffer:kitchen-form")}
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
                <h3>{t("addOffer:bathroom")}</h3>
                <div className="flex-row">
                  <FormControl style={style}>
                    <InputLabel id="type">{t("addOffer:bathroom-state")}</InputLabel>
                    <SelectGroup
                      value={bathroom || ""}
                      name="Stan łazienki"
                      setFunc={setBathroom}
                      values={stateList}
                    />
                  </FormControl>
                  <div style={style}>
                    <ButtonGroup
                      title={t("addOffer:bathroom-details")}
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
                <h3>{t("addOffer:interior")}</h3>
                <FormControl style={style}>
                  <InputLabel id="type">{t("addOffer:installation-status")}</InputLabel>
                  <SelectGroup
                    value={installation || ""}
                    name="Stan instalacji"
                    setFunc={setInstallation}
                    values={installationList}
                  />
                </FormControl>
                <FormControl style={style}>
                  <InputLabel id="type">{t("addOffer:volume")}</InputLabel>
                  <SelectGroup
                    value={loudness || ""}
                    name="Głośność"
                    setFunc={setLoudness}
                    values={loudnessList}
                  />
                </FormControl>
                <div className="flex-row">
                  <FormControl style={style}>
                    <InputLabel id="type">{t("addOffer:windows")}</InputLabel>
                    <SelectGroup
                      value={windows || ""}
                      name="Okna"
                      setFunc={setWindows}
                      values={windowList}
                    />
                  </FormControl>{" "}
                  <div style={{ marginLeft: "5px" }}>
                    <ButtonGroup
                      title={t("addOffer:furnished")}
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
                  title={t("addOffer:heating")}
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
                  title={t("addOffer:media")}
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
                  title={t("addOffer:cardinal-directions")}
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
            <h3>{t("addOffer:description")}</h3>
            <p>{t("addOffer:description-should-contain")}</p>
            {description && <p>{t("addOffer:description")} {description.length} / 4000</p>}
            <textarea
              maxLength={4000}
              minLength={30}
              placeholder="Wpisz treść ogłoszenia"
              onChange={(e) => setDescription(e.target.value)}
              value={description || ""}
            />
            <div className="add-buttons-holder">
            <button onClick={() => editOffer()}>
              {t("addOffer:add-offer")}
            </button>
            <AlertDialog id={id} />
          </div>
          </article>
        </form>
      </article>
    </ThemeProvider>
  );
}
