import { api } from "../../../pages/api/axios";

const fetchUserData = async (id) => {
  api.get("/users/" + id).then((response) => {});
};
