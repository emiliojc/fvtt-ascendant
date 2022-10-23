/**
 * Extends base Actor document to accommodate for Ascendant specific characters
 * @extends {Actor}
 */
export class AscendantActor extends Actor {

  /** @inheritdoc */
  prepareData() {
    super.prepareData();
  }

  /** @inheritdoc */
  prepareBaseData() {
    super.prepareBaseData();
  }

  /** @inheritdoc */
  prepareDerivedData() {
    super.prepareDerivedData();
    const data = this.system;
  }

}
