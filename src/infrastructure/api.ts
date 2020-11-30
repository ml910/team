export interface JsonApiKeys<T> {
  type: string;
  id: string;
  attributes: T
}


export interface HasDataKey<K> {
  data: JsonApiKeys<K>[];
}
