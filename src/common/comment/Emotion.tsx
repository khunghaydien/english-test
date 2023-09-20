type Emotion = {
  [key: string]: {
    name: string;
    unicode: string;
  };
};

const smileyEmojis = {
  smile_with_open_mouth: {
    name: "Smile with Open Mouth",
    unicode: "\u{1F603}",
  },
  smiling_face_with_open_mouth_and_smiling_eyes: {
    name: "Smiling Face with Open Mouth and Smiling Eyes",
    unicode: "\u{1F604}",
  },
  grinning_face_with_smiling_eyes: {
    name: "Grinning Face with Smiling Eyes",
    unicode: "\u{1F601}",
  },
  grinning_squinting_face: {
    name: "Grinning Squinting Face",
    unicode: "\u{1F606}",
  },
  grinning_face_with_sweat: {
    name: "Grinning Face with Sweat",
    unicode: "\u{1F605}",
  },
  face_with_tears_of_joy: {
    name: "Face with Tears of Joy",
    unicode: "\u{1F602}",
  },
  rolling_on_the_floor_laughing: {
    name: "Rolling on the Floor Laughing",
    unicode: "\u{1F923}",
  },
  slightly_smiling_face: {
    name: "Slightly Smiling Face",
    unicode: "\u{1F642}",
  },
  upside_down_face: {
    name: "Upside-Down Face",
    unicode: "\u{1F643}",
  },
  heart_eyes: {
    name: "Heart Eyes",
    unicode: "\u{1F60D}",
  },
  face_blowing_a_kiss: {
    name: "Face Blowing a Kiss",
    unicode: "\u{1F618}",
  },
  kissing_face_with_closed_eyes: {
    name: "Kissing Face with Closed Eyes",
    unicode: "\u{1F61A}",
  },
  face_savoring_food: {
    name: "Face Savoring Food",
    unicode: "\u{1F60B}",
  },
  smiling_face_with_sunglasses: {
    name: "Smiling Face with Sunglasses",
    unicode: "\u{1F60E}",
  },
  smirking_face: {
    name: "Smirking Face",
    unicode: "\u{1F60F}",
  },
  smiling_face_with_halo: {
    name: "Smiling Face with Halo",
    unicode: "\u{1F607}",
  },
  smiling_face_with_hearts: {
    name: "Smiling Face with Hearts",
    unicode: "\u{1F970}",
  },
  heart_eyes_cat: {
    name: "Heart Eyes Cat",
    unicode: "\u{1F63B}",
  },
  hugging_face: {
    name: "Hugging Face",
    unicode: "\u{1F917}",
  },
};
const sadEmojis = {
  crying_face: {
    name: "Crying Face",
    unicode: "\u{1F622}",
  },
  loudly_crying_face: {
    name: "Loudly Crying Face",
    unicode: "\u{1F62D}",
  },
  pensive_face: {
    name: "Pensive Face",
    unicode: "\u{1F614}",
  },
  disappointed_face: {
    name: "Disappointed Face",
    unicode: "\u{1F61E}",
  },
  worried_face: {
    name: "Worried Face",
    unicode: "\u{1F61F}",
  },
  frowning_face: {
    name: "Frowning Face",
    unicode: "\u{1F626}",
  },
  anguished_face: {
    name: "Anguished Face",
    unicode: "\u{1F627}",
  },
  fearful_face: {
    name: "Fearful Face",
    unicode: "\u{1F628}",
  },
  weary_face: {
    name: "Weary Face",
    unicode: "\u{1F629}",
  },
  sleepy_face: {
    name: "Sleepy Face",
    unicode: "\u{1F62A}",
  },
  tired_face: {
    name: "Tired Face",
    unicode: "\u{1F62B}",
  },
  screaming_face: {
    name: "Screaming Face",
    unicode: "\u{1F631}",
  },
  angry_face: {
    name: "Angry Face",
    unicode: "\u{1F620}",
  },
  face_with_symbols_on_mouth: {
    name: "Face with Symbols on Mouth",
    unicode: "\u{1F92C}",
  },
  frowning_face_with_open_mouth: {
    name: "Frowning Face with Open Mouth",
    unicode: "\u{1F626}\u{200D}\u{1F609}",
  },
  pouting_face: {
    name: "Pouting Face",
    unicode: "\u{1F621}",
  },
  confounded_face: {
    name: "Confounded Face",
    unicode: "\u{1F616}",
  },
  persevering_face: {
    name: "Persevering Face",
    unicode: "\u{1F623}",
  },
  disappointed_but_relieved_face: {
    name: "Disappointed but Relieved Face",
    unicode: "\u{1F625}",
  },
  face_with_head_bandage: {
    name: "Face with Head Bandage",
    unicode: "\u{1F915}",
  },
};
const handEmojis = {
  waving_hand: {
    name: "Waving Hand",
    unicode: "\u{1F44B}",
  },
  raised_back_of_hand: {
    name: "Raised Back of Hand",
    unicode: "\u{1F91A}",
  },
  raised_hand_with_fingers_splayed: {
    name: "Raised Hand with Fingers Splayed",
    unicode: "\u{1F590}",
  },
  victory_hand: {
    name: "Victory Hand",
    unicode: "\u{270C}",
  },
  ok_hand: {
    name: "OK Hand",
    unicode: "\u{1F44C}",
  },
  thumbs_up: {
    name: "Thumbs Up",
    unicode: "\u{1F44D}",
  },
  thumbs_down: {
    name: "Thumbs Down",
    unicode: "\u{1F44E}",
  },
  raised_fist: {
    name: "Raised Fist",
    unicode: "\u{270A}",
  },
  oncoming_fist: {
    name: "Oncoming Fist",
    unicode: "\u{1F44A}",
  },
  clapping_hands: {
    name: "Clapping Hands",
    unicode: "\u{1F44F}",
  },
  raising_hands: {
    name: "Raising Hands",
    unicode: "\u{1F64C}",
  },
  folded_hands: {
    name: "Folded Hands",
    unicode: "\u{1F64F}",
  },
  handshake: {
    name: "Handshake",
    unicode: "\u{1F91D}",
  },
  crossed_fingers: {
    name: "Crossed Fingers",
    unicode: "\u{1F91E}",
  },
  love_you_gesture: {
    name: "Love-You Gesture",
    unicode: "\u{1F91F}",
  },
  palms_up_together: {
    name: "Palms Up Together",
    unicode: "\u{1F932}",
  },
  index_pointing_up: {
    name: "Index Pointing Up",
    unicode: "\u{261D}",
  },
  thumbs_up_dark_skin_tone: {
    name: "Thumbs Up: Dark Skin Tone",
    unicode: "\u{1F44D}\u{1F3FF}",
  },
  thumbs_down_medium_light_skin_tone: {
    name: "Thumbs Down: Medium-Light Skin Tone",
    unicode: "\u{1F44E}\u{1F3FC}",
  },
  crossed_fingers_medium_dark_skin_tone: {
    name: "Crossed Fingers: Medium-Dark Skin Tone",
    unicode: "\u{1F91E}\u{1F3FE}",
  },
};
const peopleEmojis = {
  grinning_face_with_big_eyes: {
    name: "Grinning Face with Big Eyes",
    unicode: "\u{1F603}",
  },
  grinning_face_with_smiling_eyes: {
    name: "Grinning Face with Smiling Eyes",
    unicode: "\u{1F604}",
  },
  grinning_face_with_open_mouth: {
    name: "Grinning Face with Open Mouth",
    unicode: "\u{1F600}",
  },
  smiling_face_with_open_mouth_and_smiling_eyes: {
    name: "Smiling Face with Open Mouth and Smiling Eyes",
    unicode: "\u{1F604}",
  },
  smiling_face_with_open_mouth: {
    name: "Smiling Face with Open Mouth",
    unicode: "\u{1F603}",
  },
  smiling_face_with_smiling_eyes: {
    name: "Smiling Face with Smiling Eyes",
    unicode: "\u{1F60A}",
  },
  smiling_face_with_heart_eyes: {
    name: "Smiling Face with Heart Eyes",
    unicode: "\u{1F60D}",
  },
  face_blowing_a_kiss: {
    name: "Face Blowing a Kiss",
    unicode: "\u{1F618}",
  },
  kissing_face: {
    name: "Kissing Face",
    unicode: "\u{1F617}",
  },
  kissing_face_with_closed_eyes: {
    name: "Kissing Face with Closed Eyes",
    unicode: "\u{1F61A}",
  },
  smiling_face_with_squinting_eyes: {
    name: "Smiling Face with Squinting Eyes",
    unicode: "\u{1F642}",
  },
  grinning_squinting_face: {
    name: "Grinning Squinting Face",
    unicode: "\u{1F606}",
  },
  rolling_on_the_floor_laughing: {
    name: "Rolling on the Floor Laughing",
    unicode: "\u{1F923}",
  },
  slightly_smiling_face: {
    name: "Slightly Smiling Face",
    unicode: "\u{1F642}",
  },
  upside_down_face: {
    name: "Upside-Down Face",
    unicode: "\u{1F643}",
  },
  winking_face: {
    name: "Winking Face",
    unicode: "\u{1F609}",
  },
  face_with_tongue: {
    name: "Face with Tongue",
    unicode: "\u{1F61C}",
  },
  zany_face: {
    name: "Zany Face",
    unicode: "\u{1F92A}",
  },
  money_mouth_face: {
    name: "Money-Mouth Face",
    unicode: "\u{1F911}",
  },
  hugging_face: {
    name: "Hugging Face",
    unicode: "\u{1F917}",
  },
};
const natureEmojis = {
  sunflower: {
    name: "Sunflower",
    unicode: "\u{1F33B}",
  },
  mushroom: {
    name: "Mushroom",
    unicode: "\u{1F344}",
  },
  tree: {
    name: "Tree",
    unicode: "\u{1F333}",
  },
  cloud: {
    name: "Cloud",
    unicode: "\u{2601}",
  },
  rain_cloud: {
    name: "Rain Cloud",
    unicode: "\u{1F327}",
  },
  snowflake: {
    name: "Snowflake",
    unicode: "\u{2744}",
  },
  water_wave: {
    name: "Water Wave",
    unicode: "\u{1F30A}",
  },
  volcano: {
    name: "Volcano",
    unicode: "\u{1F30B}",
  },
  comet: {
    name: "Comet",
    unicode: "\u{2604}\u{FE0F}",
  },
  rainbow: {
    name: "Rainbow",
    unicode: "\u{1F308}",
  },
  palm_tree: {
    name: "Palm Tree",
    unicode: "\u{1F334}",
  },
  cactus: {
    name: "Cactus",
    unicode: "\u{1F335}",
  },
  moon: {
    name: "Moon",
    unicode: "\u{1F319}",
  },
  stars: {
    name: "Stars",
    unicode: "\u{1F320}",
  },
  tornado: {
    name: "Tornado",
    unicode: "\u{1F32A}",
  },
  fire: {
    name: "Fire",
    unicode: "\u{1F525}",
  },
  evergreen_tree: {
    name: "Evergreen Tree",
    unicode: "\u{1F332}",
  },
  maple_leaf: {
    name: "Maple Leaf",
    unicode: "\u{1F341}",
  },
  dragon_face: {
    name: "Dragon Face",
    unicode: "\u{1F432}",
  },
  fish: {
    name: "Fish",
    unicode: "\u{1F41F}",
  },
};
const animalEmojis = {
  dog_face: {
    name: "Dog Face",
    unicode: "\u{1F436}",
  },
  cat_face: {
    name: "Cat Face",
    unicode: "\u{1F431}",
  },
  rabbit_face: {
    name: "Rabbit Face",
    unicode: "\u{1F430}",
  },
  lion_face: {
    name: "Lion Face",
    unicode: "\u{1F981}",
  },
  tiger_face: {
    name: "Tiger Face",
    unicode: "\u{1F42F}",
  },
  bear_face: {
    name: "Bear Face",
    unicode: "\u{1F43B}",
  },
  elephant_face: {
    name: "Elephant Face",
    unicode: "\u{1F418}",
  },
  monkey_face: {
    name: "Monkey Face",
    unicode: "\u{1F435}",
  },
  horse_face: {
    name: "Horse Face",
    unicode: "\u{1F434}",
  },
  cow_face: {
    name: "Cow Face",
    unicode: "\u{1F42E}",
  },
  pig_face: {
    name: "Pig Face",
    unicode: "\u{1F437}",
  },
  frog_face: {
    name: "Frog Face",
    unicode: "\u{1F438}",
  },
  penguin_face: {
    name: "Penguin Face",
    unicode: "\u{1F427}",
  },
  owl_face: {
    name: "Owl Face",
    unicode: "\u{1F989}",
  },
  fish: {
    name: "Fish",
    unicode: "\u{1F41F}",
  },
  spider: {
    name: "Spider",
    unicode: "\u{1F577}",
  },
  butterfly: {
    name: "Butterfly",
    unicode: "\u{1F98B}",
  },
  snail: {
    name: "Snail",
    unicode: "\u{1F40C}",
  },
  bee: {
    name: "Bee",
    unicode: "\u{1F41D}",
  },
  ladybug: {
    name: "Ladybug",
    unicode: "\u{1F41E}",
  },
};
const foodEmojis = {
  pizza_slice: {
    name: "Pizza Slice",
    unicode: "\u{1F355}",
  },
  hamburger: {
    name: "Hamburger",
    unicode: "\u{1F354}",
  },
  taco: {
    name: "Taco",
    unicode: "\u{1F32E}",
  },
  sushi: {
    name: "Sushi",
    unicode: "\u{1F363}",
  },
  hot_dog: {
    name: "Hot Dog",
    unicode: "\u{1F32D}",
  },
  popcorn: {
    name: "Popcorn",
    unicode: "\u{1F37F}",
  },
  ice_cream: {
    name: "Ice Cream",
    unicode: "\u{1F368}",
  },
  doughnut: {
    name: "Doughnut",
    unicode: "\u{1F369}",
  },
  cake: {
    name: "Cake",
    unicode: "\u{1F370}",
  },
  chocolate_bar: {
    name: "Chocolate Bar",
    unicode: "\u{1F36B}",
  },
  coffee: {
    name: "Coffee",
    unicode: "\u{2615}",
  },
  tea: {
    name: "Tea",
    unicode: "\u{1F375}",
  },
  clinking_beer_mugs: {
    name: "Clinking Beer Mugs",
    unicode: "\u{1F37B}",
  },
  wine_glass: {
    name: "Wine Glass",
    unicode: "\u{1F377}",
  },
  tropical_drink: {
    name: "Tropical Drink",
    unicode: "\u{1F379}",
  },
  cocktail_glass: {
    name: "Cocktail Glass",
    unicode: "\u{1F378}",
  },
  fork_and_knife: {
    name: "Fork and Knife",
    unicode: "\u{1F374}",
  },
  spoon: {
    name: "Spoon",
    unicode: "\u{1F944}",
  },
  egg: {
    name: "Egg",
    unicode: "\u{1F373}",
  },
  cheese_wedge: {
    name: "Cheese Wedge",
    unicode: "\u{1F9C0}",
  },
};
const drinkEmojis = {
  coffee: {
    name: "Coffee",
    unicode: "\u{2615}",
  },
  tea: {
    name: "Tea",
    unicode: "\u{1F375}",
  },
  clinking_beer_mugs: {
    name: "Clinking Beer Mugs",
    unicode: "\u{1F37B}",
  },
  wine_glass: {
    name: "Wine Glass",
    unicode: "\u{1F377}",
  },
  tropical_drink: {
    name: "Tropical Drink",
    unicode: "\u{1F379}",
  },
  cocktail_glass: {
    name: "Cocktail Glass",
    unicode: "\u{1F378}",
  },
  sake: {
    name: "Sake",
    unicode: "\u{1F376}",
  },
  tumbler_glass: {
    name: "Tumbler Glass",
    unicode: "\u{1F943}",
  },
  juice_box: {
    name: "Juice Box",
    unicode: "\u{1F9C3}",
  },
  milk_bottle: {
    name: "Milk Bottle",
    unicode: "\u{1F95B}",
  },
  baby_bottle: {
    name: "Baby Bottle",
    unicode: "\u{1F37C}",
  },
  cup_with_straw: {
    name: "Cup with Straw",
    unicode: "\u{1F964}",
  },
  bubble_tea: {
    name: "Bubble Tea",
    unicode: "\u{1F9CB}",
  },
  teapot: {
    name: "Teapot",
    unicode: "\u{1FAD6}",
  },
  mate: {
    name: "Mate",
    unicode: "\u{1F9C9}",
  },
  ice_cube: {
    name: "Ice Cube",
    unicode: "\u{1F9CA}",
  },
  spoon: {
    name: "Spoon",
    unicode: "\u{1F944}",
  },
  straw: {
    name: "Straw",
    unicode: "\u{1F964}",
  },
  wine_glass_dark_skin_tone: {
    name: "Wine Glass: Dark Skin Tone",
    unicode: "\u{1F377}\u{1F3FF}",
  },
};
const travelEmojis = {
  airplane: {
    name: "Airplane",
    unicode: "\u{2708}\u{FE0F}",
  },
  sailboat: {
    name: "Sailboat",
    unicode: "\u{26F5}\u{FE0F}",
  },
  motorcycle: {
    name: "Motorcycle",
    unicode: "\u{1F3CD}\u{FE0F}",
  },
  rocket: {
    name: "Rocket",
    unicode: "\u{1F680}",
  },
  car: {
    name: "Car",
    unicode: "\u{1F697}",
  },
  train: {
    name: "Train",
    unicode: "\u{1F68B}",
  },
  metro: {
    name: "Metro",
    unicode: "\u{1F687}",
  },
  tram_car: {
    name: "Tram Car",
    unicode: "\u{1F68A}",
  },
  bus: {
    name: "Bus",
    unicode: "\u{1F68C}",
  },
  trolleybus: {
    name: "Trolleybus",
    unicode: "\u{1F68E}",
  },
  taxi: {
    name: "Taxi",
    unicode: "\u{1F695}",
  },
  delivery_truck: {
    name: "Delivery Truck",
    unicode: "\u{1F69A}",
  },
  fire_engine: {
    name: "Fire Engine",
    unicode: "\u{1F692}",
  },
  ambulance: {
    name: "Ambulance",
    unicode: "\u{1F691}",
  },
  police_car: {
    name: "Police Car",
    unicode: "\u{1F693}",
  },
  motor_boat: {
    name: "Motor Boat",
    unicode: "\u{1F6E5}",
  },
  ship: {
    name: "Ship",
    unicode: "\u{1F6A2}",
  },
  anchor: {
    name: "Anchor",
    unicode: "\u{2693}",
  },
  bicycle: {
    name: "Bicycle",
    unicode: "\u{1F6B2}",
  },
};
const placesEmojis = {
  house: {
    name: "House",
    unicode: "\u{1F3E0}",
  },
  school: {
    name: "School",
    unicode: "\u{1F3EB}",
  },
  office_building: {
    name: "Office Building",
    unicode: "\u{1F3E2}",
  },
  hospital: {
    name: "Hospital",
    unicode: "\u{1F3E5}",
  },
  bank: {
    name: "Bank",
    unicode: "\u{1F3E6}",
  },
  convenience_store: {
    name: "Convenience Store",
    unicode: "\u{1F3EA}",
  },
  church: {
    name: "Church",
    unicode: "\u{26EA}\u{FE0F}",
  },
  mosque: {
    name: "Mosque",
    unicode: "\u{1F54C}",
  },
  synagogue: {
    name: "Synagogue",
    unicode: "\u{1F54D}",
  },
  temple: {
    name: "Temple",
    unicode: "\u{1F6D0}",
  },
  house_with_garden: {
    name: "House with Garden",
    unicode: "\u{1F3E1}",
  },
  factory: {
    name: "Factory",
    unicode: "\u{1F3ED}",
  },
  hotel: {
    name: "Hotel",
    unicode: "\u{1F3E8}",
  },
  love_hotel: {
    name: "Love Hotel",
    unicode: "\u{1F3E9}",
  },
  classical_building: {
    name: "Classical Building",
    unicode: "\u{1F3DB}",
  },
  cityscape: {
    name: "Cityscape",
    unicode: "\u{1F3D9}",
  },
  sunrise_over_mountains: {
    name: "Sunrise over Mountains",
    unicode: "\u{1F304}",
  },
  beach_with_umbrella: {
    name: "Beach with Umbrella",
    unicode: "\u{1F3D6}",
  },
  desert: {
    name: "Desert",
    unicode: "\u{1F3DC}",
  },
};
const activitiesEmojis = {
  artist_palette: {
    name: "Artist Palette",
    unicode: "\u{1F3A8}",
  },
  clapper_board: {
    name: "Clapper Board",
    unicode: "\u{1F3AC}",
  },
  microphone: {
    name: "Microphone",
    unicode: "\u{1F3A4}",
  },
  headphone: {
    name: "Headphone",
    unicode: "\u{1F3A7}",
  },
  musical_keyboard: {
    name: "Musical Keyboard",
    unicode: "\u{1F3B9}",
  },
  saxophone: {
    name: "Saxophone",
    unicode: "\u{1F3B7}",
  },
  guitar: {
    name: "Guitar",
    unicode: "\u{1F3B8}",
  },
  video_game: {
    name: "Video Game",
    unicode: "\u{1F3AE}",
  },
  basketball: {
    name: "Basketball",
    unicode: "\u{1F3C0}",
  },
  soccer_ball: {
    name: "Soccer Ball",
    unicode: "\u{26BD}\u{FE0F}",
  },
  baseball: {
    name: "Baseball",
    unicode: "\u{26BE}\u{FE0F}",
  },
  tennis: {
    name: "Tennis",
    unicode: "\u{1F3BE}",
  },
  bowling: {
    name: "Bowling",
    unicode: "\u{1F3B3}",
  },
  fishing_pole: {
    name: "Fishing Pole",
    unicode: "\u{1F3A3}",
  },
  skis: {
    name: "Skis",
    unicode: "\u{1F3BF}",
  },
  trophy: {
    name: "Trophy",
    unicode: "\u{1F3C6}",
  },
  medal: {
    name: "Medal",
    unicode: "\u{1F3C5}",
  },
  running_shirt_with_sash: {
    name: "Running Shirt with Sash",
    unicode: "\u{1F3BD}",
  },
  ticket: {
    name: "Ticket",
    unicode: "\u{1F3AB}",
  },
};
const objectEmojis = {
  computer: {
    name: "Computer",
    unicode: "\u{1F4BB}",
  },
  smartphone: {
    name: "Smartphone",
    unicode: "\u{1F4F1}",
  },
  camera: {
    name: "Camera",
    unicode: "\u{1F4F7}",
  },
  television: {
    name: "Television",
    unicode: "\u{1F4FA}",
  },
  radio: {
    name: "Radio",
    unicode: "\u{1F4FB}",
  },
  movie_camera: {
    name: "Movie Camera",
    unicode: "\u{1F3A5}",
  },
  microphone: {
    name: "Microphone",
    unicode: "\u{1F3A4}",
  },
  musical_keyboard: {
    name: "Musical Keyboard",
    unicode: "\u{1F3B9}",
  },
  guitar: {
    name: "Guitar",
    unicode: "\u{1F3B8}",
  },
  book: {
    name: "Book",
    unicode: "\u{1F4D6}",
  },
  newspaper: {
    name: "Newspaper",
    unicode: "\u{1F4F0}",
  },
  art: {
    name: "Art",
    unicode: "\u{1F3A8}",
  },
  briefcase: {
    name: "Briefcase",
    unicode: "\u{1F4BC}",
  },
  watch: {
    name: "Watch",
    unicode: "\u{231A}",
  },
  hourglass: {
    name: "Hourglass",
    unicode: "\u{23F3}",
  },
  scissors: {
    name: "Scissors",
    unicode: "\u{2702}",
  },
  wrench: {
    name: "Wrench",
    unicode: "\u{1F527}",
  },
  lock: {
    name: "Lock",
    unicode: "\u{1F512}",
  },
  hammer: {
    name: "Hammer",
    unicode: "\u{1F528}",
  },
  flashlight: {
    name: "Flashlight",
    unicode: "\u{1F526}",
  },
};
const symbolEmojis = {
  heart: {
    name: "Heart",
    unicode: "\u{2764}\u{FE0F}",
  },
  star: {
    name: "Star",
    unicode: "\u{2B50}",
  },
  exclamation_mark: {
    name: "Exclamation Mark",
    unicode: "\u{2757}\u{FE0F}",
  },
  question_mark: {
    name: "Question Mark",
    unicode: "\u{2753}",
  },
  music_note: {
    name: "Music Note",
    unicode: "\u{1F3B5}",
  },
  fire: {
    name: "Fire",
    unicode: "\u{1F525}",
  },
  thumbs_up: {
    name: "Thumbs Up",
    unicode: "\u{1F44D}",
  },
  thumbs_down: {
    name: "Thumbs Down",
    unicode: "\u{1F44E}",
  },
  ok_hand: {
    name: "OK Hand",
    unicode: "\u{1F44C}",
  },
  clapping_hands: {
    name: "Clapping Hands",
    unicode: "\u{1F44F}",
  },
  folded_hands: {
    name: "Folded Hands",
    unicode: "\u{1F64F}",
  },
  writing_hand: {
    name: "Writing Hand",
    unicode: "\u{270D}\u{FE0F}",
  },
  purple_heart: {
    name: "Purple Heart",
    unicode: "\u{1F49C}",
  },
  money_bag: {
    name: "Money Bag",
    unicode: "\u{1F4B0}",
  },
  crown: {
    name: "Crown",
    unicode: "\u{1F451}",
  },
  graduation_cap: {
    name: "Graduation Cap",
    unicode: "\u{1F393}",
  },
  alarm_clock: {
    name: "Alarm Clock",
    unicode: "\u{23F0}",
  },
  email: {
    name: "Email",
    unicode: "\u{2709}",
  },
  bell: {
    name: "Bell",
    unicode: "\u{1F514}",
  },
  ribbon: {
    name: "Ribbon",
    unicode: "\u{1F380}",
  },
};
const flagEmojis = {
  united_states: {
    name: "United States Flag",
    unicode: "\u{1F1FA}\u{1F1F8}",
  },
  united_kingdom: {
    name: "United Kingdom Flag",
    unicode: "\u{1F1EC}\u{1F1E7}",
  },
  canada: {
    name: "Canada Flag",
    unicode: "\u{1F1E8}\u{1F1E6}",
  },
  france: {
    name: "France Flag",
    unicode: "\u{1F1EB}\u{1F1F7}",
  },
  germany: {
    name: "Germany Flag",
    unicode: "\u{1F1E9}\u{1F1EA}",
  },
  japan: {
    name: "Japan Flag",
    unicode: "\u{1F1EF}\u{1F1F5}",
  },
  australia: {
    name: "Australia Flag",
    unicode: "\u{1F1E6}\u{1F1FA}",
  },
  brazil: {
    name: "Brazil Flag",
    unicode: "\u{1F1E7}\u{1F1F7}",
  },
  china: {
    name: "China Flag",
    unicode: "\u{1F1E8}\u{1F1F3}",
  },
  india: {
    name: "India Flag",
    unicode: "\u{1F1EE}\u{1F1F3}",
  },
  mexico: {
    name: "Mexico Flag",
    unicode: "\u{1F1F2}\u{1F1FD}",
  },
  russia: {
    name: "Russia Flag",
    unicode: "\u{1F1F7}\u{1F1FA}",
  },
  south_korea: {
    name: "South Korea Flag",
    unicode: "\u{1F1F0}\u{1F1F7}",
  },
  spain: {
    name: "Spain Flag",
    unicode: "\u{1F1EA}\u{1F1F8}",
  },
  italy: {
    name: "Italy Flag",
    unicode: "\u{1F1EE}\u{1F1F9}",
  },
  argentina: {
    name: "Argentina Flag",
    unicode: "\u{1F1E6}\u{1F1F7}",
  },
  south_africa: {
    name: "South Africa Flag",
    unicode: "\u{1F1FF}\u{1F1E6}",
  },
  egypt: {
    name: "Egypt Flag",
    unicode: "\u{1F1EA}\u{1F1EC}",
  },
  greece: {
    name: "Greece Flag",
    unicode: "\u{1F1EC}\u{1F1F7}",
  },
  switzerland: {
    name: "Switzerland Flag",
    unicode: "\u{1F1E8}\u{1F1ED}",
  },
};
const emotions = [
  {
    name: "smile",
    items: smileyEmojis,
  },
  {
    name: "smile",
    items: sadEmojis,
  },
  {
    name: "people",
    items: peopleEmojis,
  },
  {
    name: "smile",
    items: handEmojis,
  },
  {
    name: "smile",
    items: natureEmojis,
  },
  {
    name: "smile",
    items: animalEmojis,
  },
  {
    name: "smile",
    items: foodEmojis,
  },
  {
    name: "smile",
    items: drinkEmojis,
  },
  {
    name: "smile",
    items: travelEmojis,
  },
  {
    name: "smile",
    items: placesEmojis,
  },
  {
    name: "smile",
    items: activitiesEmojis,
  },
  {
    name: "smile",
    items: symbolEmojis,
  },
  {
    name: "object",
    items: objectEmojis,
  },
  {
    name: "smile",
    items: flagEmojis,
  },
];
console.log(emotions);

type Props = {
  onClick: (emotion: string) => void;
};
const Emotion = ({ onClick }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   onClick(e.target.value)
  };
  return (
    <div className="emotions">
      <div className="emotions-search">
        <input
          type="text"
          onChange={() => onChange}
        />
      </div>
      <div className="emotions-container"></div>
      <div className="emotions-detail"></div>
    </div>
  );
};

export default Emotion;
