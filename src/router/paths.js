
function path(root, sublink) {
  return `${root}${sublink}`;
}

export const ROOTS_AUTH = "/guest/";
export const ROOTS_DASHBOARD = "/";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "login"),
  register: path(ROOTS_AUTH, "register"),
  home: path(ROOTS_AUTH, "home"),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  home: path(ROOTS_DASHBOARD, "home"),
  blogDetail: path(ROOTS_DASHBOARD, "blog-detail"),
  speciality: path(ROOTS_DASHBOARD, "speciality"),
  FoodAndDrink: path(ROOTS_DASHBOARD, "foodanddrink"),
  Intermediary: path(ROOTS_DASHBOARD, "Intermediary"),
};
