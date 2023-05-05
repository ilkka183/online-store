export default class UrlBuilder {
  private index: number = 0;
  public text: string;

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

}
