type IconProps = {
  fill?: string;
};

const User = (props: IconProps = { fill: "black" }) =>
  `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="${props.fill}" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
</svg>`;

export const TokenIcon = {
  User,
};
