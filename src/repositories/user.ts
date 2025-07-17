import { INSERT_LAB } from "../graphql/labs";
import { useMutation } from "@apollo/client";
import { InsertLabType } from "../types/insert-labs-type";

export function InsertLabFunction() {
  const [InsertLabMutation, { loading, error }] = useMutation(INSERT_LAB);

  const insertLab = async (values: InsertLabType) => {
    const {
      air_conditioner,
      closing_time,
      enviroment_id,
      fan,
      opening_time,
      qty_chairs,
      qty_computers,
      television,
    } = values;
    try {
      const response = await InsertLabMutation({
        variables: {
          air_conditioner,
          closing_time,
          enviroment_id,
          fan,
          opening_time,
          qty_chairs,
          qty_computers,
          television,
        },
      });

      return response.data?.insert_system_laboratory;
    } catch (error) {
      console.error("Erro na mutation:", error);
    }
  };

  return {
    insertLab,
    loading,
    error,
  };
}
