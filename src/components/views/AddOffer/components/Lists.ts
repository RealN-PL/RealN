import i18next from 'i18n';

const t = i18next.t;

export const educationList = [
  t("lists:nursery"),
  t("lists:kindergarten"),
  t("lists:primary-school"),
  t("lists:high-school"),
  t("lists:college"),
  t("lists:gymnasium"),
];

export const transportList = [
  t("lists:autobus"),
  t("lists:tram"),
  t("lists:trolleybus"),
  t("lists:suburban-railway"),
  t("lists:metro"),
  t("lists:pkp"),
  t("lists:pks"),
  t("lists:airport"),
];

export const healthList = [t("lists:clinic/hospital"), t("lists:pharmacy"), t("lists:vet")];

export const recreationList = [
  t("lists:pool"),
  t("lists:gym/fitness"),
  t("lists:playground"),
  t("lists:park"),
  t("lists:forest"),
  t("lists:lake"),
];

export const othersList = [t("lists:shopping-mall"), t("lists:store"), t("lists:bazaar")];

export const amenitiesList = [
  t("lists:elevator"),
  t("lists:closed-area"),
  t("lists:security"),
  t("lists:reception"),
  t("lists:entrance-for-the-disabled"),
  t("lists:patio"),
  t("lists:entry-phone"),
  t("lists:videophone"),
];
export const kitchenList = [  t("lists:in-the-annex"), t("lists:separate"), t("lists:clearance")];

export const bathroomList = [
  t("lists:separate-toilet"),
  t("lists:with-window"),
  t("lists:bath"),
  t("lists:shower"),
  t("lists:jacuzzi"),
];
export const furnitureList = [t("lists:yes"), t("lists:no"), t("lists:partly")];
export const energyList = [
  t("lists:urban"),
  t("lists:own"),
  t("lists:biomas"),
  t("lists:floor"),
  t("lists:geothermals"),
  t("lists:air-conditioning"),
  t("lists:fireplace"),
  t("lists:sunny"),
  t("lists:carbon"),
  t("lists:oil"),
  t("lists:electric"),
  t("lists:gassy"),
  t("lists:heat-pump"),
  t("lists:lack"),
];
export const mediaList = [
  t("lists:water"),
  t("lists:current"),
  t("lists:strength"),
  t("lists:gas"),
  t("lists:internet"),
  t("lists:cable-tv"),
  t("lists:phone"),
];
export const directionsList = [
  t("lists:norhern"),
  t("lists:southern"),
  t("lists:eastern"),
  t("lists:western"),
];
export const typeLists = [
  ["sell",  t("lists:sell")],
  ["rent",  t("lists:rent")],
  ["other",  t("lists:Other")],
];

export const roomLists = [
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
  ["6", "6"],
  ["7", "7"],
  ["8+", t("lists:more-than-seven")],
];

export const floorLists = [
  ["attic", t("lists:Attic")],
  ["cellar", t("lists:living-cellar")],
  ["ground-floor", t("lists:Ground-floor")],
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
  ["6", "6"],
  ["7", "7"],
  ["8", "8"],
  ["9", "9"],
  ["10", "10"],
  ["11", "11"],
  ["12", "12"],
  ["13", "13"],
  ["14", "14"],
  ["15", "15"],
  ["16", "16"],
  ["17", "17"],
  ["18", "18"],
  ["19", "19"],
  ["20", "20"],
  ["21", "21"],
  ["22", "22"],
  ["23", "23"],
  ["24", "24"],
  ["25", "25"],
  ["26", "26"],
  ["27", "27"],
  ["28", "28"],
  ["29", "29"],
  ["30", "30"],
  ["30+", t("lists:more-than-thirty")],
];

export const conditionList = [
    ["high-standard", t("lists:high-standard")],
    ["freshly-renovated", t("lists:freshly-renovated")],
    ["good", t("lists:high-standard")],
    ["to-refresh", t("lists:to-refresh")],
    ["for-renovation", t("lists:For-renovation")],
    ["developers-status", t("lists:developers-status")],
]
export const parkingList = [
    ["brak", t("lists:no-parking-space")],
    ["on-street", t("lists:belonging-on-the-street")],
    ["guarder", t("lists:guarded-parking")],
    ["garage", t("lists:garage")],
    ["shelter", t("lists:under-the-shelter")],
]

export const buildList = [
    ["block", t("lists:block")],
    ["tenement-house", t("lists:tenement-house")],
    ["terraced-house", t("lists:terraced-house")],
    ["apartment", t("lists:apartment")],
    ["loft", t("lists:loft")],
    ["seal", t("lists:seal")],
]
export const materialList = [
    ["concrete", t("lists:concrete")],
    ["brick", t("lists:brick")],
    ["hollow", t("lists:hollow")],
    ["plate", t("lists:plate")],
    ["h-frame", t("lists:h-frame")],
    ["silicate", t("lists:silicate")],
    ["stone", t("lists:stone")],
    ["wood", t("lists:wood")],
    ["steel-structure", t("lists:steel-structure")],
    ["other", t("lists:other")],
]

export const stateList = [
    ["very-good", t("lists:very-good")],
    ["good", t("lists:good")],
    ["for-renewal", t("lists:for-renewal")],
    ["for-renovation", t("lists:for-renovation")],
]

export const installationList = [
    ["new", t("lists:new")],
    ["after-replacing", t("lists:after-replacing")],
    ["partially-replaced", t("lists:partially-replaced")],
    ["to-exchange", t("lists:to-exchange")],
]

export const loudnessList = [
    ["quiet", t("lists:quiet")],
    ["moderately-quiet", t("lists:moderately-quiet")],
    ["moderately-loud", t("lists:moderately-loud")],
    ["loud", t("lists:loud")],
]

export const windowList = [
    ["wooden", t("lists:wooden")],
    ["plastic/PVC", t("lists:plastic/PVC")],
    ["aluminum", t("lists:aluminum")],

]

export const style={
    width: "48%",
    margin: "5px 1%",
    minWidth: "200px",
    alignSelf: "center",
}

