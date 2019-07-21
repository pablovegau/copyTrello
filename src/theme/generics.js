const reference = 1;

export const appMargin = {
  micro: `${reference / 4}rem`,
  milli: `${reference / 2}rem`,
  base: `${reference}rem`,
  kilo: `${reference * 2}rem`,
  mega: `${reference * 3}rem`,
  giga: `${reference * 4}rem`,
};

export const appPadding = {
  micro: appMargin.micro,
  milli: appMargin.milli,
  base: appMargin.base,
  kilo: appMargin.kilo,
  mega: appMargin.mega,
  giga: appMargin.giga,
};

export const centerWithMargin = `
  margin-left: auto;
  margin-right: auto;
`;

export const centerWithTransform = `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const verticalCenterWithTransform = `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
