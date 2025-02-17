import {AbstractCard} from "./AbstractCard";
import {cards} from "../types/strategy/cards";
import {EntityRegistryEntry} from "../types/homeassistant/data/entity_registry";
import {LightCardConfig} from "../types/lovelace-mushroom/cards/light-card-config";
import {generic} from "../types/strategy/generic";
import isCallServiceActionConfig = generic.isCallServiceActionConfig;
import isCallServiceActionTarget = generic.isCallServiceActionTarget;
import { ButtonCardConfig } from "../types/lovelace-button-card/cards/button-card-config";


// noinspection JSUnusedGlobalSymbols Class is dynamically imported.
/**
 * Light Card Class
 *
 * Used to create a card for controlling an entity of the light domain.
 *
 * @class
 * @extends AbstractCard
 */
class LightCard extends AbstractCard {
  /**
   * Default configuration of the card.
   *
   * @type {ButtonCardConfig}
   * @private
   */
  #defaultConfig: ButtonCardConfig = {
    type: "custom:button-card",
    icon: "",
    tap_action: {
      action: "toggle",
      haptic: "medium",
    },
    hold_action: {
      action: "more-info",
      haptic: "medium",
    },
    custom_fields: {
      slider: {
        card: { 
          type: "custom:my-slider-v2",
          entity: "",
          colorMode: "brightness",
          styles: {
            container: [
              {
                background: "none",
              },
              {
                "border-radius": "100px",
              },
              {
                overflow: "visible",
              },
            ],
            card: [
              {
                height: "16px",
              },
              {
                padding: "0 8px",
              },
              {
                background: "linear-gradient(90deg, rgba(255,255,255, 0.3) 0%, rgba(255,255,255, 1) 100%)",
              },
            ],
            track: [
              {
                overflow: "visible",
              },
              {
                background: "none",
              },
            ],
            progress: [
              {
                background: "none",
              },
            ],
            thumb: [
              {
                background: "var(--black)",
              },
              {
                top: "2px",
              },
              {
                right: "-6px",
              },
              {
                height: "12px",
              },
              {
                width: "12px",
              },
              {
                "border-radius": "100px",
              },
            ],
          },
        },
      },
    },
    styles: {
      grid: [
        {
          "grid-template-areas": "\"i\" \"n\" \"slider\"",
        },
        {
          "grid-template-columns": "1fr",
        },
        {
          "grid-template-rows": "1fr min-content min-content",
        },
      ],
      card: [
        {
          background: "var(--contrast2)",
        },
        {
          padding: "16px",
        },
        {
          "--mdc-ripple-press-opacity": "0",
        },
      ],
      img_cell: [
        {
          "justify-self": "start",
        },
        {
          width: "24px",
        },
      ],
      icon: [
        {
          width: "24px",
        },
        {
          height: "24px",
        },
        {
          color: "var(--contrast8)",
        },
      ],
      name: [
        {
          "justify-self": "start",
        },
        {
          "font-size": "14px",
        },
        {
          margin: "4px 0 12px 0",
        },
        {
          color: "var(--contrast8)",
        },
      ],
    },
    state: [
      {
        value: "on",
        styles: {
          card: [
            {
              background: "var(--yellow)",
            },
          ],
          icon: [
            {
              color: "var(--black)",
            },
          ],
          name: [
            {
              color: "var(--black)",
            },
          ],
        },
      },
      {
        value: "off",
        styles: {
          icon: [
            {
              color: "var(--contrast20)",
            },
          ],
          name: [
            {
              color: "var(--contrast20)",
            },
          ],
        },
      },
    ],
  };

  /**
   * Class constructor.
   *
   * @param {EntityRegistryEntry} entity The hass entity to create a card for.
   * @param {cards.LightCardOptions} [options={}] Options for the card.
   * @throws {Error} If the Helper module isn't initialized.
   */
  constructor(entity: EntityRegistryEntry, options: cards.LightCardOptions = {}) {
    super(entity);

    // Set the target for double-tap action.
    if (
      isCallServiceActionConfig(this.#defaultConfig.double_tap_action)
      && isCallServiceActionTarget(this.#defaultConfig.double_tap_action.target)
    ) {
      this.#defaultConfig.double_tap_action.target.entity_id = entity.entity_id;
      
    }

    if (this.#defaultConfig.custom_fields?.slider?.card) {
      this.#defaultConfig.custom_fields.slider.card.entity = entity.entity_id;
    }

    this.config = Object.assign(this.config, this.#defaultConfig, options);
  }
}

export {LightCard};
