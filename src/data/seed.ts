export const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "Test User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

export const companies = [
  {
    id: 1,
    name: "DMC",
    website: "www.dmc.com",
    productType: "floss",
  },
];

export const projectDimensions = [
  {
    id: 1,
    height: 2,
    width: 2,
    display: "2 x 2",
  },
  {
    id: 2,
    height: 4,
    width: 4,
    display: "4 x 4",
  },
];

export const flossColors = [
  {
    id: 1,
    companyIdentifier: "0",
    name: "White",
    hex: "#FFFFFF",
    companyId: 1,
  },
  {
    id: 2,
    companyIdentifier: "310",
    name: "Black",
    hex: "#000000",
    companyId: 1,
  },
  {
    id: 3,
    companyIdentifier: "208",
    name: "Lavender Very Dark",
    hex: "#945B80",
    companyId: 1,
  },
  {
    id: 4,
    companyIdentifier: "209",
    name: "Lavender Dark",
    hex: "#CE94BA",
    companyId: 1,
  },
];

export const projects = [
  {
    id: 1,
    title: "First Project",
    dimensionsId: 1,
    creatorId: "410544b2-4001-4271-9855-fec4b6a6442a",
  },
  {
    id: 2,
    title: "Second Project",
    dimensionsId: 2,
    creatorId: "410544b2-4001-4271-9855-fec4b6a6442a",
  },
];

export const flossColorsUsed = [
  {
    projectId: 1,
    flossColorId: 3,
    rowId: 1,
    columnId: 1,
  },
  {
    projectId: 1,
    flossColorId: 1,
    rowId: 1,
    columnId: 2,
  },
  {
    projectId: 1,
    flossColorId: 2,
    rowId: 1,
    columnId: 3,
  },
  {
    projectId: 1,
    flossColorId: 3,
    rowId: 1,
    columnId: 4,
  },
];
