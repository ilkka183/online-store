export default class QueryBuilder {
  private index: number = 0;
  private text: string;

  constructor(endpoint: string) {
    this.text = endpoint;
  }

  public addString(key: string, value: string) {
    this.text += (this.index === 0) ? "?" : "&";
    this.text += key + "=" + value;

    this.index++;
  }

  public addNumber(key: string, value: number) {
    this.addString(key, value.toString());
  }

  public get url() {
    return this.text;
  }

  public get encodedUrl() {
    return encodeURI(this.text);
  }

}
