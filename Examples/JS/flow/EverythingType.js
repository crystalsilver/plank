//  @flow
//
//  EverythingType.js
//  Autogenerated by plank
//
//  DO NOT EDIT - EDITS WILL BE OVERWRITTEN
//  @generated
//

import type { PlankDate, PlankURI } from './runtime.flow.js';
import type { BoardType } from './BoardType.js';
import type { ImageType } from './ImageType.js';
import type { PinType } from './PinType.js';
import type { UserType } from './UserType.js';

export type EverythingMapPolymorphicValuesType = UserType | BoardType | ImageType | PinType | EverythingType | Array<*> | {};

export type EverythingPolymorphicPropType = UserType | BoardType | ImageType | PinType | EverythingType | string | boolean | number | number | PlankDate | PlankURI;

export type EverythingIntEnum = 
  | 1 /* int_case_1 */
  | 2 /* int_case_2 */
  | 3 /* int_case_3 */
;

export type EverythingStringEnum = 
  | 'case1'
  | 'case2'
  | 'case3'
;

export type EverythingType = $Shape<{|
  +array_prop: ?Array<*>,
  +boolean_prop: boolean,
  +date_prop: ?PlankDate,
  +int_enum: EverythingIntEnum,
  +int_prop: number,
  +list_polymorphic_values: ?Array<*>,
  +list_with_list_and_other_model_values: ?Array<Array<UserType>>,
  +list_with_map_and_other_model_values: ?Array<{ +[string]: UserType }>,
  +list_with_object_values: ?Array<string>,
  +list_with_other_model_values: ?Array<UserType>,
  +list_with_primitive_values: ?Array<number /* Integer */>,
  +map_polymorphic_values: ?{ +[string]: EverythingMapPolymorphicValuesType },
  +map_prop: ?{},
  +map_with_list_and_other_model_values: ?{ +[string]: Array<UserType> },
  +map_with_map_and_other_model_values: ?{ +[string]: {} },
  +map_with_object_values: ?{ +[string]: string },
  +map_with_other_model_values: ?{ +[string]: UserType },
  +map_with_primitive_values: ?{ +[string]: number } /* Integer */,
  +number_prop: number,
  +other_model_prop: ?UserType,
  +polymorphic_prop: ?EverythingPolymorphicPropType,
  +set_prop: ?Array<*>,
  +set_prop_with_other_model_values: ?Array<UserType>,
  +set_prop_with_primitive_values: ?Array<number /* Integer> */>,
  +set_prop_with_values: ?Array<string>,
  +string_enum: EverythingStringEnum,
  +string_prop: ?string,
  +type: ?string,
  +uri_prop: ?PlankURI,
|}> & {
  id: string
};

