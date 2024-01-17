import { Categorie } from "./categorie";

export class Appareil {
  id: number | undefined;
	labelle: string | undefined;
	description: string | undefined;
	state: boolean | undefined;
  categories : Categorie | undefined;
  imageUrl : String |undefined;


}
