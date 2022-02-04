export type Id = string & { __brand__: "id" };

export type Tree = {
  id: Id;
  children: Tree[];
  depth: number;
  parent: Id | null;
};

export type ItemDetails = {
  title: string;
  text?: string;
};

export type ItemState = {
  collapsed: boolean;
  editMode: boolean;
};

export type ItemDynamicState = {
  editTitle: string;
  editText: string;
}

export type ItemKV = Record<Id, ItemDetails>;
