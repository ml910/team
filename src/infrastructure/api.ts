export interface JsonApiKeys<T> {
  type: string;
  id: number;
  attributes: T
}


export interface HasDataKey<K> {
  data: JsonApiKeys<K>
}
