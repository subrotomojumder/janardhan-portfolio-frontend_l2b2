export type TProjectType = "fullstack" | "frontend" | "backend";

export type TLink = {
  frontendLive?: string;
  frontCode?: string;
  frontExplain?: string;
  backendLive?: string;
  backendCode?: string;
  backendExplain?: string;
  others?: string;
};

export type TProject = {
  _id?: string;
  title: string;
  projectType: TProjectType;
  des?: string;
  desBullet?: string[];
  images?: string[];
  technologies: string[];
  links: TLink;
};
