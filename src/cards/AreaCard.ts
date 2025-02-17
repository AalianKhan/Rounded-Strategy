import {AbstractCard} from "./AbstractCard";
import {cards} from "../types/strategy/cards";
import {AreaRegistryEntry} from "../types/homeassistant/data/area_registry";
import {TemplateCardConfig} from "../types/lovelace-mushroom/cards/template-card-config";
import { ButtonCardConfig } from "../types/lovelace-button-card/cards/button-card-config";

// noinspection JSUnusedGlobalSymbols Class is dynamically imported.
/**
 * Area Card Class
 *
 * Used to create a card for an entity of the area domain.
 *
 * @class
 * @extends AbstractCard
 */
class AreaCard extends AbstractCard {
  /**
   * Default configuration of the card.
   *
   * @type {ButtonCardConfig}
   * @private
   */
  #defaultConfig: ButtonCardConfig = {
    type: "custom:button-card",
    name: undefined,
    icon: "mdi:texture-box",
    tap_action: {
      action: "navigate",
      navigation_path: "",
    },
    hold_action: {
      action: "none",
    },
    styles: {
      card: [
        {
          background: "var(--contrast2)",
          padding: "16px",
          height: "100px",
        }
      ],
      img_cell: [
        {
          "justify-self": "start",
          width: "24px",
        }
      ],
      icon: [
        {
          width: "24px",
          height: "24px",
          color: "var(--contrast20)",
        }
      ],
      label: [
        {
          "justify-self": "start",
          "align-self": "start",
          "font-size": "12px",
          filter: "opacity(40%)",
          margin: "4px 0 3px 0",
          "max-width": "100%",
          color: "var(--contrast8)",
        }
      ],
      name: [
        {
          "justify-self": "start",
          "font-size": "14px",
          margin: "4px 0 12px 0",
          color: "var(--contrast20)",
        }
      ],
    }    
  };

  /**
   * Class constructor.
   *
   * @param {AreaRegistryEntry} area The area entity to create a card for.
   * @param {cards.TemplateCardOptions} [options={}] Options for the card.
   *
   * @throws {Error} If the Helper module isn't initialized.
   */
  constructor(area: AreaRegistryEntry, options: cards.TemplateCardOptions = {}) {
    super(area);

    // Don't override the default card type if default is set in the strategy options.
    if (options.type === "default") {
      delete options.type;
    }

    // Initialize the default configuration.
    this.#defaultConfig.name = area.name;
    if (this.#defaultConfig.tap_action && ("navigation_path" in this.#defaultConfig.tap_action)) {
      this.#defaultConfig.tap_action.navigation_path = area.area_id;
    }

    this.config = Object.assign(this.config, this.#defaultConfig, options);
  }
}

export {AreaCard};