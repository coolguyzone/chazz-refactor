
export class FetchResult {
  name: string;
  animal: string;
  firmness: string;

  constructor(obj?: any) {
    this.name             = obj && obj.name         || null;
    this.animal           = obj && obj.animal       || null;
    this.firmness         = obj && obj.firmness     || null;
  }
}
