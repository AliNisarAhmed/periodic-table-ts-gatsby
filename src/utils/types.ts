
export interface IElement {
  name: string;
  group: Group;
  appearance: string;
  atomic_mass: number;
  boil: number;
  category: string;
  density: number;
  discovered_by: string;
  melt: number;
  named_by: null | string;
  number: number;
  period: number;
  phase: string;
  source: string;
  spectral_img: string;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  shells: number[];
  electron_configuration: string;
  electron_affinity: number;
  electronegativity_pauling: null | number;
  ionization_energies: number[];
  color: null | string;
  molar_heat: string | null;
}

export type Group
  = "metal"
  | "nonmetal"
  | "noble_gas"
  | "alkali_metal"
  | "alkaline_earth_metal"
  | "metalloid"
  | "halogen"
  | "transition_metal"
  | "lanthanoid"
  | "actinoid";

export interface ILegendItem {
  group: string;
  text: string;
}