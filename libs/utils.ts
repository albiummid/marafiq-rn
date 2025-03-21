export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// export const getRandomColor = () => {
//   const letters = '0123456789ABCDEF';

//   let color = '#';

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// };

export const getRandomLightColor = () => {
  const letters = '89ABCDEF'; // Starting from a higher range for light colors
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 9)]; // 8 light colors
  }
  return color;
};
const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'pink',
  'indigo',
  'gray',

  'rose',
  'emerald',
  'sky',
  'cyan',
  'teal',
  'lime',
  'orange',
] as const;

type Color = (typeof colors)[number];

// Define shades

const shades = [
  '50',

  '100',

  '200',

  '300',

  '400',

  '500',

  '600',

  '700',

  '800',

  '900',
] as const;

type Shade = (typeof shades)[number];

export function getRandomTailwindColor(props?: {shade?: Shade; color?: Color}) {
  // Define Tailwind colors

  // Get random color and shade

  const randomColor = props?.color
    ? props.color
    : colors[Math.floor(Math.random() * colors.length)];

  const randomShade = props?.shade
    ? props.shade
    : shades[Math.floor(Math.random() * shades.length)];

  return `${randomColor}-${randomShade}`;
}
