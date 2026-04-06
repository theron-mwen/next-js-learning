
import { serverSideFunction } from "@/utils/server-util";
export default function ServerRoutePage() {
    serverSideFunction();

    return <h1>Server Route</h1>;
}