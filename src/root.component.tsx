import { useEffect } from "react";
import RoutesApp from "./routes";
import { nhost } from "./api/nhost";

export default function Root() {
  useEffect(() => {
    console.log(nhost);
  }, []);
  return <RoutesApp />;
}
