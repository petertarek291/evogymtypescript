export interface ClassType{
  name:string,
  description?:string,
  image:string
}

export enum SelectedPage{
    Home='home',
    Benefits='benefits',
    OurClassess='ourclasses',
    ContactUs='contactus'
  }
  export interface BenefitsType{
    icon:JSX.Element,
    title:string,
    description:string
  }