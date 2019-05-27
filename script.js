bubbly({
    colorStart: "#fff",
    colorStop: "#fff",
    blur: 1,
    bubbles: 100,
    compose: "source-over",
    shadowColor: "#ff89c7",
    radiusFunc: () => Math.random() * 20,
    bubbleFunc: () => `hsla(0, 0%, 90%, ${Math.random() * 0.25})`,
});
