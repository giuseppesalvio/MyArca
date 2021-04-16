export interface Text {
  value: string;
  mimetype: string;
  charset: string;
}

export interface Content {
  text: Text;
}

export interface A {
  name: string;
  value: string;
}

export interface Metadata {
  a: A[];
}

export interface B {
  s: number;
  e: number;
}

export interface Boundary {
  b: B[];
  name: string;
  set: string;
}

export interface Ad {
  name: string;
  scope: string;
  type: string;
}

export interface Ad2 {
  name: string;
  type: string;
  scope: string;
  constraint: string;
}

export interface Type2 {
  ad: Ad2[];
  fullname: string;
  name: string;
}

export interface Type {
  ad: Ad[];
  fullname: string;
  name: string;
  type: Type2[];
}

export interface A2 {
  name: string;
  value: string;
  type: string;
  refName: string;
  refType: string;
}

export interface Descriptor {
  name: string;
  label: string;
  type: string;
  a: A2[];
}

export interface A3 {
  name: string;
  value: string;
  type: string;
  refName: string;
  refType: string;
  s?: number;
  e?: number;
}

export interface Annotation {
  a: A3[];
  name: string;
  type: string;
  s: number;
  e: number;
  label: string;
}

export interface Knowledge {
  type: Type[];
  descriptor: Descriptor[];
  annotation: Annotation[];
  name: string;
}

export interface Status {
  valid: boolean;
}

export interface Doc {
  content: Content[];
  metadata: Metadata[];
  boundaries: Boundary[];
  knowledge: Knowledge[];
  status: Status;
  id: string;
}

export interface CogitoResponse {
  doc: Doc[];
}
