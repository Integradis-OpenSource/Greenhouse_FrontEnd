export interface ProcessEntry {
  author: string;
  crop_id: number;
  day: number;
  date:  string;
  time: string;
  hay?: number;
  corn?: number;
  guano?:number;
  cottonSeedCake?: number;
  soybeanMeal?: number;
  gypsum?: number;
  urea?: number;
  ammoniumSulphate?: number;
  activities?: string;
  temperature?: number;
  comment?: string;
  thermocoupleOne?: number;
  thermocoupleTwo?: number;
  thermocoupleThree?: number;
  averageThermocouple?: number;
  roomTemperature?: number;
  grow_room?: number;
  motorFrequency?: number;
  freshAir?: number;
  recirculation?: number;
  air_temperature?: number;
  compost_temperature?: string;
  carbon_dioxide?: number;
  air_humidity?: number;
  setting?: number;
  processType?: string;
  [key: string]: any;
}
