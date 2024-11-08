import { LandMarkInterface } from "./land-mark.interface";

export default interface TimeLineInterface {
  uuid: string;
  title: string;
  summary: string;
  landMarks: LandMarkInterface[];
  isVisible: boolean;
}