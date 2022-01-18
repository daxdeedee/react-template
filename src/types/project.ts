export interface IProjectCard {
  title: string;
  data: string;
  thumbNail: string;
  description: string;
  company: string;
  skill: string;
}

export interface IProjectDetail extends IProjectCard {
  people: number;
  link?: string;
}
