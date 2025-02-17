import {ActionsSharedConfig} from "../shared/actions-config";
import {LovelaceCardConfig} from "../../homeassistant/data/lovelace";
import {EntitySharedConfig} from "../shared/entity-config";

/**
 * Button Card Config.
 *
 * @property {string} [template] Any valid template from button_card_templates.
 * @property {string} [entity]
 * @property {string} [triggers_update] Entity_id list that would trigger a card update.
 * @property {boolean} [group_expand] When true, auto-expands groups for card updates.
 * @property {string} [icon] Icon to render. May contain templates.
 * @property {string} [color_type] Color either the background of the card or the icon inside the card.
 * @property {string} [color] Color of the icon/card.
 * @property {string} [size] Size of the icon.
 * @property {string} [aspect_ratio] Aspect ratio of the card.
 * @property {object} [tap_action] Define the type of action on click.
 * @property {object} [hold_action] Define the type of action on hold.
 * @property {object} [double_tap_action] Define the type of action on double click.
 * @property {string} [name] Define an optional text to show below the icon.
 * @property {string} [state_display] Override the way the state is displayed.
 * @property {string} [label] Display a label below the card.
 * @property {boolean} [show_name] Whether to show the name or not.
 * @property {boolean} [show_state] Show the state on the card.
 * @property {number} [numeric_precision] Force the display precision of the state.
 * @property {boolean} [show_icon] Whether to show the icon or not.
 * @property {boolean} [show_units] Display or hide the units of a sensor.
 * @property {boolean} [show_label] Display or hide the label.
 * @property {boolean} [show_last_changed] Display the last_changed attribute.
 * @property {boolean} [show_entity_picture] Replace the icon by the entity picture.
 * @property {boolean} [show_live_stream] Display the camera stream.
 * @property {string} [entity_picture] Override the icon/the default entity_picture with your own image.
 * @property {string} [units] Override or define the units to display after the state of the entity.
 * @property {object[]} [styles] See styles.
 * @property {string} [extra_styles] See styles.
 * @property {object[]} [state] State to use for the color, icon and style of the button.
 * @property {object} [confirmation] Display a confirmation popup.
 * @property {object} [lock] Displays a lock on the button.
 * @property {string} [layout] The layout of the button.
 * @property {Record<string, { card: LovelaceCardConfig; }>} [custom_fields] See Custom Fields.
 * @property {object} [variables] See Variables.
 * @property {number} [card_size] Configure the card size seen by the auto layout feature of lovelace.
 * @property {string} [tooltip] Configure the tooltip displayed after hovering the card.
 *
 * @see https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/template.md
 */
export type ButtonCardConfig = LovelaceCardConfig &
  EntitySharedConfig &
  ActionsSharedConfig & {
  icon_color?: string;
  template?: string;
  triggers_update?: string | string[];
  group_expand?: boolean;
  color_type?: string;
  color?: string;
  size?: string;
  aspect_ratio?: string;
  state_display?: string;
  label?: string;
  show_name?: boolean;
  show_state?: boolean;
  numeric_precision?: number;
  show_icon?: boolean;
  show_units?: boolean;
  show_label?: boolean;
  show_last_changed?: boolean;
  show_entity_picture?: boolean;
  show_live_stream?: boolean;
  entity_picture?: string;
  units?: string;
  styles?: {
    card?: { background?: string; padding?: string; height?: string; "--mdc-ripple-press-opacity"?: string;}[];
    img_cell?: { "justify-self"?: string; width?: string; }[];
    icon?: { width?: string; height?: string; color?: string; }[];
    entity_picture?: { "justify-self"?: string; width?: string; }[];
    name?: { "justify-self"?: string; "font-size"?: string; margin?: string; color?: string; }[];
    state?: { "justify-self"?: string; "font-size"?: string; margin?: string; color?: string; }[];
    label?: { "justify-self"?: string; "align-self"?: string; "font-size"?: string; filter?: string; margin?: string; "max-width"?: string; color?: string; }[];
    grid?: { "grid-template-areas"?: string; "grid-template-rows"?: string; "grid-template-columns"?: string; }[];
  };
  extra_styles?: string;
  state?: object[];
  confirmation?: object;
  lock?: object;
  layout?: string;
  custom_fields?: {
    [key: string]: {
      card?: LovelaceCardConfig;
    };
  };
  variables?: object;
  card_size?: number;
  tooltip?: string;
};