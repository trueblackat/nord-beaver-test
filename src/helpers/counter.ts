const counter = (cooldown: number, callback: (formattedTime: string) => void) => {
  const now = new Date().valueOf();
  let result: number;

  if (cooldown >= now) {
    requestAnimationFrame(() => {
      counter(cooldown, callback);
    });
  }

  // Preventing minus values
  result = Math.ceil((cooldown - now) / 1000);
  result = result >= 0 ? result : 0;

  callback(`${result}s`);
};

export default counter;
