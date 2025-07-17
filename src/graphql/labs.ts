import { gql } from "@apollo/client";

const INSERT_LAB = gql`
  mutation (
    $air_conditioner: Boolean!
    $closing_time: timetz!
    $enviroment_id: String!
    $fan: Boolean!
    $is_activated: Boolean!
    $opening_time: timetz!
    $qty_chairs: Int!
    $qty_computers: Int!
    $television: Boolean!
    $lab_name: String!
  ) {
    insert_system_laboratory(
      objects: {
        air_conditioner: $air_conditioner
        closing_time: $closing_time
        enviroment_id: $enviroment_id
        fan: $fan
        is_activated: $is_activated
        opening_time: $opening_time
        qty_chairs: $qty_chairs
        qty_computers: $qty_computers
        television: $television
        lab_name: $lab_name
      }
    ) {
      affected_rows
    }
  }
`;

export { INSERT_LAB };
