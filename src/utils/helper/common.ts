const isActive = (globalpath: string, currentPath: string) => {
  var g_path = globalpath.split("/").filter((x) => x);
  var c_path = currentPath.split("/").filter((x) => x);

  return g_path[1] === c_path[1];
};

export const Helper = {
  url: {
    isActive,
  },
};
