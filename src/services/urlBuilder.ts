export default class UrlBuilder {
  private index: number = 0;
  public text: string;

  constructor(endpoint: string) {
    this.text = endpoint;
  }

  public addString(name: string, value: string) {
    this.text += (this.index === 0) ? "?" : "&";
    this.text += name + "=" + value;

    this.index++;
  }

  public addNumber(name: string, value: number) {
    this.addString(name, value.toString());
  }

}