export function downloadComponent(name: string) {
  const url = `https://shadcn.drosinakis.com/r/${name}.json`;
  return {
    npm: `npx shadcn@latest add ${url}`,
    pnpm: `pnpm dlx shadcn@latest add ${url}`,
  };
}
