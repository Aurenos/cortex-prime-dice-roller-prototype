<script>
  export let sides;
  export let scale = 32;
  export let fill = "#fc2755";
  export let stroke = "#fc2755";
  export let strokeWidth = 1;
  export let text = "";
  let classes = "";
  export { classes as class };
  export let textColor = "white";
</script>

<svg height={scale} width={scale} class={classes}>
  {#if sides === 4}
    <polygon
      {fill}
      {stroke}
      stroke-width={strokeWidth}
      points={`
        0 ${scale * 0.1}
        ${scale} ${scale * 0.1}
        ${scale / 2} ${scale * 0.95}
      `}
    />
  {:else if sides === 6}
    <rect
      {fill}
      {stroke}
      width={scale}
      height={scale}
      stroke-width={strokeWidth + 1}
    />
  {:else if sides === 8}
    <polygon
      {fill}
      {stroke}
      stroke-width={strokeWidth}
      points={`
        0 ${scale / 2}
        ${scale / 2} 0
        ${scale} ${scale / 2}
        ${scale / 2} ${scale}
      `}
    />
  {:else if sides === 10}
    <polygon
      {fill}
      {stroke}
      stroke-width={strokeWidth}
      points={`
        0 ${scale * 0.33}
        ${scale / 2} 0
        ${scale} ${scale * 0.33}
        ${scale} ${scale * 0.66}
        ${scale / 2} ${scale}
        0 ${scale * 0.66}
      `}
    />
  {:else if sides === 12}
    <polygon
      {fill}
      {stroke}
      stroke-width={strokeWidth}
      points={`
        0 ${scale * 0.33}
        ${scale * 0.15} ${scale * 0.1}
        ${scale / 2} 0
        ${scale * 0.85} ${scale * 0.1}
        ${scale} ${scale * 0.33}
        ${scale} ${scale * 0.66}
        ${scale * 0.9} ${scale * 0.85}
        ${scale / 2} ${scale}
        ${scale * 0.15} ${scale * 0.85}
        0 ${scale * 0.66}
      `}
    />
  {/if}
  <text
    x="50%"
    y={sides !== 4 ? "50%" : "55%"}
    dominant-baseline={sides !== 4 ? "middle" : "auto"}
    text-anchor="middle"
    font-size={scale * (sides === 6 ? 0.66 : 0.5)}
    stroke={textColor}
    fill={textColor}
  >
    {text}
  </text>
</svg>
